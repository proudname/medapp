import {useSignInMutation} from "../api";
import {useEffect} from "react";
import {useAuthError} from "./useAuthError";
import {useAuth} from "./useAuth";
import {toast} from "../utils/toast";


export const useSignIn = () => {

    const {setTempToken, signInWithProvider} = useAuth();
    const [signIn, {data: signInData, error: signInError, isLoading: isSignInProcessActive}] = useSignInMutation();


    useEffect(() => {
        if (signInData && signInData.jwt) setTempToken(signInData.jwt)
    }, [signInData])

    useAuthError({
        error: signInError, onError: (message) => {
            toast(message, 'error')
        }
    })

    return {
        signIn,
        isSignInProcessActive,
        signInWithProvider
    }
}