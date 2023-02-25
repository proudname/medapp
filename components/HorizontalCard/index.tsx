import React from "react";
import {Image, ImageSourcePropType, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from './styles';
import {RootStackParamList} from "../../types";
import {useAppNavigation} from "../../hooks/useAppNavigation";

type Props = {
    color1: string,
    color2: string,
    word1: string,
    word2: string,
    artwork: ImageSourcePropType,
    navTo: keyof RootStackParamList,
}

export default function HorizontalCard({color1, color2, word1, word2, artwork, navTo}: Props) {
    const navigation = useAppNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(navTo as any)}>
            <LinearGradient start={{x: 0, y: 0.1}} end={{x: 1, y: 0.25}} colors={[color1, color2]}
                            style={styles.container}>
                <View>
                    <Text style={styles.title}>{word1}</Text>
                    <Text style={styles.title}>{word2}</Text>
                </View>
                <Image source={artwork} style={styles.artwork}/>
            </LinearGradient>
        </TouchableOpacity>
    )
}

