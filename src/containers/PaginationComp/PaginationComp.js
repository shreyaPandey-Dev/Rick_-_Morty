import React, { Component } from 'react';
// import style from './Pagination.css'
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
import store from '../../store/store'
import fetchCharacters from '../../store/actions/characters';
import { connect } from "react-redux";
import {addCurrentPage} from '../../store/actions/currentPage';
import addTotalPage from '../../store/actions/totalPage';

export class PaginationComp extends Component {
    constructor(props) {
        super(props);

    }


    handlePageChange(pageNumber) {
        
        console.log(`active page is ${pageNumber}`, "TOTAL PAGE",this.props.totalPage);
        this.props.add_currentPage(pageNumber);
        this.props.get_characters();
        // this.setState({activePage: pageNumber});
    }


    render() {
        return (
            <div>
                <Pagination
                    activePage={this.props.currentPage}
                    itemsCountPerPage={20}
                    totalItemsCount={this.props.totalPage}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        )
    }
}



const mapStateToProps = state => ({
        currentPage: state.currentPage,
        totalPage:  state.totalPage
});

const mapDispatchToProps = {
    get_characters: fetchCharacters,
    add_totalpage:addTotalPage,
    add_currentPage: addCurrentPage
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaginationComp);

export default AppContainer;