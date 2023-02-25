import {StyleSheet} from 'react-native';
import Theme from '../../theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.bgWhite,
        width: '100%',
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 25,
        paddingVertical: 15,
        justifyContent: 'center',
        paddingRight: 10
    },
    shadowProp: {
        shadowColor: '#e5e5e5',
        shadowOffset: {width: -2, height: 15},
        shadowOpacity: 0.8,
        shadowRadius: 15,
    },
    indicator: {
        height: 65,
        borderRadius: 15,
        width: 4,
        position: 'absolute'
    },
    amt: {
        fontWeight: 'bold',
        fontSize: 18
    },
    info: {
        marginVertical: 2,
        fontSize: 14,

    },
    text: {
        color: Theme.primaryColor,
        position: 'absolute',
        right: 10,
        bottom: 0
    }
});