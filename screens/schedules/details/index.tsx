import {Text, View} from "react-native";
import styles from "./styles";
import {RootStackScreenProps} from "../../../types";

export const ScheduleDetailsScreen = ({route}: RootStackScreenProps<'ScheduleDetails'>) => {

    const {schedule} = route.params;
    
    return (
        <View style={styles.container}>
            <Text>{schedule.id}</Text>
        </View>
    );
}

export default ScheduleDetailsScreen;