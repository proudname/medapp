import {StyleSheet} from 'react-native';
import Theme from "../../theme";

const styles = StyleSheet.create({
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
        padding: 25,
    },
    video: {
        maxHeight: 250,
        flex: 1
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
    }
});

export default styles;