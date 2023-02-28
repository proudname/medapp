import {useAppSelector} from "./useAppSelector";
import {selectToken, updateToken} from "../state/features/authSlice";
import {useAppDispatch} from "./useAppDispatch";
import {useEffect, useState} from "react";
import {useMeQuery, useSignInMutation, useSignInWithProviderMutation, useSignUpMutation} from "../api";
import {get} from "lodash";
// import {GoogleSignin, statusCodes,} from '@react-native-google-signin/google-signin';
import {toast} from "../utils/toast";

// GoogleSignin.configure();

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
    const [signInWithProvider, {
        data: signInWithProviderData,
        error: signInWithProviderError
    }] = useSignInWithProviderMutation();
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

        const status = get(meError, 'data.error.status');

        switch (status) {
            case 400: {
                setStatus({
                    authenticated: false,
                    error: get(signInError, 'data.error.message', 'Authorization error')
                })
                setToken(null);
                break;
            }
            case 401:
            case 403:
                break;
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
            case 400: {
                setStatus({
                    authenticated: false,
                    error: get(signInError, 'data.error.message', 'Validation error')
                })
                break;
            }
            default: {
                console.log(signInError);
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
            case 400: {
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
        setToken(signInWithProviderData.data.jwt)
    }, [signInWithProviderData])

    const applyGoogleAuth = async () => {
        // try {
        //     await GoogleSignin.hasPlayServices();
        //     const userInfo = await GoogleSignin.signIn();
        //     const token = userInfo.idToken;
        //     if (!token) {
        //         toast('Token not found', 'error');
        //         return;
        //     }
        //     signInWithProvider({provider: 'google', token})
        // } catch (error: any) {
        //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //         // user cancelled the login flow
        //     } else if (error.code === statusCodes.IN_PROGRESS) {
        //         toast('Another instance of Google Auth already running', 'warn');
        //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //         toast('Play services not available', 'error');
        //     } else {
        //         toast('Google auth error', 'error');
        //     }
        //     console.log(error);
        // }
    };

    return {
        token,
        setToken,
        signIn,
        signUp,
        isUninitialized,
        status,
        isSignInProcessActive,
        isSignUpProcessActive,
        applyGoogleAuth
    }
}