import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import Theme from "../../theme";
import {styles} from './styles';
import AppDialog from "../AppDialog";
import {useUpdatePlanMutation} from "../../api";
import {ApiPlan} from "../../types";
import {useError} from "../../hooks/useError";
import {toast} from "../../utils/toast";
import Constants from "expo-constants";

type Props = {
    item: ApiPlan
}

export default function WeekCard({item: {attributes: {completed, week, date, image}, id}}: Props) {

    const [updatePlan, {error}] = useUpdatePlanMutation();

    useError(error)

    const imageUri = Constants!.expoConfig!.extra!.adminUrl + image.data.attributes.url;
    const [dialog, setDialog] = useState(false);

    return (
        <TouchableOpacity
            style={[styles.container, styles.shadowProp]}
            onPress={() => setDialog(true)}
            disabled={completed}
        >
            <View style={[styles.indicator, {backgroundColor: completed ? "#29CC00" : Theme.secColor}]}/>
            <View>
                <Text style={styles.subtext}>Week {week}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Image
                source={{uri: imageUri}}
                style={styles.image}
            ></Image>
            <View style={styles.whitesmallbox}>
                {
                    completed && <Image source={Theme.greentick} style={styles.smalltick}></Image>
                }
            </View>
            <AppDialog
                visible={dialog}
                title={'Have you completed this step?'}
                acceptText={'Yes'}
                cancelText={'No'}
                onCancel={() => {
                    setDialog(false)
                }}
                onAccept={async () => {
                    await updatePlan({
                        id,
                        payload: {
                            data: {
                                completed: true
                            }
                        }
                    }).unwrap();
                    setDialog(false)
                    toast('Plan updated', 'success')
                }}
            />
        </TouchableOpacity>
    )
}
