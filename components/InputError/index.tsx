import {FC, useMemo} from "react";
import {Text, View} from "react-native";
import {styles} from "./styles";

type Props = {
    touched: boolean | undefined,
    error?: string;
}

export const InputError: FC<Props> = ({touched, error}) => {
    const containerStyles = useMemo(() => {
        if (touched && error) return {};
        return styles.hidden;
    }, [touched, error])
    return <View style={containerStyles}>
        <Text style={styles.errorText}>{error}</Text>
    </View>
}