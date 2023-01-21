import {Entity} from "./entity";

export type PlanInstruction = {
    description: string;
}

export type PlanData = {
    instructions: PlanInstruction[];
};

export type Plan = PlanData & Entity;