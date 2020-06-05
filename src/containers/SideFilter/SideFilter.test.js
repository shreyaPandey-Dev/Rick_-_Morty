import React from "react";
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../../App'
import thunk from 'redux-thunk';
import SideFilter from './SideFilter';

const mockgetFilter = jest.fn();
const mockremoveChecked = jest.fn();

// Configuring Mock Store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mockCharacterType = {
   characterType : {
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
   }
}
const store = mockStore({
    characters: [],
    species: 'alien',
    gender: 'female',
    name: 'summer',
    status: 'alive',
    orderBy: 'ascending',
    characterType: [

    ],
    currentPage: 1,
    totalPage: 59
});



describe('SideFilter container', () => {
    store.clearActions();

    const wrapper = mount(
        <Provider store={store}
        getFilter={mockgetFilter}
        removeChecked={mockremoveChecked}
        characterType = {mockCharacterType}
        >
            <SideFilter />
        </Provider>
    );

    it('Should print Filter text', () => {
        expect(wrapper.find('h2').html()).toContain('Filters');
    });

    it('Should receive character type props  ', () => { 
        const characterTypeVal = {
            characterType : {
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
               }
           };
           wrapper.setProps(characterTypeVal);
        expect(mockCharacterType.characterType).toEqual(wrapper.prop('characterType'));
    });
});