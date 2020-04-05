import React, {useReducer} from 'react';

function MultipleUseReducers(){
     let initialValue = 0;
     function reducer(state, action){
         switch(action){
             case 'increment': {
                return state+1;
             }
             case 'decrement': {
                return state-1;
             }
             case 'reset': 
             default:{
                return initialValue;
             }
         }
     }
    let [counter1, dispatcher1] = useReducer(reducer, initialValue);
    let [counter2, dispatcher2] = useReducer(reducer, initialValue);

    return (
        <div>
            <div>
                counter 1: {counter1}
                <button onClick={()=>dispatcher1('increment')}>increment</button>
                <button onClick={()=>dispatcher1('decrement')}>decrement</button>
                <button onClick={()=>dispatcher1('reset')}>reset</button>
            </div>
            <div>
                counter 2: {counter2}         
                <button onClick={()=>dispatcher2('increment')}>increment</button>
                <button onClick={()=>dispatcher2('decrement')}>decrement</button>
                <button onClick={()=>dispatcher2('reset')}>reset</button>
            </div>
        </div>
    )
}

export default MultipleUseReducers;