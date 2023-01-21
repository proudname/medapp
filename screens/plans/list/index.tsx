import {FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {ContractDetailsTabScreenProps} from "../../../types";
import {useSelector} from "react-redux";
import {selectPlans} from "../../../state/features/plansSlice";
import {Plan} from "../../../types/plans";
import {ListItem} from "@rneui/themed";

export const PlanListScreen = ({navigation}: ContractDetailsTabScreenProps<'PlanList'>) => {

    const {plans} = useSelector(selectPlans);

    const renderItem = (plan: Plan) => {
        return <TouchableOpacity onPress={() => navigation.push('PlanDetails', {plan})}>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <Text style={styles.item}>{plan.id}</Text>
                </ListItem.Content>
            </ListItem>
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