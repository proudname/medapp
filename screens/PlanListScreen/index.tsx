import {FlatList, RefreshControl, View} from "react-native";
import styles from "./styles";
import WeekCard from "../../components/WeekCard";
import {useGetPlansQuery} from "../../api";
import {useError} from "../../hooks/useError";
import Screen from "../../components/Screen";
import {CommonHeader} from "../../components/CommonHeader";
import React from "react";

export const PlanListScreen = () => {

    const {data, error, refetch} = useGetPlansQuery();
    const [refreshing, setRefreshing] = React.useState(false);

    useError(error);

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true)
        await refetch()
        setRefreshing(false)
    }, []);

    return (
        <Screen>
            <CommonHeader title={'My Treatment'} leftIconType={'back'}/>
            <View style={styles.content}>
                <FlatList
                    data={data?.data}
                    renderItem={({item}) => <WeekCard item={item}/>}
                    keyExtractor={item => item.id.toString()}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                    }
                />
            </View>
        </Screen>
    );
}

export default PlanListScreen;