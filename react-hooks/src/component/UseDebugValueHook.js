import React, {useState, useDebugValue} from 'react'

function UseDebugValueHook() {
    let [name, setName] = useState('john');

    useDebugValue(name ? 'user present' : 'user absent');
    return (
        <div>
            <div>{name ? 'user present' : 'user absent'}</div>
        </div>
    )
}

export default UseDebugValueHook
