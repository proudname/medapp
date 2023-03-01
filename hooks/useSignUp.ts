import {useSignUpMutation} from "../api";
import {useEffect} from "react";
import {useAuthError} from "./useAuthError";
import {useAuth} from "./useAuth";
import {toast} from "../utils/toast";


export const useSignUp = () => {

    const {setTempToken} = useAuth();
    const [signUp, {data: signUpData, error: signUpError, isLoading: isSignUpProcessActive}] = useSignUpMutation();


    useEffect(() => {
        if (signUpData && signUpData.jwt) setTempToken(signUpData.jwt)
    }, [signUpData])


    useAuthError({
        error: signUpError, onError: (message) => {
            toast(message, 'error')
        }
    })

    return {
        signUp,
        isSignUpProcessActive,
    }
}