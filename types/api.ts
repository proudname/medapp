export type ApiErrorResponse = {
    "data": {},
    "error": {
        "status": number,
        "name": string,
        "message": string,
        "details": unknown
    }
}

export type ApiDoc<T> = {
    id: string | number,
    attributes: T,
}

export type ApiSuccessResponse<D = unknown, M = unknown> = {
    data: D,
    meta: M
}

export type ApiResponse<D = unknown, M = unknown> = ApiSuccessResponse<D, M>;


export type ApiMedia = {
    data: ApiDoc<{ url: string }>
}