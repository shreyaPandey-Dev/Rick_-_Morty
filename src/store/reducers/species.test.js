import reducer from './species';
import { DELETE_SPECIES,ADD_SPECIES } from '../actions/species';

const initialState = {
    species: ''
};

describe('Species reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined,{})).toEqual(initialState);
    });

    it('should store the species payload', () => {
        expect(reducer({species:"alien"},{type: ADD_SPECIES})).toEqual({species: "alien"})
    });

    it('should remove the species payload', () => {
        expect(reducer({species:""},{type: DELETE_SPECIES})).toEqual(initialState)
    });
});
