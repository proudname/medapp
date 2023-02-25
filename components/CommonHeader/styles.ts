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
    contentWrapper: {
        flex: 5,
    },
    content: {
        padding: 25
    },
    logo: {
        resizeMode: 'contain',
        height: 45,
        width: 45,
        marginTop: 35
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
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    heading: {
        marginTop: 35,
        fontSize: 18,
        color: '#fff'
    },
});