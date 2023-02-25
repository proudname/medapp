/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Contract} from './contracts';
import {Schedule} from "./schedules";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}

export type RootStackParamList = {
    Auth: undefined;
    Home: undefined;
    Modal: undefined;
    ScheduleDetails: {
        schedule: Schedule
    },
    ScheduleNew: undefined,
    PlanList: undefined,
    Affiliate: undefined,
    NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
    Screen>;

export type ContractDetailsTabParamList = {
    ContractDetails: {
        contract: Contract
    };
    ScheduleList: undefined;
    PlanList: undefined;
};

export type ContractDetailsTabScreenProps<Screen extends keyof ContractDetailsTabParamList> = CompositeScreenProps<BottomTabScreenProps<ContractDetailsTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>>;