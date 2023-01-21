import {StatusBar} from "expo-status-bar";
import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {RootTabScreenProps} from "../../types";
import {useFormik} from "formik";
import {signInSchema} from "../../validation/sign-in.schema";

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
            </View>
            <TouchableOpacity onPress={() => handleSubmit()} style={styles.loginBtn}>
                <Text style={styles.loginText}>SIGN IN</Text>
            </TouchableOpacity>
        </View>

    );
}

export default SignInScreen;
