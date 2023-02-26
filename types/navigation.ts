/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {NativeStackScreenProps} from '@react-navigation/native-stack';
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
    Balance: undefined,
    NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
    Screen>;
