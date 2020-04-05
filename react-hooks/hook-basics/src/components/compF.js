import React, { useContext } from 'react';
import {CountContext} from './../App';

function CompF(){
    let countContext = useContext(CountContext);
    
    return ( 
        <div>Comp F: {countContext.countState}
            <button onClick={()=>countContext.countDispatcher('increment')}>increment</button>
            <button onClick={()=>countContext.countDispatcher('decrement')}>decrement</button>
            <button onClick={()=>countContext.countDispatcher('reset')}>reset</button>
        </div>
     );
}
 
export default CompF;