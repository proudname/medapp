import {StyleSheet} from "react-native";
import Theme from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.bgcolor,
        justifyContent: 'space-between'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 3,
        paddingHorizontal: 20,
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        marginTop: 20
    },
    shadowProp: {
        shadowColor: '#e5e5e5',
        shadowOffset: {width: -2, height: 15},
        shadowOpacity: 0.5,
        shadowRadius: 15,
    },
});