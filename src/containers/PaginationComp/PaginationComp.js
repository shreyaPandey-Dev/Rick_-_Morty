import React, { Component } from 'react';
import style from './PaginationComp.css'
import Pagination from "react-js-pagination";
import fetchCharacters from '../../store/actions/characters';
import { connect } from "react-redux";
import { addCurrentPage } from '../../store/actions/currentPage';
import addTotalPage from '../../store/actions/totalPage';

export class PaginationComp extends Component {

    handlePageChange(pageNumber) {
        this.props.add_currentPage(pageNumber);
        this.props.get_characters();
    }


    render() {
        return (
            <div className={style.navpage}>
                <Pagination
                    activeLinkClass={`${style.activeitem}`}
                    activeClass={`${style.activeitem}`}
                    disabledClass={`${style.pageItem} `}
                    itemClass={`${style.pageItem} page-item`}
                    linkClass={`${style.pageItem} page-link`}
                    activePage={this.props.currentPage.currentPage}
                    itemsCountPerPage={20}
                    totalItemsCount={this.props.totalPage.totalPage || 1}
                    pageRangeDisplayed={3}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        )
        // page-item,page-link
    }
}

const mapStateToProps = state => ({
    currentPage: state.currentPage,
    totalPage: state.totalPage
});

const mapDispatchToProps = {
    get_characters: fetchCharacters,
    add_totalpage: addTotalPage,
    add_currentPage: addCurrentPage
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaginationComp);

export default AppContainer;