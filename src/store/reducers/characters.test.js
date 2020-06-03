import reducer from './characters';
import { ADD_CHARACTERS } from '../actions/characters';

const initialState = {
    characters: []
};

describe('Characters reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined,{})).toEqual(initialState);
    });

    it('should store the characters payload', () => {
        expect(reducer(  {
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
		},{type: ADD_CHARACTERS})).toEqual(  {
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
		})
    });
});
