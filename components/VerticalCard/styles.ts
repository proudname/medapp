import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width:'45%',
        paddingHorizontal:10,
        paddingVertical:45,
        borderRadius:20,
        marginBottom:20,
        marginRight:15

    },
    artwork:{
        height:90,
        width:90,
        resizeMode:'contain'
    },
    title:{
        fontSize:17,
        fontWeight:'bold',
        color:'#fff',
        marginTop:5
    },
    titlesmall:{
        fontSize:14,
        fontWeight:'bold',
        color:'#fff',
        marginTop:20
    }
});