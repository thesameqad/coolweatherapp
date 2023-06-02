/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Geocoder from '@timwangdev/react-native-geocoder';
import CitySelectorForm from './app/components/organisms/CitySelectorForm';
import DailyCard from './app/components/molecules/DailyCard';
import { getFunnyWeatherSentence } from './app/utils/memeUtils';

function App(): JSX.Element {

  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState<number>(0);
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState<number>(0);

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState<string>("");
  const [cityError, setCityError] = useState<string | null>(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
          } else {
            Alert.alert('Permission Denied')
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
  }, []);

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        setCurrentLongitude(position.coords.longitude);
        setCurrentLatitude(position.coords.latitude);

        const info = await Geocoder.geocodePosition({ lat: position.coords.latitude, lng: position.coords.longitude });
        if (info && info.length > 0 && info[0].locality) {
          setCity(info[0].locality);
        } else {
          Alert.alert("Can't find a current city");
        }

      },
      (error) => {
        Alert.alert(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const onWeatherSearch = async () => {
    if (!city) {
      setCityError("Please, input the city first");
    } else {
      setCityError(null);
    }

    const data = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${currentLatitude}&lon=${currentLongitude}&appid=c295a440cef15e86d7381e9c3bb171cc&units=imperial`)
    setWeatherData(await data.json());
  }

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <CitySelectorForm cityError={cityError} defaultCity={city} onWeatherSearch={onWeatherSearch} />
        {!!weatherData &&
        <>
            <View style={styles.currentTemperatureTextContainer}>
              <Text style={styles.currentTemperatureText}>At the moment, the temperature is {weatherData.current.temp}. {getFunnyWeatherSentence(weatherData.current.temp)}</Text>
            </View>
            <View style={styles.weatherDataContainer}>
              {weatherData.daily.slice(0, 7).map((data: any, index: number) => <DailyCard index={index} data={data} key={index} />)}

            </View></>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#bbd5fa', 
    height: '100%'
  },
  currentTemperatureTextContainer: {
    paddingHorizontal: 40, 
    marginTop: 10
  },
  currentTemperatureText: {
    fontSize: 20 
  },
  weatherDataContainer: {
    flexDirection: 'row', 
    marginTop: 40
  }
});

export default App;
