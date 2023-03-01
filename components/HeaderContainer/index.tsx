import {useAuth} from "../../hooks/useAuth";
import {useEffect} from "react";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";

export const HeaderContainer = ({navigation}: NativeStackHeaderProps) => {
    const {token} = useAuth();

    useEffect(() => {
        if (!token) {
            navigation.navigate('Auth')
        }
    }, [token]);

    return null;
}