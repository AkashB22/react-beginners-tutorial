let redux = require('redux');
let reduxThunkMiddleware = require('redux-thunk').default;
let applyMiddleware = redux.applyMiddleware;
let axios = require('axios');

let createStore = redux.createStore;

let FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
let FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
let FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

let fetchUsersRequest = ()=>{
    return {
        type : FETCH_USERS_REQUEST
    }
}

let fetchUsersSuccess = (users)=>{
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

let fetchUsersError = (error)=>{
    return {
        type : FETCH_USERS_ERROR,
        payload : error
    }
}

let initialState = {
    loading : false,
    users : [] ,
    error : ''
}

let reducer = (state= initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return ({
            loading: false,
            users: action.payload,
            error: ''
        })
        case FETCH_USERS_ERROR: return {
            loading : false,
            users: [],
            error: action.payload
        }
        default: return state
    }
}

let fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                let users = response.data.map(user => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(err =>{
                dispatch(fetchUsersError(err.message))
            })
    }
}

let store = createStore(reducer, applyMiddleware(reduxThunkMiddleware));

let unsubscribe = store.subscribe(()=>{
    console.log('On fetching ', store.getState());
});

store.dispatch(fetchUsers());

