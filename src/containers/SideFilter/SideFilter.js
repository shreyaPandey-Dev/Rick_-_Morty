import React, { Component } from "react";
import FilterCard from '../../components/FilterCard/FilterCard'
import style from './SideFilter.css'
import { connect } from "react-redux";
import { addSpecies, deleteSpecies } from '../../store/actions/species';
import { addGender, deleteGender } from '../../store/actions/gender';
import { addStatus, deleteStatus } from '../../store/actions/status';
import fetchCharacters from '../../store/actions/characters';
import addCharacterType from '../../store/actions/characterType';
// import store from '../../store/store';
import {resetCurrentPage} from '../../store/actions/currentPage';


export class SideFilter extends Component {
    constructor(props) {
        super(props);
     var characterType =  [
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
     this.props.add_characterType(characterType);
    }


    getFilter = (clickedEl, row, type) => {
        if (String(type).toLowerCase() === 'species') {
            if (clickedEl) {
                this.props.add_species(row.value);
            } else {
                this.props.delete_species(row.value)
            }

        }
        
        if (String(type).toLowerCase() === 'gender') {
            if (clickedEl) {
                this.props.add_gender(row.value);
            } else {
                this.props.delete_gender(row.value)
            }

        }

        if (String(type).toLowerCase() === 'status') {
            if (clickedEl) {
                this.props.add_status(row.value);
            } else {
                this.props.delete_status(row.value)
            }
        }
        this.removeChecked(row, type, clickedEl);
        this.props.reset_currentPage();
        this.props.get_characters();
    }

    removeChecked = (row, type, clickedEl) => {
        var checkVals = [];
        var rowdata = this.props.characterType.characterType.find(x => (x.type) === type);
        // Replacing the isClicked state of the clicked element
        rowdata.data.forEach(element => {
            if (element.value === row.value) {
                element.isChecked = clickedEl;
            } else {
                element.isChecked = false;
            }
        
            checkVals.push(element);
        });

        // Replacing the data field of specific type which is clicked
        var tempstate = this.props.characterType.characterType;
        tempstate.map(x => { return ((x.type) === type ? x.data = checkVals : x) })
        this.props.add_characterType(tempstate);
        this.props.reset_currentPage();
    }



    render() {
        
console.log("this.props.characterType",this.props.characterType)
        return ( 
            <div className={`${style.sidebarcontainer} mt-3`}>
                <h2>Filters</h2>
                <div className={`${style.sidebarlogo} mt-3`}>
                    { this.props.characterType.characterType ?
                    this.props.characterType.characterType
                        .map((ctype, index) =>
                            (
                                <FilterCard key={index} characterType={ctype} getFilter={this.getFilter}></FilterCard>
                            )) : null
                        }
                </div>
            </div>
        )
    }
}




const mapStateToProps = state => ({
    characters: state.characters,
    species: state.species,
    gender: state.gender,
    name: state.name,
    characterType: state.characterType
});

const mapDispatchToProps = {
    add_species: addSpecies,
    delete_species: deleteSpecies,
    add_gender: addGender,
    delete_gender: deleteGender,
    add_status: addStatus,
    delete_status: deleteStatus,
    get_characters: fetchCharacters,
    add_characterType: addCharacterType,
    reset_currentPage: resetCurrentPage
};


const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideFilter);

export default AppContainer;