import {StatusBar} from "expo-status-bar";
import React from "react";
import {RootTabScreenProps} from "../../types";
import {useFormik} from "formik";
import {signInSchema} from "../../validation/sign-in.schema";
import {AuthLogoSection} from "../../components/AuthLogoSection";
import {AuthTabs} from "../../components/AuthTabs";
import Screen from "../../components/screen";

const SignInScreen = ({navigation}: RootTabScreenProps<'SignInScreen'>) => {

    const {touched, errors, setFieldValue, handleSubmit} = useFormik({
        validationSchema: signInSchema,
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: (values) => {
            navigation.replace('ContractList');
        }
    })

    return (
        <Screen>
            <StatusBar style="auto"/>
            <AuthLogoSection/>
            <AuthTabs/>
            {/*<TouchableOpacity onPress={() => handleSubmit()} style={styles.loginBtn}>*/}
            {/*    <Text style={styles.loginText}>SIGN IN</Text>*/}
            {/*</TouchableOpacity>*/}
        </Screen>
    );
}

export default SignInScreen;
