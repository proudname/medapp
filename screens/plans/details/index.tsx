import {Text, View} from "react-native";
import styles from "./styles";
import {RootStackScreenProps} from "../../../types";

export const PlanDetailsScreen = ({route}: RootStackScreenProps<'PlanDetails'>) => {

    const {plan} = route.params;

    return (
        <View style={styles.container}>
            <Text>{plan.id}</Text>
        </View>
    );
}

export default PlanDetailsScreen;