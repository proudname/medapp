import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {ContractDetailsTabScreenProps} from "../../../types";
import {AntDesign} from "@expo/vector-icons";
import Theme from "../../../theme";
import WeekCard from "../../../components/WeekCard";
import {useGetPlansQuery} from "../../../api";
import {useError} from "../../../hooks/useError";

export const PlanListScreen = ({navigation}: ContractDetailsTabScreenProps<'PlanList'>) => {

    const {data, error} = useGetPlansQuery();

    useError(error);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.settingsContainer}>
                    <AntDesign name="arrowleft" size={24} color="#fff"/>
                </TouchableOpacity>
                <Text style={styles.heading}>My Treatment</Text>
                <TouchableOpacity style={styles.settingsContainer}>
                    <Image source={Theme.settings} style={styles.settings}/>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={data?.data}
                    renderItem={({item}) => <WeekCard item={item}/>}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
}

export default PlanListScreen;