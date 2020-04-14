import React, {useReducer} from 'react'

function ComplexStateActionInUseReducer() {
    let initialValue = {
        firstCounter : 0, 
        secondCounter : 10
    };
    let reducer = (state, action)=>{
        switch(action.type){
            case 'increment' : 
                return {...state, firstCounter : state.firstCounter + action.value };
            case 'decrement' : 
                return {...state, firstCounter : state.firstCounter - action.value };
            case 'increment 5' : 
                return {...state, firstCounter : state.firstCounter + action.value };
            case 'decrement 5' : 
                return {...state, firstCounter : state.firstCounter - action.value };
            case 'increment count2 5' : 
                return {...state, secondCounter : state.secondCounter + action.value };
            case 'decrement count2 5' : 
                return {...state, secondCounter : state.secondCounter - action.value };
            case 'reset' : 
                return initialValue
            default :
                return state
        }
    }
    const [count, dispatcher] = useReducer(reducer, initialValue);
    return (
        <div>
            <div>count 1 --- {count.firstCounter}</div>
            <div>count 2 --- {count.secondCounter}</div>
            <button onClick={()=>dispatcher({ type : 'increment', value : 1})}>increment</button>
            <button onClick={()=>dispatcher({ type : 'decrement', value : 1})}>decrement</button>
            <button onClick={()=>dispatcher({ type : 'increment 5', value : 5})}>increment 5</button>
            <button onClick={()=>dispatcher({ type : 'decrement 5', value : 5})}>decrement 5</button>
            <button onClick={()=>dispatcher({ type : 'increment count2 5', value : 5})}>increment count2 5</button>
            <button onClick={()=>dispatcher({ type : 'decrement count2 5', value : 5})}>decrement count2 5</button>
            <button onClick={()=>dispatcher({type : 'reset'})}>reset</button>
        </div>
    )
}

export default ComplexStateActionInUseReducer;
