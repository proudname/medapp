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

const SignUpTab = () => {

    const navigation = useNavigation();

    const {signUp, status, isSignUpProcessActive} = useAuth();

    useEffect(() => {
        if (status.authenticated) {
            navigation.navigate('Home');
        } else if (status.error) {
            alert(status.error)
        }
    }, [status])


    const {touched, errors, setFieldValue, handleSubmit} = useFormik({
        validationSchema: signUpSchema,
        initialValues: {
            password: '',
            repeatPassword: '',
            username: '',
            name: '',
            surname: '',
            birthday: new Date(),
            gender: Gender.MALE
        },
        onSubmit: (values) => {
            values.email = values.username;
            signUp(values)
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

            <View style={styles.inputWrapper}>
                <Image source={Theme.cake} style={styles.icon}/>
                <TextInput placeholderTextColor={'#7c7c7c'} placeholder="Birthday" style={styles.input}
                           onChangeText={(text) => setFieldValue('birthday', text)}
                />
            </View>
            <InputError touched={!!touched.birthday} error={errors.birthday?.toString()}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.gender} style={styles.icon}/>
                <TextInput placeholderTextColor={'#7c7c7c'} placeholder="Select Gender" style={styles.input}
                           onChangeText={(text) => setFieldValue('gender', text)}
                           autoCapitalize={'none'}
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

            <TouchableOpacity disabled={isSignUpProcessActive} style={styles.mainBtn} onPress={() => handleSubmit()}>
                <Text style={{color: Theme.bgWhite, fontWeight: 'bold'}}>Sign Up</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

export default SignUpTab;
