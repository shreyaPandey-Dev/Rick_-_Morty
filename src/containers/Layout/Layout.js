import React, { Component } from 'react';
import Aux from '../../HOC/Aux_container';
import Header from '../../components/Header/Header';
import SideFilter from '../../containers/SideFilter/SideFilter'
import SearchHeaderBar from '../../components/SearchHeaderBar/SearchHeaderBar'
import CharacterDataBuilder from '../CharacterDataBuilder/CharacterDataBuilder'
import style from './Layout.css'
import addName from '../../store/actions/name'
import fetchCharacters from '../../store/actions/characters';
import addOrderBy from '../../store/actions/sort';
import PaginationComp from '../PaginationComp/PaginationComp'
import { connect } from "react-redux";
import {addSpecies,deleteSpecies} from '../../store/actions/species';
import {addGender,deleteGender} from '../../store/actions/gender';
import {addStatus, deleteStatus} from '../../store/actions/status';
import addCharacterType from '../../store/actions/characterType';
import {resetCurrentPage} from '../../store/actions/currentPage';

import store from '../../store/store'

export  class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    getData = (data) => {
        const name = data;
        if (data) {
            this.props.add_name(data);
        }
        this.props.reset_currentPage();
        this.props.get_characters();
    }

    getOrder = (data) => {
        
        var orderBy = data;
        this.props.add_orderBy(orderBy);
        this.props.get_characters();
    }

    removeSelectedFilter = (data) => {
         ( data === 'species') ?  this.props.delete_species(data) : (data === 'gender')  ? this.props.delete_gender(data) : this.props.delete_status(data)
         this.removeChecked(data);
         this.props.reset_currentPage();
         this.props.get_characters();
         console.log("removeSelectedFilter=props=", store.getState())
        }


        removeChecked = ( type) => {
            var checkVals = [];
            var rowdata = this.props.characterType.find(x => String(x.type).toLowerCase() === type);
            // Replacing the isClicked state of the clicked element
            rowdata.data.forEach(element => {
                element.isChecked = false;
                checkVals.push(element);
            });
    
            // Replacing the data field of specific type which is clicked
            var tempstate = this.props.characterType;
            tempstate.map(x => { return ((x.type) === type ? x.data = checkVals : x) })
            this.props.add_characterType(tempstate);
        }

    render() {
        return (
            <Aux>
                <Header></Header>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 col-md-12 p-0">
                            <div className="col-md-12">
                                <SideFilter  updatedFilter = {this.props}></SideFilter>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className={style.jumbo} >
                                <SearchHeaderBar
                                removeSelectedFilter={this.removeSelectedFilter}
                                 getData={this.getData}
                                 getOrder={this.getOrder} 
                                 speciesFilter = {this.props.species}
                                 genderFilter = {this.props.gender}
                                 statusFilter = {this.props.status}
                                 />
                            </div>
                            <hr></hr>
                            <main>
                                <CharacterDataBuilder></CharacterDataBuilder>
                                <PaginationComp></PaginationComp>
                            </main>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }

 
}
const mapStateToProps = state => ({
    characters : state.characters,
   name: state.name,
   species: state.species,
   gender: state.gender,
   status: state.status,
   characterType: state.characterType
  });
  
  const  mapDispatchToProps = {
    add_name : addName,
    add_species: addSpecies,
    delete_species: deleteSpecies,
    add_gender: addGender,
    delete_gender: deleteGender,
    add_status: addStatus,
    delete_status: deleteStatus,
    get_characters: fetchCharacters,
    add_orderBy: addOrderBy,
    add_characterType: addCharacterType,
    reset_currentPage: resetCurrentPage
};
   
  
  
  const  AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout);
  
export default AppContainer;
