import React from 'react'

function toCheckError(props) {
    if(props.error  === 'yes'){
        throw new Error('We have Error throw here');
    }
    return (
        <div>
            <h1>Cool ... and the Error is null</h1>
        </div>
    )
}

export default toCheckError
