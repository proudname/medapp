import {FlatList, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {RootStackScreenProps, Schedule} from "../../types";
import {useSelector} from "react-redux";
import {selectSchedules} from "../../state/features/schedulesSlice";

export const ScheduleListScreen = ({navigation}: RootStackScreenProps<'ScheduleList'>) => {

    const {schedules} = useSelector(selectSchedules);

    const renderItem = (schedule: Schedule) => {
        return <TouchableOpacity onPress={() => {
        }}>

        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={schedules}
                keyExtractor={(schedule) => schedule.id}
                renderItem={({item}) => renderItem(item)}
            />
        </View>
    );
}

export default ScheduleListScreen;