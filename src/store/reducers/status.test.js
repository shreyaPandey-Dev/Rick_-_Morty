import reducer from './status';
import {  ADD_STATUS,  DELETE_STATUS } from '../actions/status';

const initialState = {
    status: ''
};

describe('Status reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined,{})).toEqual(initialState);
    });
    it('should store the Status payload', () => {
        expect(reducer({status:"alive"},{type:  ADD_STATUS})).toEqual({status: "alive"})
    });
    it('should remove the Status payload', () => {
        expect(reducer({status:""},{type: DELETE_STATUS})).toEqual(initialState)
    });
});
