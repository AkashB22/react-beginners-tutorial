import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, POST_USERS_REQUEST, POST_USERS_SUCCESS, POST_USERS_ERROR} from './usersTypes';

const initialState = {
    loading : false,
    users: [],
    error: ''
}
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading : true
        };
        case FETCH_USERS_SUCCESS: return {
            loading: false,
            users: action.payload,
            error: ''
        };
        case FETCH_USERS_ERROR: return {
            loading: false,
            users: [],
            error: action.payload
        };
        case POST_USERS_REQUEST: return {
            ...state,
            loading : true
        };
        case POST_USERS_SUCCESS: return {
            loading: false,
            users: [...state.users, action.payload],
            error: ''
        };
        case POST_USERS_ERROR: return {
            loading: false,
            users: [],
            error: action.payload
        };
        default: return state
    }
}

export default reducer;