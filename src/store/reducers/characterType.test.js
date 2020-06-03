import reducer from './characterType';
import { ADD_CHARACTERTYPE } from '../actions/characterType';

const initialState = {
    characterType: []
};

describe('Character type reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined,{})).toEqual(initialState);
    });

    it('should store the character type payload', () => {
        const characterType =  [
            {
                type: 'Species',
                data: [
                    {
                        title: 'Human',
                        value: 'human',
                        isChecked: false
                    },
                    {
                        title: 'Alien',
                        value: 'alien',
                        isChecked: false
                    }
                ]
            },
            {
                type: 'Gender',
                data: [
                    {
                        title: 'Male',
                        value: 'male',
                        isChecked: false
                    },
                    {
                        title: 'Female',
                        value: 'female',
                        isChecked: false
                    }
                ]
            },
            {
                type: 'Status',
                data: [
                    {
                        title: 'Unknown',
                        value: 'unknown',
                        isChecked: false
                    },
                    {
                        title: 'Alive',
                        value: 'alive',
                        isChecked: false
                    },
                    {
                        title: 'Dead',
                        value: 'dead',
                        isChecked: false
                    }
                ]
            }
        ]
        expect(reducer({characterType},{type: ADD_CHARACTERTYPE})).toEqual({characterType})
    });
});
