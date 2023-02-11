import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:25,
        borderRadius:20,
        marginBottom:20
    },
    artwork:{
        height:90,
        width:90,
        resizeMode:'contain'
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        color:'#fff',
    }
});