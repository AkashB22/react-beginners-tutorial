import React, { Component } from 'react'
import FRInput from './FRInput';

class FRInputParent extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
        this.onCLickHandler = this.onCLickHandler.bind(this);
    }
    
    onCLickHandler(){
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick = {this.onCLickHandler}>Click to Focus </button>
            </div>
        )
    }
}

export default FRInputParent
