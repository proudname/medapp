import {ApiResponse} from "./api";

export type ApiAppointment = {
    "id": 0,
    "attributes": {
        "time": "2023-01-22T13:51:42.384Z",
        "confirmed": true,
        "doctor": {
            "data": {
                "id": 0,
                "attributes": {
                    "firstname": "string",
                    "lastname": "string",
                    "username": "string",
                    "email": "user@example.com",
                    "resetPasswordToken": "string",
                    "registrationToken": "string",
                    "isActive": true,
                    "roles": {
                        "data": [
                            {
                                "id": 0,
                                "attributes": {
                                    "name": "string",
                                    "code": "string",
                                    "description": "string",
                                    "users": {
                                        "data": [
                                            {
                                                "id": 0,
                                                "attributes": {}
                                            }
                                        ]
                                    },
                                    "permissions": {
                                        "data": [
                                            {
                                                "id": 0,
                                                "attributes": {
                                                    "action": "string",
                                                    "subject": "string",
                                                    "properties": "string",
                                                    "conditions": "string",
                                                    "role": {
                                                        "data": {
                                                            "id": 0,
                                                            "attributes": {}
                                                        }
                                                    },
                                                    "createdAt": "2023-01-22T13:51:42.384Z",
                                                    "updatedAt": "2023-01-22T13:51:42.384Z",
                                                    "createdBy": {
                                                        "data": {
                                                            "id": 0,
                                                            "attributes": {}
                                                        }
                                                    },
                                                    "updatedBy": {
                                                        "data": {
                                                            "id": 0,
                                                            "attributes": {}
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "createdAt": "2023-01-22T13:51:42.384Z",
                                    "updatedAt": "2023-01-22T13:51:42.384Z",
                                    "createdBy": {
                                        "data": {
                                            "id": 0,
                                            "attributes": {}
                                        }
                                    },
                                    "updatedBy": {
                                        "data": {
                                            "id": 0,
                                            "attributes": {}
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "blocked": true,
                    "preferedLanguage": "string",
                    "createdAt": "2023-01-22T13:51:42.384Z",
                    "updatedAt": "2023-01-22T13:51:42.384Z",
                    "createdBy": {
                        "data": {
                            "id": 0,
                            "attributes": {}
                        }
                    },
                    "updatedBy": {
                        "data": {
                            "id": 0,
                            "attributes": {}
                        }
                    }
                }
            }
        },
        "createdAt": "2023-01-22T13:51:42.384Z",
        "updatedAt": "2023-01-22T13:51:42.384Z",
        "createdBy": {
            "data": {
                "id": 0,
                "attributes": {}
            }
        },
        "updatedBy": {
            "data": {
                "id": 0,
                "attributes": {}
            }
        }
    }
}

export type CreateAppointmentPayload = {
    time: string
}

export type GetAppointmentsResponse = ApiResponse<ApiAppointment[]>

export type CreateAppointmentResponse = ApiResponse<ApiAppointment>
