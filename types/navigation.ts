/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}

export type RootStackParamList = {
    Auth: undefined;
    RestorePassword: { step: number };
    Home: undefined;
    Modal: undefined;
    EditAppointmentModal: { editId: string | number } | undefined;
    ScheduleList: undefined,
    PlanList: undefined,
    Affiliate: undefined,
    Balance: undefined,
    NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
    Screen>;
