import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 'auto',
        textAlign: 'center'
    },
    tabContainer: {
        flex: 1,
        width: '90%',
        overflow: 'hidden'
    },
    tabHeader: {
        borderRadius: 8,
        backgroundColor: 'white',
        margin: 10
    },
    tabIndicator: {
        shadowColor: 'rgba(26, 42, 153, 0.2)',
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 4},
        borderRadius: 8,
        backgroundColor: '#1A2A99',
        height: 3,
        bottom: 0.5,
        justifyContent: 'center',
    },
    tabButton: {
        color: 'black',
        fontSize: 12
    },
    tabActiveButton: {
        color: '#1A2A99',
    }
});

export default styles;