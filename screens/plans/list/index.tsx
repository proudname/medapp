import {FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {ContractDetailsTabScreenProps} from "../../../types";
import {useSelector} from "react-redux";
import {selectPlans} from "../../../state/features/plansSlice";
import {Plan} from "../../../types/plans";

export const PlanListScreen = ({navigation}: ContractDetailsTabScreenProps<'PlanList'>) => {

    const {plans} = useSelector(selectPlans);

    const renderItem = (plan: Plan) => {
        return <TouchableOpacity onPress={() => navigation.push('PlanDetails', {plan})}>
            <Text style={styles.item}>{plan.id}</Text>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={plans}
                keyExtractor={(plan) => plan.id}
                renderItem={({item}) => renderItem(item)}
            />
        </View>
    );
}

export default PlanListScreen;