import {useChangePasswordMutation} from "../api";
import {useAuthError} from "./useAuthError";
import {toast} from "../utils/toast";


export const useChangePassword = () => {

    const [changePassword, {
        error: changePasswordError,
        isLoading: isChangePasswordLoading
    }] = useChangePasswordMutation();

    useAuthError({
        error: changePasswordError, onError: (message) => {
            toast(message, 'error')
        }
    })

    return {
        changePassword,
        isChangePasswordLoading,
    }
}