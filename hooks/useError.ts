import {useEffect} from "react";
import {toast} from "../utils/toast";


export const useError = (error: any) => {
    useEffect(() => {
        if (error) {
            console.log(error);
            if ('message' in error && error.message) {
                toast(error.message, 'error')
            } else {
                toast('Unknown request error')
            }
        }
    }, [error])
}