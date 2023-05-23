import {ApiDoc, ApiMedia, ApiResponse} from "./api";


export type TreatmentMedia = {
    video: ApiMedia,
}

export type TreatmentMediaResponse = ApiResponse<ApiDoc<TreatmentMedia>>