import {FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {Contract, RootStackScreenProps} from "../../../types";
import {useSelector} from "react-redux";
import {selectContracts} from "../../../state/features/contractsSlice";
import {ListItem} from "@rneui/themed";
import {Button} from "@rneui/base";

export const ContractListScreen = ({navigation}: RootStackScreenProps<'ContractList'>) => {

    const {contracts} = useSelector(selectContracts);

    const renderItem = (contract: Contract) => {
        return <TouchableOpacity onPress={() => navigation.push('ContractDetailsTab', {
            screen: 'ContractDetails',
            params: {contract}
        })}>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <Text style={styles.item}>{contract.id}</Text>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={contracts}
                keyExtractor={(contract) => contract.id}
                renderItem={({item}) => renderItem(item)}
            />
            <Button title={'New contract'} onPress={() => navigation.push('ContractNew')}/>
        </View>
    );
}

export default ContractListScreen;