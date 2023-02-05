import {ApiResponse} from "./api";

export type AuthResult = {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "user": {
        "id": 1,
        "username": "foo.bar",
        "email": "foo.bar@strapi.io",
        "provider": "local",
        "confirmed": true,
        "blocked": false,
        "createdAt": "2022-06-02T08:32:06.258Z",
        "updatedAt": "2022-06-02T08:32:06.267Z"
    }
}

export type SignInPayload = {
    "identifier": string,
    "password": string
}

export type SignUpPayload = {
    "username": string,
    "email": string,
    "password": string
}

export type SignInResult = ApiResponse<AuthResult>

export type SignUpResult = ApiResponse<AuthResult>
