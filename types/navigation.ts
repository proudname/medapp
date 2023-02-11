/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Contract} from './contracts';
import {Schedule} from "./schedules";
import {Plan} from "./plans";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}

export type RootStackParamList = {
    Auth: undefined;
    Modal: undefined;
    ContractList: undefined;
    ContractNew: undefined;
    ContractDetailsTab: NavigatorScreenParams<ContractDetailsTabParamList> | undefined;
    ScheduleDetails: {
        schedule: Schedule
    },
    ScheduleNew: undefined,
    PlanDetails: {
        plan: Plan
    },
    NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
    Screen>;


export type RootTabParamList = {
    SignInScreen: undefined;
    SignUpScreen: undefined;
};

export type ContractDetailsTabParamList = {
    ContractDetails: {
        contract: Contract
    };
    ScheduleList: undefined;
    PlanList: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>>;

export type ContractDetailsTabScreenProps<Screen extends keyof ContractDetailsTabParamList> = CompositeScreenProps<BottomTabScreenProps<ContractDetailsTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>>;