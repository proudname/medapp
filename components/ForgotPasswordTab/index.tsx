import React, {useContext} from "react";
import {useFormik} from "formik";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Theme from "../../theme";
import {InputError} from "../InputError";
import {toast} from "../../utils/toast";
import {forgotPasswordSchema} from "../../validation/forgot-password.schema";
import {RestorePasswordContext} from "../../screens/RestorePasswordScreen/context";
import {useForgotPassword} from "../../hooks/useForgotPassword";

const ForgotPasswordTab = () => {

    const {restorePassword, isRestorePasswordLoading} = useForgotPassword();
    const {changeStep} = useContext(RestorePasswordContext)

    const {touched, errors, setFieldValue, handleSubmit} = useFormik({
        validationSchema: forgotPasswordSchema,
        initialValues: {
            email: '',
        },
        onSubmit: async (values) => {
            restorePassword({
                email: values.email,
            }).unwrap()
            toast('If that email exist a code will be sent', 'success');
            changeStep(1)
        }
    })

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.spacing}/>
            <View style={styles.inputWrapper}>
                <Image source={Theme.email} style={styles.icon}/>
                <TextInput
                    placeholderTextColor={'#7c7c7c'}
                    placeholder="Email"
                    style={styles.input}
                    autoCapitalize={'none'}
                    onChangeText={(text) => setFieldValue('email', text)}
                />
            </View>
            <InputError touched={touched.email} error={errors.email}/>

            <TouchableOpacity disabled={isRestorePasswordLoading} onPress={() => handleSubmit()} style={styles.mainBtn}>
                <Text style={{color: Theme.bgWhite, fontWeight: 'bold'}}>
                    Send code
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

export default ForgotPasswordTab;
