export type ApiErrorResponse = {
    "data": {},
    "error": {
        "status": number,
        "name": string,
        "message": string,
        "details": unknown
    }
}

export type ApiSuccessResponse<D = unknown, M = unknown> = {
    data: D,
    meta: M
}

export type ApiResponse<D = unknown, M = unknown> = ApiSuccessResponse<D, M> | ApiErrorResponse;