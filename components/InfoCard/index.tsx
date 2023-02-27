import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Theme from "../../theme";
import {styles} from './styles';

type Props = {
    active: boolean,
    description: string,
    bigText: string,
    date: string,
    buttonEnabled?: boolean
    onButtonClick?: () => void
}

export default function InfoCard({active, description, bigText, date, buttonEnabled, onButtonClick}: Props) {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Text style={styles.amt}>{bigText}</Text>
            <Text style={[styles.info, {marginTop: 5}]}>{date}</Text>
            <Text style={styles.info}>{description}</Text>
            <View style={[styles.indicator, {backgroundColor: active ? "#29CC00" : Theme.secColor}]}/>
            {
                buttonEnabled && <TouchableOpacity onPress={onButtonClick}>
                    <Text style={styles.text}>Change</Text>
                </TouchableOpacity>
            }
        </View>
    )
}
