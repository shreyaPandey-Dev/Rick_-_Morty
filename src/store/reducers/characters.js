import { ADD_CHARACTERS } from '../types/types';

const initialState = {
    characters: []
}
const getCharacters = (state, payload) => ({
    ...state,
    characters: payload.slice()
});


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_CHARACTERS:
            return getCharacters(state, payload);
        default:
            return state;
    }
};
