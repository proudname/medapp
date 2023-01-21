import {StatusBar} from "expo-status-bar";
import React from "react";
import {Text, TextInput, TouchableOpacity, View,} from "react-native";
import styles from "./styles";
import {useFormik} from "formik";
import {RootTabScreenProps} from "../../types";
import {signUpSchema} from "../../validation/sign-up.schema";

const SignUpScreen = ({navigation}: RootTabScreenProps<'SignUpScreen'>) => {

    const {touched, errors, setFieldValue, handleSubmit} = useFormik({
        validationSchema: signUpSchema,
        initialValues: {
            login: '',
            password: '',
            repeatPassword: ''
        },
        onSubmit: (values) => {
            navigation.replace('ContractList');
        }
    })

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.formFieldsWrapper}>
                <View style={styles.inputBlock}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            placeholderTextColor="#003f5c"
                            onChangeText={(email) => setFieldValue('login', email)}
                        />
                    </View>
                    <View style={{
                        opacity: touched.login && errors.login ? 1 : 0
                    }}>
                        <Text style={styles.errorText}>{errors.login}</Text>
                    </View>
                </View>
                <View style={styles.inputBlock}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password"
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            onChangeText={(password) => setFieldValue('password', password)}
                        />
                    </View>
                    <View style={{
                        opacity: touched.password && errors.password ? 1 : 0
                    }}>
                        <Text style={styles.errorText}>{errors.password}</Text>
                    </View>
                </View>
                <View style={styles.inputBlock}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Repeat password"
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            onChangeText={(password) => setFieldValue('repeatPassword', password)}
                        />
                    </View>
                    <View style={{
                        opacity: touched.repeatPassword && errors.repeatPassword ? 1 : 0
                    }}>
                        <Text style={styles.errorText}>{errors.repeatPassword}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => handleSubmit()} style={styles.loginBtn}>
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>
        </View>

    );
}

export default SignUpScreen;
