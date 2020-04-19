import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, POST_USERS_REQUEST, POST_USERS_SUCCESS, POST_USERS_ERROR} from './usersTypes';
import axios from 'axios';

const fetchUsersRequest = ()=>{
    return {
        type : FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users)=>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload : users
    }
}

const fetchUsersError = (error)=>{
    return {
        type : FETCH_USERS_ERROR,
        payload : error
    }
}

const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                dispatch(fetchUsersSuccess(response.data));
            })
            .catch(error=>{
                dispatch(fetchUsersError(error.message));
            })
    }
}

const postUserRequest = ()=>{
    return {
        type : POST_USERS_REQUEST
    }
}

const postUserSuccess = (user)=>{
    return {
        type: POST_USERS_SUCCESS,
        payload : user
    }
}

const postUserError = (error)=>{
    return {
        type : POST_USERS_ERROR,
        payload : error
    }
}

const postUser = (userData)=>{
    let user = userData;
    return (dispatch)=>{
        dispatch(postUserRequest);
        console.log(user);
        axios.post('https://jsonplaceholder.typicode.com/users', user)
            .then(response=>{
                let user = response.data;
                let userRes = {
                    name: user.title,
                    id: user.id
                }
                dispatch(postUserSuccess(userRes));
            })
            .catch(error=>{
                dispatch(postUserError(error.message));
            })
    }
}
export {fetchUsersRequest, fetchUsersSuccess, fetchUsersError, fetchUsers, postUserRequest, postUserSuccess, postUserError, postUser};