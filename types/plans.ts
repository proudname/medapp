import {ApiDoc, ApiMedia, ApiMediaList, ApiResponse} from "./api";

export type ApiPlan = ApiDoc<{
    "title": string,
    "week": number,
    "date": string,
    "completed": boolean,
    "images": ApiMediaList
}>

export type Plan = {
    "title": string,
    "week": number,
    "date": string,
    "completed": boolean,
    "images": ApiMedia[]
}

export type UpdatePlanPayload = {
    data: {
        completed: boolean
    }
}

export type GetPlansResponse = ApiResponse<ApiPlan[]>

export type UpdatePlanResponse = ApiResponse<ApiPlan>
