import {Image, Text, TouchableOpacity, View} from "react-native";
import Theme from "../../theme";
import React from "react";
import {styles} from "./styles";
import {useAuth} from "../../hooks/useAuth";
import {AntDesign} from "@expo/vector-icons";
import {useAppNavigation} from "../../hooks/useAppNavigation";

type LeftIcon = 'back' | 'logo' | null;

type Props = {
    leftIconType?: LeftIcon
    title?: string;
}

export const CommonHeader = ({leftIconType, title}: Props) => {

    const {endSession} = useAuth();
    const navigation = useAppNavigation();

    const renderLeftIcon = () => {
        switch (leftIconType) {
            case 'back':
                return <TouchableOpacity onPress={() => navigation.goBack()} style={styles.settingsContainer}>
                    <AntDesign name="arrowleft" size={24} color="#fff"/>
                </TouchableOpacity>;
            default:
                return <Image source={Theme.logo} style={styles.logo}/>
        }
    }

    const renderTitle = () => {
        if (!title) return null;
        return <Text style={styles.heading}>{title}</Text>
    }

    return <View style={styles.header}>
        {renderLeftIcon()}
        {renderTitle()}
        <TouchableOpacity onPress={endSession} style={styles.settingsContainer}>
            <AntDesign name='logout' size={25} color={'white'}/>
        </TouchableOpacity>
    </View>
}