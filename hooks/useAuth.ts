import {useAppSelector} from "./useAppSelector";
import {clearSession, establishSession, selectAuthState} from "../state/features/authSlice";
import {useAppDispatch} from "./useAppDispatch";
import {useEffect, useState} from "react";
import {useCheckTokenQuery, useSignInWithProviderMutation} from "../api";
import {get} from "lodash";
import {toast} from "../utils/toast";
import {useAuthError} from "./useAuthError";

export const useAuth = () => {
    const {token} = useAppSelector(selectAuthState);
    const [tempToken, setTempToken] = useState<string | null>(token);
    const dispatch = useAppDispatch();

    const [signInWithProvider, {
        data: signInWithProviderData,
        error: signInWithProviderError
    }] = useSignInWithProviderMutation();
    const {
        data: checkTokenResult,
        refetch: checkToken,
        isUninitialized,
        error: checkTokenError
    } = useCheckTokenQuery(tempToken);

    const startSession = (sessionToken: string) => {
        dispatch(establishSession(sessionToken))
    }

    const endSession = () => {
        dispatch(clearSession())
    }

    useEffect(() => {
        if (checkTokenResult && tempToken) {
            startSession(tempToken)
        }
    }, [checkTokenResult])

    useEffect(() => {
        if (tempToken) {
            checkToken()
        }
    }, [tempToken])


    useAuthError({
        error: checkTokenError, onError: (message) => {
            // silent fallback
            console.log(message)
        }
    })

    useEffect(() => {
        if (!signInWithProviderError) return;
        const error = get(signInWithProviderError, 'data[0].messages[0].id');
        if (error === 'Auth.form.error.email.taken') {
            toast('This email already taken', 'error');
            return;
        }
        toast('Login cancelled', 'error');
    }, [signInWithProviderError])

    useEffect(() => {
        if (!signInWithProviderData) return;
        setTempToken(signInWithProviderData.jwt)
    }, [signInWithProviderData])


    return {
        token,
        setTempToken,
        isUninitialized,
        startSession,
        endSession,
        signInWithProvider
    }
}