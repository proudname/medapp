import {StyleSheet} from "react-native";
import Theme from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: Theme.primaryColor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    content: {
        flex: 5,
    },
    heading: {
        marginTop: 35,
        fontSize: 18,
        color: '#fff'
    },
    settingsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        padding: 6,
        marginTop: 35
    },
    settings: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    },
    whiteWrapper: {
        backgroundColor: Theme.bgcolor,
        borderRadius: 15,
        width: '45%',
        padding: 20,
        height: 150,
        marginRight: 15,
        marginBottom: 15,
        justifyContent: 'center',
    },
    shadowProp: {
        shadowColor: '#e5e5e5',
        shadowOffset: {width: -2, height: 15},
        shadowOpacity: 0.8,
        shadowRadius: 15,
    },
    number: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center'
    },
    mainBtn: {
        backgroundColor: Theme.secColor,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    },
    payText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    label: {
        textAlign: 'center',
        opacity: 0.5
    },
    bigLabel: {
        fontSize: 18,
        marginTop: 25,
        fontWeight: 'bold'
    }
});