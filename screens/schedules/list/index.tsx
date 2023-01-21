import {FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {ContractDetailsTabScreenProps, Schedule} from "../../../types";
import {useSelector} from "react-redux";
import {selectSchedules} from "../../../state/features/schedulesSlice";
import {Button} from "@rneui/base";
import {ListItem} from "@rneui/themed";

export const ScheduleListScreen = ({navigation}: ContractDetailsTabScreenProps<'ScheduleList'>) => {

    const {schedules} = useSelector(selectSchedules);

    const renderItem = (schedule: Schedule) => {
        return <TouchableOpacity onPress={() => navigation.push('ScheduleDetails', {schedule})}>
            <ListItem>
                <ListItem.Content>
                    <Text style={styles.item}>{schedule.id}</Text>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={schedules}
                keyExtractor={(schedule) => schedule.id}
                renderItem={({item}) => renderItem(item)}
            />
            <Button title={'New schedule'}/>
        </View>
    );
}

export default ScheduleListScreen;