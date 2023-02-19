import React, {useEffect} from "react";
import {useFormik} from "formik";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Theme from "../../theme";
import {useNavigation} from "@react-navigation/native";
import {Gender} from "../../enums";
import {InputError} from "../InputError";
import {useAuth} from "../../hooks/useAuth";
import {signUpSchema} from "../../validation/sign-up.schema";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import SelectDropdown from 'react-native-select-dropdown'
import {extractEnumValues} from "../../utils/extractEnumValues";
import {toast} from "../../utils/toast";

const SignUpTab = () => {

    const navigation = useNavigation();

    const {signUp, status, isSignUpProcessActive} = useAuth();

    useEffect(() => {
        if (status.authenticated) {
            navigation.navigate('Home');
        } else if (status.error) {
            toast(status.error, 'error')
        }
    }, [status])


    const {touched, errors, setFieldValue, handleSubmit, values: formikValues} = useFormik({
        validationSchema: signUpSchema,
        initialValues: {
            password: '',
            repeatPassword: '',
            username: '',
            name: '',
            surname: '',
            birthday: '2000-10-10',
            gender: Gender.MALE
        },
        onSubmit: (values) => {
            signUp({
                email: values.username,
                ...values
            })
        }
    })

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.spacing}/>
            <View style={styles.inputWrapper}>
                <Image source={Theme.email} style={styles.icon}/>
                <TextInput
                    autoCapitalize={'none'}
                    placeholderTextColor={'#7c7c7c'}
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={(text) => setFieldValue('username', text)}
                />
            </View>
            <InputError touched={touched.username} error={errors.username?.toString()}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.user} style={styles.icon}/>
                <TextInput
                    placeholderTextColor={'#7c7c7c'}
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={(text) => setFieldValue('name', text)}
                />
            </View>
            <InputError touched={touched.name} error={errors.name?.toString()}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.user} style={styles.icon}/>
                <TextInput
                    placeholderTextColor={'#7c7c7c'}
                    placeholder="Surname"
                    style={styles.input}
                    onChangeText={(text) => setFieldValue('surname', text)}
                />
            </View>
            <InputError touched={touched.surname} error={errors.surname?.toString()}/>

            <View style={[styles.inputWrapper, {paddingVertical: 0}]}>
                <Image source={Theme.gender} style={styles.icon}/>
                <SelectDropdown
                    defaultValue={formikValues.gender}
                    searchPlaceHolderColor={'#7c7c7c'} searchPlaceHolder="Select Gender"
                    data={extractEnumValues(Gender)}
                    onSelect={(text) => setFieldValue('gender', text)}
                    dropdownStyle={{
                        maxWidth: 200
                    }}
                    buttonStyle={{
                        backgroundColor: 'transparent',
                        paddingVertical: 0,
                        height: 58,
                        justifyContent: 'flex-start',
                        width: '100%'
                    }}
                    buttonTextStyle={{
                        marginHorizontal: 7,
                        textAlign: 'left'
                    }}
                    onChangeSearchInputText={() => {
                    }}
                />
            </View>
            <InputError touched={!!touched.gender} error={errors.gender?.toString()}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.lock} style={styles.icon}/>
                <TextInput placeholderTextColor={'#7c7c7c'} placeholder="Password" style={styles.input}
                           onChangeText={(text) => setFieldValue('password', text)}
                           autoCapitalize={'none'}
                />
            </View>
            <InputError touched={touched.password} error={errors.password?.toString()}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.lock} style={styles.icon}/>

                <TextInput placeholderTextColor={'#7c7c7c'} placeholder="Repeat password" style={styles.input}
                           onChangeText={(text) => setFieldValue('repeatPassword', text)}
                           autoCapitalize={'none'}
                />
            </View>
            <InputError touched={touched.repeatPassword} error={errors.repeatPassword?.toString()}/>

            <View style={styles.birthdayInputWrapper}>
                <Image source={Theme.cake} style={styles.icon}/>
                <View style={styles.datepicker}>
                    <RNDateTimePicker
                        placeholderText="select date"
                        value={new Date(formikValues.birthday)}
                        onChange={(_, date) => setFieldValue('birthday', date?.toISOString())}/>
                </View>
            </View>
            <InputError touched={!!touched.birthday} error={errors.birthday?.toString()}/>

            <TouchableOpacity disabled={isSignUpProcessActive} style={styles.mainBtn} onPress={() => handleSubmit()}>
                <Text style={{color: Theme.bgWhite, fontWeight: 'bold'}}>Sign Up</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

export default SignUpTab;
