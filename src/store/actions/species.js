import { ADD_SPECIES,DELETE_SPECIES } from "../types/types";


export   const addSpecies = (payload) => {

    return {
        type: ADD_SPECIES,
        payload: payload
    };
}


export const deleteSpecies = (payload) => {

    return {
        type: DELETE_SPECIES,
        payload: payload
    };

}

export default addSpecies;

