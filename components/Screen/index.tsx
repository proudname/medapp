import {FC, ReactNode} from "react";
import {View} from "react-native";
import styles from "./styles";
import {AuthContainer} from "../AuthContainer";

type Props = {
    children: ReactNode
}

const Screen: FC<Props> = ({children}) => {
    return <View style={styles.container}>
        {children}
        <AuthContainer/>
    </View>
}

export default Screen;