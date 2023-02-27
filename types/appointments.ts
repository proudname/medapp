import {ApiDoc, ApiResponse} from "./api";
import {MedicalCenter} from "./medical-centers";

export type ApiAppointment = {
    "id": 0,
    "attributes": {
        "date": string,
        medicalCenter: {
            data: ApiDoc<MedicalCenter> | null
        }
    }
}

export type CreateAppointmentPayload = {
    date: string
    medicalCenter: string | number
}

export type UpdateAppointmentPayload = {
    id: string | number
    payload: {
        date?: string,
        medicalCenter?: string | number
    }
}


export type GetAppointmentsResponse = ApiResponse<ApiAppointment[]>

export type GetAppointmentResponse = ApiResponse<ApiAppointment>

export type CreateAppointmentResponse = ApiResponse<ApiAppointment>

export type UpdateAppointmentResponse = ApiResponse<ApiAppointment>
