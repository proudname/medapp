import {ApiDoc, ApiResponse} from "./api";

export type MedicalCenter = {
    name: string,
    address: string,
}

export type ApiMedicalCenter = ApiDoc<MedicalCenter>

export type GetApiMedicalCentersResponse = ApiResponse<ApiMedicalCenter[]>

