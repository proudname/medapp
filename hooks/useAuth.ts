import {useAppSelector} from "./useAppSelector";
import {selectToken, updateToken} from "../state/features/authSlice";
import {useAppDispatch} from "./useAppDispatch";
import {useEffect, useState} from "react";
import {useMeQuery, useSignInMutation, useSignUpMutation} from "../api";
import {get} from "lodash";

type SuccessAuthStatus = {
    authenticated: true,
    error: null
}

type FailAuthStatus = {
    authenticated: false,
    error: string
}

type UninitializedAuthStatus = {
    authenticated: false,
    error: null
}

type AuthStatus = SuccessAuthStatus | FailAuthStatus | UninitializedAuthStatus;

export const useAuth = () => {
    const token = useAppSelector(selectToken);
    const dispatch = useAppDispatch();
    const [signIn, {data: signInData, error: signInError, isLoading: isSignInProcessActive}] = useSignInMutation();
    const [signUp, {data: signUpData, error: signUpError, isLoading: isSignUpProcessActive}] = useSignUpMutation();
    const {data: me, refetch: refetchMeQuery, isUninitialized, error: meError} = useMeQuery();
    const [status, setStatus] = useState<AuthStatus>({
        authenticated: false,
        error: null
    });

    const setToken = (token: string | null) => {
        dispatch(updateToken(token));
    }

    useEffect(() => {
        if (isUninitialized) return;

        if (me) {
            setStatus({
                authenticated: true,
                error: null
            })
        }
    }, [me, isUninitialized])

    useEffect(() => {
        if (!meError) return;

        const status = get(signInError, 'data.error.status');

        switch (status) {
            case 400: {
                setStatus({
                    authenticated: false,
                    error: get(signInError, 'data.error.message', 'Authorization error')
                })
                setToken(null);
                break;
            }
            default: {
                setStatus({
                    authenticated: false,
                    error: 'Unknown error me'
                })
            }
        }
    }, [meError])

    useEffect(() => {
        if (token) refetchMeQuery()
    }, [token])

    useEffect(() => {
        if (signInData && signInData.jwt) setToken(signInData.jwt)
    }, [signInData])

    useEffect(() => {
        if (signUpData && signUpData.jwt) setToken(signUpData.jwt)
    }, [signUpData])

    useEffect(() => {
        if (!signInError) return;
        const status = get(signInError, 'data.error.status');

        switch (status) {
            case 401: {
                setStatus({
                    authenticated: false,
                    error: get(signInError, 'data.error.message', 'Validation error')
                })
                break;
            }
            default: {
                setStatus({
                    authenticated: false,
                    error: 'Unknown error sign in'
                })
            }
        }
    }, [signInError])

    useEffect(() => {
        if (!signUpError) return;
        const status = get(signUpError, 'data.error.status');

        switch (status) {
            case 401: {
                setStatus({
                    authenticated: false,
                    error: get(signUpError, 'data.error.message', 'Validation error')
                })
                break;
            }
            default: {
                setStatus({
                    authenticated: false,
                    error: 'Unknown error sign up'
                })
            }
        }
    }, [signUpError])

    return {
        token,
        setToken,
        signIn,
        signUp,
        isUninitialized,
        status,
        isSignInProcessActive,
        isSignUpProcessActive,
    }
}