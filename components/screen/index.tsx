import {FC, ReactNode} from "react";
import {View} from "react-native";
import styles from "./styles";

type Props = {
    children: ReactNode
}

const Screen: FC<Props> = ({children}) => {
    return <View style={styles.container}>
        {children}
    </View>
}

export default Screen;