import {useEffect} from "react";
import {get} from "lodash";

type Props = {
    error: any,
    onError: (message: string) => void
}

export const useAuthError = ({error, onError}: Props) => {

    useEffect(() => {

        if (!error) return;
        console.log('err')

        const status = get(error, 'data.error.status');

        switch (status) {
            case 400:
            case 401:
                onError(get(error, 'data.error.message', 'Authorization error'))
                break;
            case 402:
                break;
            default: {
                alert(JSON.stringify(error))
                onError(`Unknown error. Code ${status}`)
            }
        }
    }, [error])

}