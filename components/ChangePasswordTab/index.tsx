import React from "react";
import {useFormik} from "formik";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Theme from "../../theme";
import {InputError} from "../InputError";
import {toast} from "../../utils/toast";
import {changePasswordSchema} from "../../validation/change-pasword.schema";
import {useAppNavigation} from "../../hooks/useAppNavigation";
import {useChangePassword} from "../../hooks/useChangePassword";

const ChangePasswordTab = () => {

    const navigation = useAppNavigation();
    const {changePassword, isChangePasswordLoading} = useChangePassword();

    const {touched, errors, setFieldValue, handleSubmit} = useFormik({
        validationSchema: changePasswordSchema,
        initialValues: {
            code: '',
            password: '',
            repeatPassword: '',
        },
        onSubmit: async (values) => {
            const {repeatPassword, ...changePasswordPayload} = values;
            try {
                await changePassword({
                    ...changePasswordPayload,
                    passwordConfirmation: repeatPassword
                }).unwrap()
                toast('Password changed', 'success');
                navigation.navigate('Auth')
            } catch (e) {
            }
        }
    })

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.spacing}/>
            <View style={styles.inputWrapper}>
                <Image source={Theme.email} style={styles.icon}/>
                <TextInput
                    placeholderTextColor={'#7c7c7c'}
                    placeholder="Code"
                    style={styles.input}
                    autoCapitalize={'none'}
                    onChangeText={(text) => setFieldValue('code', text)}
                />
            </View>
            <InputError touched={touched.code} error={errors.code}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.lock} style={styles.icon}/>
                <TextInput
                    placeholderTextColor={'#7c7c7c'}
                    placeholder="Password"
                    style={styles.input}
                    autoCapitalize={'none'}
                    secureTextEntry
                    onChangeText={(text) => setFieldValue('password', text)}
                />
            </View>
            <InputError touched={touched.password} error={errors.password}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.lock} style={styles.icon}/>
                <TextInput
                    placeholderTextColor={'#7c7c7c'}
                    placeholder="Repeat password"
                    style={styles.input}
                    autoCapitalize={'none'}
                    secureTextEntry
                    onChangeText={(text) => setFieldValue('repeatPassword', text)}
                />
            </View>
            <InputError touched={touched.repeatPassword} error={errors.repeatPassword}/>

            <TouchableOpacity disabled={isChangePasswordLoading} onPress={() => handleSubmit()} style={styles.mainBtn}>
                <Text style={{color: Theme.bgWhite, fontWeight: 'bold'}}>Change password</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

export default ChangePasswordTab;
