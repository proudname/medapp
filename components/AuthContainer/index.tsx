import {useAuth} from "../../hooks/useAuth";
import {useEffect} from "react";
import {useAppNavigation} from "../../hooks/useAppNavigation";


export const AuthContainer = () => {
    const {token} = useAuth();
    const navigation = useAppNavigation();

    useEffect(() => {
        if (!token) {
            navigation.navigate('Auth')
        }
    }, [token]);

    return null;
}