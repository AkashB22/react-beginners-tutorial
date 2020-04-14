import React, {useState, useEffect} from 'react'
import EffectRunOnce from './EffectRunOnce'
import InCorrectDependency from './InCorrectDependency';

function CleanupOnHooks() {
    let [display, setDisplay] = useState(true);
    
    return (
        <div>
            <button onClick={()=> {console.log('onToggle' , display); return setDisplay(!display)}}> Toggle EffectRunOnce </button>
            {display ? <EffectRunOnce /> : null}
        </div>
    )
}

export default CleanupOnHooks
