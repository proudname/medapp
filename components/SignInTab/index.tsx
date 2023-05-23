import React, {useState} from "react";
import {useFormik} from "formik";
import {signInSchema} from "../../validation/sign-in.schema";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Theme from "../../theme";
import {InputError} from "../InputError";
import {useNavigation} from "@react-navigation/native";
import {useSignIn} from "../../hooks/useSignIn";

const SignInTab = () => {

    const navigation = useNavigation();
    const {signIn, isSignInProcessActive, signInWithProvider} = useSignIn();

    const [off, setOff] = useState(true)

    const {touched, errors, setFieldValue, handleSubmit} = useFormik({
        validationSchema: signInSchema,
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: (values) => {
            signIn({
                identifier: values.login,
                password: values.password
            })
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
                    onChangeText={(text) => setFieldValue('login', text)}
                />
            </View>
            <InputError touched={touched.login} error={errors.login}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.lock} style={styles.icon}/>
                <TextInput
                    secureTextEntry={off}
                    placeholderTextColor={'#7c7c7c'}
                    placeholder="Password"
                    style={styles.input}
                    onChangeText={(text) => setFieldValue('password', text)}
                />
                <TouchableOpacity onPress={() => setOff(!off)} style={styles.eye}>
                    <Image source={Theme.eye} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <InputError touched={touched.password} error={errors.password}/>

            <View style={styles.forgot}>
                <TouchableOpacity onPress={() => navigation.navigate('RestorePassword', {step: 0})}>
                    <Text style={{color: Theme.primaryColor}}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity disabled={isSignInProcessActive} onPress={() => handleSubmit()} style={styles.mainBtn}>
                <Text style={{color: Theme.bgWhite, fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

export default SignInTab;
