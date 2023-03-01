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
import PlanListScreen from "../screens/PlanListScreen";
import AuthenticationScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";
import AffiliateScreen from "../screens/AffiliateScreen";
import BalanceScreen from "../screens/BalanceScreen";
import ScheduleListScreen from "../screens/SheduleList";
import EditAppointmentModalScreen from '../screens/EditAppointmentModalScreen';
import RestorePasswordScreen from "../screens/RestorePasswordScreen";
import {HeaderContainer} from "../components/HeaderContainer";

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
        <Stack.Navigator screenOptions={{header: (props) => <HeaderContainer {...props} />}}
                         initialRouteName={'Home'}>
            <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name="Auth" component={AuthenticationScreen}/>
                <Stack.Screen name="RestorePassword" component={RestorePasswordScreen}/>
            </Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="ScheduleList" component={ScheduleListScreen}/>
            <Stack.Screen name="PlanList" component={PlanListScreen}/>
            <Stack.Screen name="Affiliate" component={AffiliateScreen}/>
            <Stack.Screen name="Balance" component={BalanceScreen}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name="Modal" component={ModalScreen}/>
                <Stack.Screen name="EditAppointmentModal" component={EditAppointmentModalScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}