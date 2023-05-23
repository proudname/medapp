import {View} from "react-native";
import styles from "./styles";
import {useGetPlansQuery} from "../../api";
import {useError} from "../../hooks/useError";
import Screen from "../../components/Screen";
import {CommonHeader} from "../../components/CommonHeader";
import React from "react";
import {useGetMediaQuery} from "../../api/treatmentMedia.api";
import {VideoPlayer} from "../../components/VideoPlayer";
import Constants from "expo-constants";

export const PlanListScreen = () => {

    const {data, error, refetch} = useGetPlansQuery();
    const [refreshing, setRefreshing] = React.useState(false);
    const {data: treatmentMedia} = useGetMediaQuery();

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
                <View style={styles.video}>
                    <VideoPlayer source={
                        `${Constants!.expoConfig!.extra!.adminUrl}${treatmentMedia?.data.attributes.video.data.attributes.url}`
                    }/>
                </View>
            </View>
        </Screen>
    );
}

export default PlanListScreen;