import React, { Component } from "react";
import moment from 'moment';
import Character from '../../components/Character/Character'


export default class CharacterDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    // Component will Recieve main prop name 
    componentWillReceiveProps({ characterData }) {
        this.setState({ data: characterData });
    }

    calculateCreatedDate = (createdDate) => {
        var today = moment(new Date()).format();
        var lastCreated = moment(createdDate).subtract(today, 'YYYYMMDD').fromNow();
        return lastCreated;
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {  console.log(" this.state.data-----------------------------------------------------------------------",   this.state.data)}
                    {
                        this.state.data.length>0 ?
                            (this.state.data.map((eachChar, index) => {
                                return (<div key={index} className="col-md-4 d-flex">
                                    <Character data={eachChar} createdDate={this.calculateCreatedDate(eachChar.created)} ></Character>
                                </div>)
                            })) : (
                                <Character  noResult={true}></Character>
                            )
                    }
                </div>
            </div>
        )
    }
}

