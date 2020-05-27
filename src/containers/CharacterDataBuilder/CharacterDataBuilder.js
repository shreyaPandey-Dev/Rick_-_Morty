import React, { Component } from "react";
// import axios from '../../axios-data'
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import fetchCharacters from '../../store/actions/characters';
import { connect } from 'react-redux';


export  class CharacterDataBuilder extends Component {


    constructor(props) {
        super(props);
        this.state = { }
    }
    componentDidMount() {
      this.props.add_service('','','');
    }

    render() {
        return (
            <h1>
                <CharacterDetails characterData={this.props.characters}></CharacterDetails>
            </h1>
        );
    }
}

const mapStateToProps = state => ({
    characters : state.characters
  });
  
  const mapDispatchToProps = {
    add_service : fetchCharacters
  };
  
  
  const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharacterDataBuilder);
  
  export default AppContainer;
