import {API_BASE_FE} from "../config/helper";

import axios from "axios";

import {
    GET_SEARCH_LOADING,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_ERROR
} from "./actionTypes";

export function getSearchData(searchValue) {
    return (dispatch) => {
        dispatch({
            type: GET_SEARCH_LOADING
        });
        axios
            .get(`${API_BASE_FE}/coin?search=${searchValue}`)
            .then((response) => {
                return dispatch({
                    type: GET_SEARCH_SUCCESS,
                    data: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_SEARCH_ERROR,
                    error: error.response.status
                });
                console.error(error.response.status, GET_SEARCH_ERROR);
            });
    };
}
