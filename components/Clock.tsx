import { View, StyleSheet } from "react-native";

export function Clock({ ...props }) {
    const defaultStyle = styles.default;
    return (
        <View style={[defaultStyle]} {...props} />
    )
}

const styles = StyleSheet.create({
    default: {
        height: 70,
        width: 250,
        borderWidth: 3,
        borderRadius: 10,

        alignItems:'center'
    },
})