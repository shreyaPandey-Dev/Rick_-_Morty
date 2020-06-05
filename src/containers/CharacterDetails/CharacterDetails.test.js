import React from "react";
import { shallow } from 'enzyme';
import CharacterDetails from './CharacterDetails';


const mockcalculateCreatedDate = jest.fn();

const mockCharacter = 
    [ {
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
    }]



describe('CharacterDetails container', () => {
    const wrapper = shallow(<CharacterDetails characterData={mockCharacter} calculateCreatedDate={mockcalculateCreatedDate} />);


    

    it('Should receive character props  ', () => {
      expect(wrapper.instance().props.characterData).toEqual(mockCharacter);
    });

    it('Should simulate calculateCreatedDate function ', () => {
        expect(wrapper.instance().calculateCreatedDate()).toEqual("a few seconds ago");
    });
});