import React, {useEffect, useState} from "react";
import {RefreshControl, ScrollView, Text, TouchableOpacity, View} from "react-native";


import InfoCard from '../../components/InfoCard'
import {styles} from "./styles";
import {CommonHeader} from "../../components/CommonHeader";
import {useAppNavigation} from "../../hooks/useAppNavigation";
import {useGetAppointmentsQuery} from "../../api";
import {ApiAppointment} from "../../types";
import moment from "moment";

export default function MyAppointmentsScreen() {

    const navigation = useAppNavigation();

    const {data: appointments, refetch: refetchAppointments} = useGetAppointmentsQuery();

    const [comingAppointments, setComingAppointments] = useState<ApiAppointment[]>([]);
    const [pastAppointments, setPastAppointments] = useState<ApiAppointment[]>([]);
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        if (!appointments) return;
        const {
            coming,
            past
        } = appointments.data.reduce<{ past: ApiAppointment[], coming: ApiAppointment[] }>((result, next) => {
            if (!next.attributes.medicalCenter.data) return result;
            if (moment(next.attributes.date).isBefore(moment())) {
                result.past.push(next);
            } else {
                result.coming.push(next);
            }
            return result;
        }, {past: [], coming: []})
        setComingAppointments(coming);
        setPastAppointments(past);
    }, [appointments])

    const renderPastAppointments = () => {

        if (!pastAppointments.length) return null;
        return <View>
            <Text style={styles.bigLabel}>Previous Appointment</Text>
            {
                pastAppointments.map((appointment) => <InfoCard
                    key={appointment.id}
                    buttonEnabled={false}
                    bigText={appointment.attributes.medicalCenter.data!.attributes.name}
                    date={appointment.attributes.date}
                    description={appointment.attributes.medicalCenter.data!.attributes.address}
                    active={false}
                />)
            }
        </View>
    }

    const renderComingAppointments = () => comingAppointments.map((appointment) => <InfoCard
        key={appointment.id}
        buttonEnabled={true}
        onButtonClick={() => navigation.navigate('EditAppointmentModal', {editId: appointment.id})}
        bigText={appointment.attributes.medicalCenter.data!.attributes.name}
        date={appointment.attributes.date}
        description={appointment.attributes.medicalCenter.data!.attributes.address}
        active={true}
    />)


    const onRefresh = React.useCallback(async () => {
        setRefreshing(true)
        await refetchAppointments()
        setRefreshing(false)
    }, []);

    return (
        <View style={styles.container}>
            <CommonHeader title={'My Appointments'} leftIconType={'back'}/>

            <View style={styles.content}>
                <ScrollView contentContainerStyle={{padding: 25, width: '100%'}} refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }>

                    <TouchableOpacity style={styles.mainBtn}
                                      onPress={() => navigation.navigate('EditAppointmentModal')}>
                        <Text style={styles.payText}>Make Appointment</Text>
                    </TouchableOpacity>

                    <Text style={styles.bigLabel}>Coming Appointment</Text>
                    {renderComingAppointments()}


                    <View style={{height: 25}}/>


                    {renderPastAppointments()}

                </ScrollView>
            </View>

        </View>
    )
}




