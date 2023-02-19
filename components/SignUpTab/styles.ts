import {StyleSheet} from "react-native";
import Theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    spacing: {
        height: '5%'
    },
    inputWrapper: {
        backgroundColor: Theme.bgWhite,
        borderWidth: 1,
        borderColor: '#E6E8EC',
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 18,
        borderRadius: 10,
    },
    birthdayInputWrapper: {
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 18,
        borderRadius: 10,
    },
    icon: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    },
    input: {
        paddingHorizontal: 15,
        fontSize: 16,
        width: '100%'
    },
    forgot: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15
    },
    mainBtn: {
        backgroundColor: Theme.primaryColor,
        paddingHorizontal: 22,
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 10,
        marginTop: 25,
        justifyContent: 'center'
    },
    gplus: {
        width: '100%',
        alignItems: 'center',
        marginTop: 35
    },
    eye: {
        position: 'absolute',
        width: 20,
        height: 20,
        right: 25
    },
    datepicker: {
        textAlign: 'left',
        justifyContent: 'flex-end'
    }
});

export default styles;