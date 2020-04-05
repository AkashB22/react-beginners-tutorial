import React, { useContext } from 'react';
import {CountContext} from './../App';

function CompD(){
    let countContext = useContext(CountContext);

    return ( 
        <div>
            Comp D: {countContext.countState}
            <button onClick={()=>countContext.countDispatcher('increment')}>increment</button>
            <button onClick={()=>countContext.countDispatcher('decrement')}>decrement</button>
            <button onClick={()=>countContext.countDispatcher('reset')}>reset</button>
        </div>
     );
}
 
export default CompD;