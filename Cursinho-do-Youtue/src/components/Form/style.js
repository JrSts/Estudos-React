import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        botton: 0,
        backgroundColor: '#ffffff',
        alignItems: "center", 
        marginTop: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },

    form: {
        width: "100%",
        height: "auto",
        marginTop: 20,
        padding: 10,
    },

    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20
    },

    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },

    buttonCalculator: {
        borderRadius: 50,
        alignItems:"center",
        justifyContent: "center",
        width: "90%",
        paddingVertical: 14,
        backgroundColor: "#ff0043",
        marginLeft: 12,
        margin: 20
    },

    textButtonCalculator: {
        fontSize: 20,
        color: "#fff"
    }
});

export default styles;