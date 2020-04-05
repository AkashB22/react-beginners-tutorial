import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

function FetchingDataByUseReducer() {
    let initialState = {
        loading : true,
        data : {},
        error : ''
    };
    let reducer = (state, action)=>{
        switch(action.type){
            case 'FETCH_SUCCESS': 
                return {
                    loading: false,
                    data: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR': 
                return {
                    loading: false,
                    data: {},
                    error: 'Something went wrong'
                }
            default: return state
        }
    }

    let [state, dispatcher] = useReducer(reducer, initialState);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response)=>{
                dispatcher({type: 'FETCH_SUCCESS', payload: response.data});
            })
            .catch((error)=>{
                dispatcher({type: 'FETCH_ERROR'})
            })
    }, []);

    return (
        <div>
            {state.loading ? 'Loading ....' : state.data.title}
            {state.error ? state.error : null}
        </div>
    )
}
export default FetchingDataByUseReducer;
