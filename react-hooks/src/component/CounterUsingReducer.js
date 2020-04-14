import React, {useReducer} from 'react'

function CounterUsingReducer() {
    let initialValue = 0;
    let reducer = function(state, action){
        switch(action){
            case 'increment' : 
                return state + 1;
            case 'decrement' : 
                return state - 1;
            case 'reset' : 
                return initialValue
            default :
                return state
        }
    }
    const [count, dispatcher] = useReducer(reducer, initialValue);
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>dispatcher('increment')}>increment</button>
            <button onClick={()=>dispatcher('decrement')}>decrement</button>
            <button onClick={()=>dispatcher('reset')}>reset</button>
        </div>
    )
}

export default CounterUsingReducer
