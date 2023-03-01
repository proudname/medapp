import React from "react";
import {Image, View,} from "react-native";
import {SceneMap, TabBar, TabBarProps, TabView} from 'react-native-tab-view';
import Theme from "../../theme";
import {styles} from "./styles";
import {RestorePasswordContext} from "./context";
import ForgotPasswordTab from "../../components/ForgotPasswordTab";
import ChangePasswordTab from "../../components/ChangePasswordTab";
import {Button} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";


const renderScene = SceneMap({
    forgotPassword: ForgotPasswordTab,
    changePassword: ChangePasswordTab
});

const renderTabBar = (props: TabBarProps<any>) => (
    <TabBar
        {...props}
        indicatorStyle={{backgroundColor: Theme.primaryColor, height: 4.5}}
        style={[styles.shadowProp, {backgroundColor: '#fff', paddingVertical: 4, borderRadius: 10}]}
        labelStyle={{color: 'black', fontWeight: '600', textTransform: 'none'}}
    />
);


export default function RestorePasswordScreen() {

    const navigation = useNavigation();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'forgotPassword', title: 'Restore password'},
        {key: 'changePassword', title: 'Change password'},
    ]);

    return (
        <RestorePasswordContext.Provider value={{
            changeStep: setIndex
        }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={Theme.logo}/>
                </View>

                <View style={styles.body}>
                    <TabView
                        renderTabBar={renderTabBar}
                        navigationState={{index, routes}}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                    />
                    <Button type={'clear'} onPress={() => navigation.goBack()}>Cancel</Button>
                </View>
            </View>
        </RestorePasswordContext.Provider>

    )
}


