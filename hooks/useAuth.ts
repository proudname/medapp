import {useAppSelector} from "./useAppSelector";
import {clearSession, establishSession, selectAuthState} from "../state/features/authSlice";
import {useAppDispatch} from "./useAppDispatch";
import {useEffect, useState} from "react";
import {useCheckTokenQuery, useSignInWithProviderMutation} from "../api";
import {get} from "lodash";
// import {GoogleSignin, statusCodes,} from '@react-native-google-signin/google-signin';
import {toast} from "../utils/toast";
import {useAuthError} from "./useAuthError";

// GoogleSignin.configure();

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
        setTempToken,
        isUninitialized,
        applyGoogleAuth,
        startSession,
        endSession
    }
}