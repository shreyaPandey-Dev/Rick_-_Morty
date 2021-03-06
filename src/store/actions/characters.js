import {
    ADD_CHARACTERS,
    ADD_FAILURE,
} from '../types/types';
import {enableLoader,disableLoader} from './loader';
import {
    gql
} from 'apollo-boost';
import client from '../../connect'
import store from '../store'

import { ADD_TOTAL_PAGE } from "../types/types";

const queryBuilder = (page, name, species, gender, status) => {
    return (
        gql
            `{
                characters (page: ${page.currentPage},filter:
                     {  name: "${name.name}", 
                         gender: "${gender.gender}", 
                         species:  "${species.species}",
                         status:  "${status.status}" }){
                            info {
                                count
                                pages
                                next
                                prev
                              }
                    results {
                        name,
                        id,
                        status,
                        species,
                        type,
                        gender,
                        origin {
                            name
                        },
                        location {
                            name
                        },
                        image,
                        created
                    }
                    }
                }`
    )
}

export const fetchCharacters = () => {
    var data = store.getState();
    // add loader
  
    return dispatch => {
        dispatch(enableLoader());
        client.query({
            query: queryBuilder(data.currentPage, data.name, data.species, data.gender, data.status)
        }).then(
            res => {
                var orderRes = data.orderBy.orderBy === 'ascending' ? 1 : -1;
                var sortedRes = res.data.characters.results.sort((a, b) => orderRes * (new Date(a.created) - new Date(b.created)));

                dispatch(addCharacters(sortedRes));
                dispatch(addTotalPage(res.data.characters.info.count));
                // remove loader
                dispatch(disableLoader());
            }
        ).catch(() => {
            dispatch(disableLoader());
            dispatch(addCharacters([]));
        })
    };
}

export const addCharacters = (payload) => {
    return {
        type: ADD_CHARACTERS,
        payload: payload
    };
}

export const addFailure = error => ({
    type: ADD_FAILURE,
    payload: {
        error
    }
});

export const addTotalPage = (payload) => {
    return {
        type: ADD_TOTAL_PAGE,
        payload: payload
    };

}

export default fetchCharacters;