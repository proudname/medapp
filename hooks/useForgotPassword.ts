import {useForgotPasswordMutation, useSignInMutation, useSignUpMutation} from "../api";
import {useEffect} from "react";
import {useAuthError} from "./useAuthError";
import {useAuth} from "./useAuth";
import {toast} from "../utils/toast";


export const useForgotPassword = () => {

    const [restorePassword, {
        error: forgotPasswordError,
        isLoading: isRestorePasswordLoading
    }] = useForgotPasswordMutation();

    useAuthError({
        error: forgotPasswordError, onError: (message) => {
            toast(message, 'error')
        }
    })

    return {
        restorePassword,
        isRestorePasswordLoading,
    }
}