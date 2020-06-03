import reducer from './name';
import { ADD_NAME } from '../actions/name';

const initialState = {
    name: ''
};

describe('Name reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined,{})).toEqual(initialState);
    });
    it('should store the name payload', () => {
        expect(reducer({name:"ricky"},{type: ADD_NAME})).toEqual({name: "ricky"})
    });
});
