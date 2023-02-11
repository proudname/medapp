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
            ContractList: 'contract-list',
            ContractNew: 'contract-new',
            ScheduleDetails: 'schedules-details',
            ScheduleNew: 'schedules-new',
            PlanDetails: 'plans-details',
            Modal: 'modal',
            NotFound: '*',
        },
    },
};

export default linking;
