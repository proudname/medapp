import React from "react";
import {Image, View,} from "react-native";
import {SceneMap, TabBar, TabBarProps, TabView} from 'react-native-tab-view';
import Theme from "../../theme";
import SignInTab from "../../components/SignInTab";
import SignUpTab from "../../components/SignUpTab";
import {styles} from "./styles";


const renderScene = SceneMap({
    signIn: SignInTab,
    signUp: SignUpTab
});

const renderTabBar = (props: TabBarProps<any>) => (
    <TabBar
        {...props}
        indicatorStyle={{backgroundColor: Theme.primaryColor, height: 4.5}}
        style={[styles.shadowProp, {backgroundColor: '#fff', paddingVertical: 4, borderRadius: 10}]}
        labelStyle={{color: 'black', fontWeight: '600', textTransform: 'none'}}
    />
);


export default function AuthenticationScreen() {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'signIn', title: 'Login'},
        {key: 'signUp', title: 'Sign Up'},
    ]);

    return (
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
            </View>
        </View>
    )
}


