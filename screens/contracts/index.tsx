import {FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {Contract, RootStackScreenProps} from "../../types";
import {useSelector} from "react-redux";
import {selectContracts} from "../../state/features/contractsSlice";

export const ContractsScreen = ({navigation}: RootStackScreenProps<'Contracts'>) => {

    const {contracts} = useSelector(selectContracts);

    const renderItem = (contract: Contract) => {
        return <TouchableOpacity onPress={() => navigation.push('Contract', {contract})}>
            <Text style={styles.item}>{contract.id}</Text>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={contracts}
                keyExtractor={(contract) => contract.id}
                renderItem={({item}) => renderItem(item)}
            />
        </View>
    );
}

export default ContractsScreen;