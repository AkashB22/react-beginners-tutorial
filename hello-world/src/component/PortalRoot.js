import React from 'react'
import ReactDOM from 'react-dom'

function PortalRoot() {
    return ReactDOM.createPortal((
        <React.Fragment>
            <h1>PortalRoot</h1>
        </React.Fragment>
    ), document.getElementById('portal-root'));
}

export default PortalRoot
