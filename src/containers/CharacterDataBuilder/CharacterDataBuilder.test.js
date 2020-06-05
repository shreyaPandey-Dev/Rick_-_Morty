import React from "react";
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../../App'
import thunk from 'redux-thunk';
import CharacterDataBuilder from './CharacterDataBuilder';

const mockgetFilter = jest.fn();
const mockremoveChecked = jest.fn();

// Configuring Mock Store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mockCharacter = {
    character: {
        "id": 20,
        "name": "Ants in my Eyes Johnson",
        "status": "unknown",
        "species": "Human",
        "type": "Human with ants in his eyes",
        "gender": "Male",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "location": {
            "name": "Interdimensional Cable",
            "url": "https://rickandmortyapi.com/api/location/6"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "url": "https://rickandmortyapi.com/api/character/20",
        "created": "2017-11-04T22:34:53.659Z"
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
        >
            <CharacterDataBuilder />
        </Provider>
    );

    it('Should receive character props  ', () => {
        const characterVal = {
            character: {
                "id": 20,
                "name": "Ants in my Eyes Johnson",
                "status": "unknown",
                "species": "Human",
                "type": "Human with ants in his eyes",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Interdimensional Cable",
                    "url": "https://rickandmortyapi.com/api/location/6"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/8"
                ],
                "url": "https://rickandmortyapi.com/api/character/20",
                "created": "2017-11-04T22:34:53.659Z"
            }
        };
        wrapper.setProps(characterVal);
        expect(mockCharacter.character).toEqual(wrapper.prop('character'));
    });
});