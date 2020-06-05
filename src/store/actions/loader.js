import { ENABLE_LOADER,DISABLE_LOADER} from "../types/types";


export   const enableLoader = () => {

    return {
        type: ENABLE_LOADER,
        payload: true
    };
}


export const disableLoader = () => {

    return {
        type: DISABLE_LOADER,
        payload: false
    };

}

export default {enableLoader,disableLoader};

