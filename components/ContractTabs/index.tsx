import {Tab, TabView, Text} from "@rneui/themed";
import {useState} from "react";
import {View} from "react-native";

export const ContractTabs = () => {

    const [index, setIndex] = useState(0);

    return <View>
        <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
            }}
            variant="primary"
        >
            <Tab.Item
                title="Recent"
                titleStyle={{fontSize: 12}}
                icon={{name: 'timer', type: 'ionicon', color: 'white'}}
            />
            <Tab.Item
                title="favorite"
                titleStyle={{fontSize: 12}}
                icon={{name: 'heart', type: 'ionicon', color: 'white'}}
            />
            <Tab.Item
                title="cart"
                titleStyle={{fontSize: 12}}
                icon={{name: 'cart', type: 'ionicon', color: 'white'}}
            />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
                <Text h1>Recent</Text>
            </TabView.Item>
            <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
                <Text h1>Favorite</Text>
            </TabView.Item>
            <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
                <Text h1>Cart</Text>
            </TabView.Item>
        </TabView>
    </View>
}