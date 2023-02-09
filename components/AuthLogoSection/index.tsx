import {FC} from "react";
import {View} from "react-native";
import Logo from '../../assets/images/logo.svg'
import styles from "./styles";


export const AuthLogoSection: FC = () => {
    return <View style={styles.container}>
        <Logo/>
    </View>
}