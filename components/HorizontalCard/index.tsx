import React from "react";
import {Image, ImageSourcePropType, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from "../../types";
import {NavigationProp} from "@react-navigation/core/src/types";

type Props = {
    color1: string,
    color2: string,
    word1: string,
    word2: string,
    artwork: ImageSourcePropType,
    navTo: keyof ReactNavigation.RootParamList,
}

export default function HorizontalCard({color1, color2, word1, word2, artwork, navTo}: Props) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('PlanList')}>
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

