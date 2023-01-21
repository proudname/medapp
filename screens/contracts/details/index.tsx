import {Text, View} from "react-native";
import styles from "./styles";
import {ContractDetailsTabScreenProps} from "../../../types";

export const ContractDetailsScreen = ({route}: ContractDetailsTabScreenProps<'ContractDetails'>) => {

    const {contract} = route.params;
    return (
        <View style={styles.container}>
            <View>
                <Text>{contract.id}</Text>
            </View>
        </View>
    );
}

export default ContractDetailsScreen;