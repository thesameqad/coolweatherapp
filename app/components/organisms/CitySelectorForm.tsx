import { StyleSheet, Text, TextInput } from "react-native"
import Button from "../atoms/Button"
import { useEffect, useState } from "react";

interface FormProps {
    onWeatherSearch: (city: string) => void,
    cityError: string | null,
    defaultCity: string
}
export default ({ onWeatherSearch, cityError, defaultCity }: FormProps) => {
    const [city, setCity] = useState<string>("");

    useEffect(() => {
        setCity(defaultCity);
    }, [defaultCity])

    return (
        <>
            <TextInput style={styles.input} value={city} onChangeText={(val: string) => setCity(val)} />
            {!!cityError && <Text style={styles.errorText}>{cityError}</Text>}

            <Button onPress={() => onWeatherSearch(city)} text="Let's go!!!" />
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 3,
        borderRadius: 90,
        width: 300,
        height: 50,
        fontSize: 20,
        paddingLeft: 20
    },
    errorText: {
        color: 'red',
        fontWeight: "600"
    }
})