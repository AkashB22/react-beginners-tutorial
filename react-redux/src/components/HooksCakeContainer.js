import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

import {buyCake} from './redux/index';

function HooksCakeContainer() {
    const selector = (state)=> {
        return state.numOfCakes;
    }
    const dispatch = useDispatch();
    const numOfCakes = useSelector(selector);

    return (
        <div>
            <h2>Number of cakes : {numOfCakes}</h2>   
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>     
        </div>
    )
}

export default HooksCakeContainer
