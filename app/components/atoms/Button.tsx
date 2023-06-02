import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
    text: string;
    onPress: () => void
}

export default ({text, onPress}: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>);
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 300, 
        height: 50, 
        borderWidth: 3, 
        borderRadius: 90, 
        backgroundColor: '#ad4c4c', 
        marginTop: 10 
    }, buttonText: {
        alignSelf: 'center', 
        marginTop: 10, 
        fontSize: 20
    }
})