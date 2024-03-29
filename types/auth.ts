import {ApiResponse} from "./api";
import {Gender} from "../enums";

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

export type SignInWithProviderPayload = {
    "provider": 'google',
    "token": string
}

export type ForgotPasswordPayload = {
    "email": string
}

export type ChangePasswordPayload = {
    "code": string,
    "password": string,
    "passwordConfirmation": string,
}

export type SignUpPayload = {
    "username": string,
    "email": string,
    "password": string
    name: string,
    surname: string,
    birthday: string,
    gender: Gender
}

export type SignInResult = AuthResult

export type SignUpResult = AuthResult

export type ForgotPasswordResult = ApiResponse<{}>

export type ChangePasswordResult = ApiResponse<{}>
