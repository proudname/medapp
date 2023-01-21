import {FlatList, Text, TouchableOpacity} from "react-native";
import {RootStackParamList, RootStackScreenProps} from "../../types";
import Screen from "../../components/screen";
import {ListItem} from "@rneui/themed";

type MenuItemProps = { title: string, link: keyof RootStackParamList }

const menu: MenuItemProps[] = [
    {
        title: 'Contracts',
        link: 'ContractList'
    },
    {
        title: 'Plans',
        link: 'PlanList'
    },
    {
        title: 'Schedules',
        link: 'ScheduleList'
    },
];

const HomeScreen = ({navigation}: RootStackScreenProps<'Home'>) => {
    return (
        <Screen>
            <FlatList
                data={menu}
                renderItem={({item}) => <TouchableOpacity onPress={() => navigation.push(item.link)}>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <Text>{item.title}</Text>
                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>}
            />
        </Screen>
    );
}

export default HomeScreen;