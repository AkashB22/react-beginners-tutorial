import React from 'react'

function Title() {
    console.log('Rendering title');
    return (
        <div>
            <h1>UseCallback Hooks</h1>
        </div>
    )
}

export default React.memo(Title)
