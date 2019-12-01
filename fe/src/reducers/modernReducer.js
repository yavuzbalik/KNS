import {combineReducers} from "redux";
import initialState from "./initialState";
import {
    GET_SEARCH_LOADING,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_ERROR
} from "./../actions/actionTypes";

export function searchdata(state = initialState.searchdata, action) {
    switch (action.type) {
        case GET_SEARCH_LOADING:
            return {loading: true};
        case GET_SEARCH_SUCCESS:
            return {...action.data};
        case GET_SEARCH_ERROR:
            return Object.assign({error: action.error});
        default:
            return state;
    }
}

export default combineReducers({
    searchdata
});
