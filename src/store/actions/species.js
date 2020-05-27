import { ADD_SPECIES,DELETE_SPECIES } from "../types/types";


export   const addSpecies = (payload) => {
    console.log("ACTION PAY ADD SPECIES========================", payload)

    return {
        type: ADD_SPECIES,
        payload: payload
    };

}


export const deleteSpecies = (payload) => {
    console.log("ACTION PAY DELETE SPECIES========================", payload)

    return {
        type: DELETE_SPECIES,
        payload: payload
    };

}

export default addSpecies;

