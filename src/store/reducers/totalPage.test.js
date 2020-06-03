import reducer from './totalPage';
import { ADD_TOTAL_PAGE } from '../actions/totalPage';

const initialState = {
    totalPage: 59
};

describe('Total Page reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined,{})).toEqual(initialState);
    });
    it('should store the Total Page payload', () => {
        expect(reducer({ totalPage: 23},{type: ADD_TOTAL_PAGE})).toEqual({ totalPage: 23})
    });
});
