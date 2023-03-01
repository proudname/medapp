/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from '@react-navigation/native';
import * as Linking from 'expo-linking';

import {RootStackParamList} from '../types';

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.createURL('/')],
    config: {
        screens: {
            Auth: 'authentication',
            RestorePassword: 'restore-password',
            Home: 'home',
            PlanList: 'plans-list',
            ScheduleList: 'schedule-list',
            Affiliate: 'affiliate',
            Balance: 'balance',
            Modal: 'modal',
            EditAppointmentModal: 'edit-appointment-modal',
            NotFound: '*',
        },
    },
};

export default linking;
