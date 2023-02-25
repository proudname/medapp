import {StyleSheet} from 'react-native';
import Theme from '../../theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.bgWhite,
        width: '100%',
        borderRadius: 15,
        marginBottom: 20,
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10
    },
    shadowProp: {
        shadowColor: '#e5e5e5',
        shadowOffset: {width: -2, height: 15},
        shadowOpacity: 0.3,
        shadowRadius: 15,
    },
    date: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 5
    },
    subtext: {
        opacity: 0.7
    },
    image: {
        height: 110,
        width: 130,
        borderRadius: 20,
        overflow: "hidden",
    },
    smalltick: {
        height: 11,
        width: 11,
    },
    indicator: {
        height: 100,
        borderRadius: 15,
        width: 5,
        position: 'absolute'
    },
    whitesmallbox: {
        backgroundColor: '#fff',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        padding: 5,
        right: 20,
        top: 20
    }
});