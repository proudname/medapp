import React from "react";
import {Image, StyleSheet, View,} from "react-native";
import {SceneMap, TabBar, TabBarProps, TabView} from 'react-native-tab-view';
import Theme from "../../theme";
import SignInTab from "../../components/SignInTab";
import SignUpTab from "../../components/SignUpTab";


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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.bgcolor,
        justifyContent: 'space-between'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 3,
        paddingHorizontal: 20,
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        marginTop: 20
    },
    shadowProp: {
        shadowColor: '#e5e5e5',
        shadowOffset: {width: -2, height: 15},
        shadowOpacity: 0.5,
        shadowRadius: 15,
    },
});