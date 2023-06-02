import { StyleSheet, Text, View } from "react-native";
import { getFutureDay } from '../../utils/dateUtils';

interface Props {
    index: number;
    data: any;
}

export default ({ index, data }: Props) => {
    return (
        <View key={index} style={styles.mainContainer}>
            <View style={styles.topLine}></View>
            <Text style={styles.dayText}>{getFutureDay(index)}</Text>
            <Text>{Math.ceil(data.temp.min)}/{Math.ceil(data.temp.max)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 1,
        backgroundColor: 'white'
    },
    topLine: {
        backgroundColor: '#ad4c4c',
        height: 10
    },
    dayText: {
        fontSize: 20
    },

});