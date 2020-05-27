import {
    ADD_CHARACTERS,
    ADD_FAILURE
} from '../types/types';
import {
    gql
} from 'apollo-boost';
import client from '../../connect'
import store from '../store'

import { ADD_TOTAL_PAGE} from "../types/types";



const queryBuilder = (page,name, species, gender, status) => {
    console.log("QUERY BUILDER====", status)
    return (
        gql
            `{
                characters (page: ${page},filter:
                     {  name: "${name}", 
                         gender: "${gender}", 
                         species:  "${species}",
                         status:  "${status}" }){
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

const fetchCharacters = () => {
    // console.clear();
    var data = store.getState();
    console.log("STATE IN FETCHCHARS==============", data)
    return dispatch => {
        client.query({
            query: queryBuilder(data.currentPage,data.name, data.species, data.gender, data.status)
        }).then(
            res => {
                console.log("res.data.characters.results", res)

                var  orderRes = data.orderBy === 'ascending' ? 1 : -1;
               var  sortedRes =  res.data.characters.results.sort((a, b) => orderRes * (new Date(a.created) - new Date(b.created)));
                
                dispatch(addCharacters(sortedRes));
                 dispatch(addTotalPage(res.data.characters.info.count));
            }
        ).catch(() => {
            console.log("error in handler caught");
            dispatch(addCharacters([]));
        })
    };
}
// dispatch(addTodoSuccess(res.data)

const addCharacters = (payload) => {
    return {
        type: ADD_CHARACTERS,
        payload: payload
    };

}

const addFailure = error => ({
    type: ADD_FAILURE,
    payload: {
        error
    }
});





export   const addTotalPage = (payload) => {
    console.log("ACTION PAY ADD NAME========================", payload)

    return {
        type: ADD_TOTAL_PAGE,
        payload: payload
    };

}

export default fetchCharacters;