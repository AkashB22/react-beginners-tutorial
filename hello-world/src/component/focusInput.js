import React, { Component } from 'react'
import Input from './input'

class focusInput extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef();
    }
    
    clickHandler = ()=>{
        this.componentRef.current.focusInput();
    }
    render() {
        console.log("In focusInput parent")
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>focus input</button>
            </div>
        )
    }
}

export default focusInput
