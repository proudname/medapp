/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button, ColorSchemeName, Pressable} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import {ContractDetailsTabParamList, RootStackParamList, RootTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import LoginScreen from "../screens/sign-in";
import SignUpScreen from "../screens/sign-up";
import {ContractDetailsScreen, ContractListScreen, ContractNewScreen} from "../screens/contracts";
import {ScheduleDetailsScreen, ScheduleListScreen, ScheduleNewScreen} from "../screens/schedules";
import {PlanDetailsScreen, PlanListScreen} from "../screens/plans";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={({navigation}) => ({
            headerRight: (props) => <Button title={'Logout'}
                                            onPress={() => navigation.navigate('SignInScreen')} {...props}/>
        })}>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="ContractList" component={ContractListScreen} options={{
                headerTitle: 'Contract list'
            }}/>
            <Stack.Screen name="ContractDetailsTab" component={ContractDetailsTabNavigator}/>
            <Stack.Screen name="ContractNew" component={ContractNewScreen}/>
            <Stack.Screen name="ScheduleNew" component={ScheduleNewScreen}/>
            <Stack.Screen name="ScheduleDetails" component={ScheduleDetailsScreen}/>
            <Stack.Screen name="PlanDetails" component={PlanDetailsScreen}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name="Modal" component={ModalScreen} options={{
                    headerShown: false
                }}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const ContractDetailsTab = createBottomTabNavigator<ContractDetailsTabParamList>();

function ContractDetailsTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <ContractDetailsTab.Navigator
            initialRouteName="ContractDetails"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            <ContractDetailsTab.Screen
                name="ContractDetails"
                component={ContractDetailsScreen}
                options={{
                    title: 'Details',
                    tabBarIcon: ({color}) => <TabBarIcon name="file" color={color}/>,
                }}
            />
            <ContractDetailsTab.Screen
                name="ScheduleList"
                component={ScheduleListScreen}
                options={{
                    title: 'Schedules',
                    tabBarIcon: ({color}) => <TabBarIcon name="clipboard" color={color}/>,
                }}
            />
            <ContractDetailsTab.Screen
                name="PlanList"
                component={PlanListScreen}
                options={{
                    title: 'Plans',
                    tabBarIcon: ({color}) => <TabBarIcon name="list" color={color}/>,
                }}
            />
        </ContractDetailsTab.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="SignInScreen"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            <BottomTab.Screen
                name="SignInScreen"
                component={LoginScreen}
                options={({navigation}: RootTabScreenProps<'SignInScreen'>) => ({
                    title: 'Sign In',
                    tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Modal')}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name="info-circle"
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{marginRight: 15}}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    title: 'Sign Up',
                    tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
