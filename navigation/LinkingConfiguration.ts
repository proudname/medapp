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
            Root: {
                screens: {
                    SignInScreen: {
                        screens: {
                            SignInScreen: 'sign-in',
                        },
                    },
                    SignUpScreen: {
                        screens: {
                            SignUpScreen: 'sign-up',
                        },
                    },
                },
            },
            ContractList: 'contract-list',
            ContractDetails: 'contract-details',
            ContractNew: 'contract-new',
            ScheduleList: 'schedules-list',
            ScheduleDetails: 'schedules-details',
            ScheduleNew: 'schedules-new',
            PlanList: 'plans-list',
            PlanDetails: 'plans-details',
            Modal: 'modal',
            Home: 'home',
            NotFound: '*',
        },
    },
};

export default linking;
