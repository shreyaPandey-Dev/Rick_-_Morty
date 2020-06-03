import reducer from './gender';
import {  ADD_GENDER, DELETE_GENDER } from '../actions/gender';

const initialState = {
    gender: ''
};

describe('Gender reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined,{})).toEqual(initialState);
    });
    it('should store the gender payload', () => {
        expect(reducer({gender:"female"},{type: ADD_GENDER})).toEqual({gender: "female"})
    });
    it('should remove the gender payload', () => {
        expect(reducer({gender:""},{type: DELETE_GENDER})).toEqual(initialState)
    });
});
