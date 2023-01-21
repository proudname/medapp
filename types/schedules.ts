import {Entity} from "./entity";

export type Doctor = {
    name: string
} & Entity;

export type ScheduleData = {
    doctor: Doctor;
    time: string;
};

export type Schedule = ScheduleData & Entity;