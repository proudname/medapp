import React from "react";
import {Image, ImageSourcePropType, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from './styles';

import {useNavigation} from '@react-navigation/native';

type Props = {
    color1: string,
    color2: string,
    word1: string,
    word2: string,
    artwork: ImageSourcePropType,
    navTo: any
}

export default function HorizontalCard({color1, color2, word1, word2, artwork, navTo}: Props) {
    const navigation = useNavigation();

    return (
        <LinearGradient start={{x: 0, y: 0.1}} end={{x: 1, y: 0.25}} colors={[color1, color2]} style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(navTo)}
                              style={{justifyContent: 'center', alignItems: 'center'}}
                              hitSlop={{top: 50, bottom: 50, right: 25, left: 25}}>
                <Image source={artwork} style={styles.artwork}/>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.titlesmall}>{word1}</Text>
                    <Text style={styles.title}>{word2}</Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>

    )
}
