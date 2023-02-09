import {Tab, TabView, Text} from "@rneui/themed";
import {useState} from "react";
import {View} from "react-native";
import styles from "./styles";

export const AuthTabs = () => {

    const [index, setIndex] = useState(0);

    return <View style={styles.container}>
        <View style={styles.tabContainer}>
            <Tab
                value={index}
                onChange={setIndex}
                style={styles.tabHeader}
                indicatorStyle={styles.tabIndicator}
            >
                <Tab.Item
                    title="Login"
                    titleStyle={[styles.tabButton, index === 0 && styles.tabActiveButton]}
                >
                </Tab.Item>
                <Tab.Item
                    title="Sign up"
                    titleStyle={[styles.tabButton, index === 1 && styles.tabActiveButton]}
                >
                </Tab.Item>

            </Tab>
            <TabView value={index} onChange={setIndex}>
                <TabView.Item style={{backgroundColor: 'red', width: '100%', marginTop: 10}}>
                    <Text h1>Recent</Text>
                </TabView.Item>
                <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
                    <Text h1>Favorite</Text>
                </TabView.Item>
            </TabView>

        </View>


    </View>
}