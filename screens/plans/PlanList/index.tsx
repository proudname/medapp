import {FlatList, View} from "react-native";
import styles from "./styles";
import WeekCard from "../../../components/WeekCard";
import {useGetPlansQuery} from "../../../api";
import {useError} from "../../../hooks/useError";
import Screen from "../../../components/Screen";
import {CommonHeader} from "../../../components/CommonHeader";

export const PlanListScreen = () => {

    const {data, error} = useGetPlansQuery();

    useError(error);

    return (
        <Screen>
            <CommonHeader title={'My Treatment'} leftIconType={'back'}/>
            <View style={styles.content}>
                <FlatList
                    data={data?.data}
                    renderItem={({item}) => <WeekCard item={item}/>}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </Screen>
    );
}

export default PlanListScreen;