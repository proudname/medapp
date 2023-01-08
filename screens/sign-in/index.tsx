import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {RootTabScreenProps} from "../../types";

const SignInScreen = ({navigation}: RootTabScreenProps<'SignInScreen'>) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            {/*<Image style={styles.image} source={require("./assets/log2.png")}/>*/}
            <StatusBar style="auto"/>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Contracts')} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>

    );
}

export default SignInScreen;
