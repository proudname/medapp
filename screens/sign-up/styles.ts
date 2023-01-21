import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "100%",
        height: 45,
        marginBottom: 5,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
    loginText: {
        color: '#fff'
    },
    errorText: {
        color: 'red',
        textAlign: 'center'
    },
    inputBlock: {
        marginBottom: 10,
        width: '70%',
    },
    formFieldsWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;