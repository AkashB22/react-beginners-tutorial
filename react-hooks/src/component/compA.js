import React, {useContext} from 'react';
import {CountContext} from '../App';

function CompA(){
    const countContext = useContext(CountContext);

    return ( 
        <div>
            Comp A: {countContext.countState}
            <button onClick={()=>countContext.countDispatcher('increment')}>increment</button>
            <button onClick={()=>countContext.countDispatcher('decrement')}>decrement</button>
            <button onClick={()=>countContext.countDispatcher('reset')}>reset</button>  
        </div>
     );
}
 
export default CompA;