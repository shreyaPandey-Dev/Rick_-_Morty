import {
    DELETE_SPECIES,
    ADD_SPECIES
} from '../types/types';


const initialState = {
    species: ''
};



const getSpecies = (state, payload) => ({
    ...state,
    species: payload
});

const removeSpecies = (state) => ({
    ...state,
    species: ''
});

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_SPECIES:
            return getSpecies(state, payload);
        case DELETE_SPECIES:
            return removeSpecies(state);
        default:
            return state;
    }
}