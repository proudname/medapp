import {StatusBar} from 'expo-status-bar';
import {Platform, ScrollView, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import {Calendar} from "react-native-calendars";
import React, {useEffect, useState} from "react";
import {Button} from "@rneui/base";
import {useFormik} from "formik";
import SelectDropdown from "react-native-select-dropdown";
import {InputError} from "../components/InputError";
import {useGetMedicalCentersQuery} from "../api/medicalCenters.api";
import {useCreateAppointmentMutation, useGetAppointmentQuery, useUpdateAppointmentMutation} from "../api";
import {skipToken} from "@reduxjs/toolkit/query";
import {ApiMedicalCenter} from "../types/medical-centers";
import {useError} from "../hooks/useError";
import {useAppNavigation} from "../hooks/useAppNavigation";
import {toast} from "../utils/toast";
import {RootStackScreenProps} from "../types";
import {editAppointmentSchema} from "../validation/edit-appointment.schema";


export default function EditAppointmentModalScreen({route}: RootStackScreenProps<'EditAppointmentModal'>) {

    const currentDate = new Date();
    const navigation = useAppNavigation();
    const editId = route.params?.editId;

    const [loaded, setLoaded] = useState(false)

    const {data: medicalCenters, error: getMedicalCentersError} = useGetMedicalCentersQuery()
    const {data: appointment, error: getAppointmentError} = useGetAppointmentQuery(editId || skipToken);
    const [createAppointment, {error: createAppointmentError}] = useCreateAppointmentMutation();
    const [updateAppointment, {error: updateAppointmentError}] = useUpdateAppointmentMutation();

    useError(getMedicalCentersError)
    useError(getAppointmentError)
    useError(createAppointmentError)
    useError(updateAppointmentError)

    const [filteredCenters, setFilteredCenters] = useState<ApiMedicalCenter[]>([]);
    const {handleSubmit, setFieldValue, values, touched, errors, setValues} = useFormik<{
        date: null | string,
        centerId?: null | string | number
    }>({
        validationSchema: editAppointmentSchema,
        onSubmit: async (values) => {
            if (editId) {
                await handleUpdateAppointment()
            } else {
                await handleCreateAppointment()
            }
            navigation.goBack()
        },
        initialValues: {
            date: null,
            centerId: null
        }
    })

    const handleUpdateAppointment = async () => {
        await updateAppointment({
            id: editId!,
            payload: {
                date: values.date || undefined,
                medicalCenter: values.centerId || undefined
            }
        }).unwrap();
        toast('Appointment updated', 'success')
    }

    const handleCreateAppointment = async () => {
        await createAppointment({
            date: values.date!,
            medicalCenter: values.centerId!
        }).unwrap();
        toast('Appointment created', 'success')
    }

    const getMarkedDates = () => {
        if (!values.date) return {}
        return {
            [values.date]: {selected: true, marked: true, selectedColor: 'blue'}
        }
    }

    useEffect(() => {
        if (medicalCenters) {
            setFilteredCenters(medicalCenters.data);
        }
    }, [medicalCenters])

    useEffect(() => {
        if (appointment) {
            const {date, medicalCenter} = appointment.data.attributes;
            setValues({
                date,
                centerId: medicalCenter.data?.id || null
            })
        }
    }, [appointment])

    useEffect(() => {
        if (!medicalCenters) return;
        if (editId && !appointment) return;
        setLoaded(true)
    }, [medicalCenters, appointment])

    if (!loaded) return null;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} onScrollToTop={() => alert(1)}>
                <Text style={styles.title}>{editId ? 'Edit' : 'Make'} Appointment</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
                <View style={styles.formWrapper}>

                    <View style={styles.formField}>
                        <View style={styles.medField}>
                            <SelectDropdown
                                search
                                defaultButtonText={'Select a medical center'}
                                defaultValueByIndex={filteredCenters.findIndex(center => center.id === values.centerId)}
                                searchPlaceHolderColor={'#7c7c7c'}
                                searchPlaceHolder="Search a medical center"
                                data={filteredCenters}
                                renderCustomizedRowChild={(item) => <View style={styles.row}>
                                    <View>
                                        <Text>{item.attributes.name}</Text>
                                    </View>
                                    <View>
                                        <Text>{item.attributes.address}</Text>
                                    </View>
                                </View>}
                                buttonTextAfterSelection={(item) => item.attributes.name}
                                onSelect={(center) => setFieldValue('centerId', center.id)}
                                buttonStyle={{
                                    backgroundColor: 'transparent',
                                    paddingVertical: 0,
                                    height: 40,
                                    justifyContent: 'flex-start',
                                    width: '100%'
                                }}
                                buttonTextStyle={{
                                    marginHorizontal: 7,
                                    textAlign: 'left'
                                }}
                                rowStyle={{
                                    backgroundColor: 'white'
                                }}
                                onChangeSearchInputText={(searchText) => {
                                    const filteredCenters = medicalCenters!.data.filter(
                                        (m) => {
                                            const {name, address} = m.attributes;
                                            return (name + address).toLowerCase().includes(searchText.toLowerCase())
                                        }
                                    );
                                    setFilteredCenters(filteredCenters)
                                }}
                            />
                        </View>
                        <InputError touched={touched.centerId} error={errors.centerId}/>
                    </View>
                    <View style={styles.formField}>
                        <View>
                            <Calendar
                                initialDate={values.date || undefined}
                                markedDates={getMarkedDates()}
                                onDayPress={day => {
                                    setFieldValue('date', day.dateString)
                                }}
                                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                                minDate={currentDate.toString()}
                                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                                maxDate={'2024-05-30'}
                                // Handler which gets executed on day press. Default = undefined
                                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                                monthFormat={'MMMM yyyy'}
                                hideArrows={false}
                                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                                // Do not show days of other months in month page. Default = false
                                hideExtraDays={true}
                                // day from another month that is visible in calendar page. Default = false
                                disableMonthChange={true}
                                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                                firstDay={1}
                                // Hide day names. Default = false
                                hideDayNames={false}
                                // Show week numbers to the left. Default = false
                                showWeekNumbers={false}
                                // Handler which gets executed when press arrow icon left. It receives a callback can go back month
                                onPressArrowLeft={subtractMonth => subtractMonth()}
                                // Handler which gets executed when press arrow icon right. It receives a callback can go next month
                                onPressArrowRight={addMonth => addMonth()}
                                // Disable left arrow. Default = false
                                disableArrowLeft={false}
                                // Disable right arrow. Default = false
                                disableArrowRight={false}
                                // Disable all touch events for disabled days. can be overridden with disableTouchEvent in markedDates
                                disableAllTouchEventsForDisabledDays={true}
                                // Replace default month and year title with custom one. the function receive a date as parameter
                                style={{
                                    borderRadius: 15,
                                    padding: 5,
                                }}
                            />
                        </View>
                        <InputError touched={touched.date} error={errors.date}/>
                    </View>

                    <Button onPress={() => {
                        handleSubmit()
                    }} title={
                        'Save'
                    }/>
                </View>

                {/* Use a light status bar on iOS to account for the black space above the modal */}
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    formWrapper: {
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    formField: {
        marginVertical: 10
    },
    medField: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    label: {
        fontSize: 20,
        fontWeight: "600"
    },
    row: {
        paddingHorizontal: 10,
        margin: 0,
        paddingVertical: 0
    }
});
