import React from 'react'

function Button({text, handleClick}) {
    console.log('Rendering Button for ' + text);
    return (
        <div>
            <button onClick={handleClick}>increment</button>
        </div>
    )
}

export default React.memo(Button)
