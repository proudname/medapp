import React, {useState} from "react";
import {useFormik} from "formik";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Theme from "../../theme";
import {useNavigation} from "@react-navigation/native";
import {signUpSchema} from "../../validation/sign-up.schema";
import {Gender} from "../../enums";
import {InputError} from "../InputError";
import {useSignUpMutation} from "../../api";

const SignUpTab = () => {

    const [signUp, result] = useSignUpMutation();

    const navigation = useNavigation();

    const [off, setOff] = useState(true)


    const {touched, errors, setFieldValue, handleSubmit} = useFormik({
        validationSchema: signUpSchema,
        initialValues: {
            password: '',
            repeatPassword: '',
            name: '',
            surname: '',
            age: 0,
            gender: Gender.MALE
        },
        onSubmit: (values) => {
            signUp(values)
            navigation.navigate('ContractList');
        }
    })

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.spacing}/>
            <View style={styles.inputWrapper}>
                <Image source={Theme.email} style={styles.icon}/>
                <TextInput
                    placeholderTextColor={'#7c7c7c'}
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={(text) => setFieldValue('name', text)}
                />
            </View>
            <InputError touched={touched.name} error={errors.name}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.user} style={styles.icon}/>
                <TextInput
                    placeholderTextColor={'#7c7c7c'}
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={(text) => setFieldValue('name', text)}
                />
            </View>
            <InputError touched={touched.name} error={errors.name}/>


            <View style={styles.inputWrapper}>
                <Image source={Theme.user} style={styles.icon}/>
                <TextInput placeholderTextColor={'#7c7c7c'} placeholder="Surname" style={styles.input}
                           onChangeText={(text) => setFieldValue('surname', text)}

                />
            </View>
            <InputError touched={touched.surname} error={errors.surname}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.cake} style={styles.icon}/>
                <TextInput placeholderTextColor={'#7c7c7c'} placeholder="Age" style={styles.input}
                           onChangeText={(text) => setFieldValue('age', text)}
                />
            </View>
            <InputError touched={touched.age} error={errors.age}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.gender} style={styles.icon}/>
                <TextInput placeholderTextColor={'#7c7c7c'} placeholder="Select Gender" style={styles.input}
                           onChangeText={(text) => setFieldValue('gender', text)}
                           autoCapitalize={'none'}
                />
            </View>
            <InputError touched={touched.password} error={errors.password}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.lock} style={styles.icon}/>
                <TextInput placeholderTextColor={'#7c7c7c'} placeholder="Password" style={styles.input}
                           onChangeText={(text) => setFieldValue('password', text)}
                           autoCapitalize={'none'}
                />
            </View>
            <InputError touched={touched.password} error={errors.password}/>

            <View style={styles.inputWrapper}>
                <Image source={Theme.lock} style={styles.icon}/>
                <TextInput placeholderTextColor={'#7c7c7c'} placeholder="Repeat password" style={styles.input}
                           onChangeText={(text) => setFieldValue('repeatPassword', text)}
                           autoCapitalize={'none'}
                />
            </View>
            <InputError touched={touched.password} error={errors.password}/>

            <TouchableOpacity style={styles.mainBtn} onPress={() => handleSubmit()}>
                <Text style={{color: Theme.bgWhite, fontWeight: 'bold'}}>Sign Up</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

export default SignUpTab;
