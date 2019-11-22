import React from 'react'

function childComponent(props) {
    return (
        <div>
            <button onClick={() =>props.greetHandler('child')}>Hello</button>
        </div>
    )
}

export default childComponent
