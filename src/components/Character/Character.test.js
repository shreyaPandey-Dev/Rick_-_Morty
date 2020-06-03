import React from "react";
import { shallow } from 'enzyme';
import Character from './Character';


const mockData = {
    data: {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    }
}
const mockCreatedDate = {
    createdDate: "3 years ago"
}
describe('character ', () => {
    it('Should Render character component ', () => {
        // given
        const wrapper = shallow(<Character data={mockData.data} />);
        // expected
        expect(wrapper).toMatchSnapshot();

    },
        it('should render name,id,createdDate,species,status,gender,origin,location props', () => {
            // given
            const wrapper = shallow(<Character data={mockData.data} createdDate={mockCreatedDate.createdDate} />);
            const name = wrapper.find('.card-title').html();
            const id = wrapper.find('.char-id').html();
            const createdDate = wrapper.find('.char-cdate').html();
            const species = wrapper.find('.char-species').html();
            const status = wrapper.find('.char-status').html();
            const gender = wrapper.find('.char-gender').html();
            const originName = wrapper.find('.char-origin').html();
            const locationName = wrapper.find('.char-loc').html();
            
            // expected
            expect(name).toContain(mockData.data.name);
            expect(id).toContain(mockData.data.id);
            expect(createdDate).toContain(createdDate);
            expect(species).toContain(mockData.data.species);
            expect(status).toContain(mockData.data.status);
            expect(gender).toContain(mockData.data.gender);
            expect(originName).toContain(mockData.data.origin.name);
            expect(locationName).toContain(mockData.data.location.name);

        })

    )
});




