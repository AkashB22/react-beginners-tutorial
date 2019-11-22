import React, { Component } from 'react'
import ChildComponent from './childComponent'

class parentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             greeting : 'hello',
        }
        this.greeting = this.greeting.bind(this);
    }
    
    greeting(child){
        alert(`${this.state.greeting} to parent from ${child}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greeting}/>
            </div>
        )
    }
}

export default parentComponent
