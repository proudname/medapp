import {Platform, TouchableOpacity, View} from "react-native";
import React from "react";
import RNDateTimePicker, {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import {Text} from "@rneui/base";
import moment from "moment";

type Props = {
    value?: Date,
    setValue: (value?: Date) => void
}

export const CrossPlatformDatePicker = ({value = new Date(), setValue}: Props) => {

    const handleAndroidPicker = () => {
        DateTimePickerAndroid.open({
            mode: 'date',
            display: 'calendar',
            value: value,
            onChange: (_, date) => {
                setValue(date)
            }
        })
    }


    return Platform.OS === 'ios'
        ? <RNDateTimePicker
            placeholderText="select date"
            mode={'date'}
            display={'spinner'}
            value={value}
            onChange={(_, date) => setValue(date)}/>
        : <TouchableOpacity onPress={handleAndroidPicker}>
            <View style={{width: 100, height: 20, margin: 10}}>
                <Text>{moment(value).format('DD.MM.YYYY')}</Text>
            </View>
        </TouchableOpacity>
}