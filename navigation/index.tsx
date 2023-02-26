/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {ScheduleDetailsScreen, ScheduleNewScreen} from "../screens/schedules";
import {PlanListScreen} from "../screens/plans";
import AuthenticationScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";
import AffiliateScreen from "../screens/AffiliateScreen";
import BalanceScreen from "../screens/BalanceScreen";

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
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Home'}>
            <Stack.Screen name="Auth" component={AuthenticationScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="ScheduleNew" component={ScheduleNewScreen}/>
            <Stack.Screen name="ScheduleDetails" component={ScheduleDetailsScreen}/>
            <Stack.Screen name="PlanList" component={PlanListScreen}/>
            <Stack.Screen name="Affiliate" component={AffiliateScreen}/>
            <Stack.Screen name="Balance" component={BalanceScreen}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name="Modal" component={ModalScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}