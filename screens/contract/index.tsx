import {Text, View} from "react-native";
import styles from "./styles";
import {RootStackScreenProps} from "../../types";

export const ContractScreen = ({route}: RootStackScreenProps<'Contract'>) => {

    const {contract} = route.params;
    return (
        <View style={styles.container}>
            <Text>{contract.id}</Text>
        </View>
    );
}

export default ContractScreen;