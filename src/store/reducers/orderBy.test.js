import reducer from './orderBy';
import { ADD_ORDER_BY } from '../actions/sort';

const initialState = {
    orderBy: 'ascending'
};

describe('Order reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined,{})).toEqual(initialState);
    });
    it('should store the order payload', () => {
        expect(reducer({ orderBy: 'descending'},{type: ADD_ORDER_BY})).toEqual({orderBy: 'descending'})
    });
});
