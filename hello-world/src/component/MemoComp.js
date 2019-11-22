import React from 'react'

function MemoComp(props) {
    console.log('MemoComponent');
    return (
        <div>
            MemoComp {props.name}
        </div>
    )
}

export default React.memo(MemoComp)
