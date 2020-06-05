import React, { Component } from "react";
import moment from 'moment';
import Character from '../../components/Character/Character';
import style from './CharacterDetails.css';

export default class CharacterDetails extends Component {
    constructor(props) {
        super(props);
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
                    {
                        (this.props.characterData && this.props.characterData.length > 0) ?
                            (this.props.characterData.map((eachChar, index) => {
                                return (
                                    <div key={index} className="col-md-4 d-flex">
                                        <Character data={eachChar} createdDate={this.calculateCreatedDate(eachChar.created)} ></Character>
                                    </div>
                                )
                            })) : (
                                <Character noResult={true}></Character>
                            )
                    }
                </div>
            </div>
        )
    }
}

