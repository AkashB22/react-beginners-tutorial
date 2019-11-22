import React, { Component } from 'react'
import counterAdder from './counterAdder'

export class clickComp extends Component {
    
    render() {
        let {increment, counter} = this.props;
        return (
            <div>
                <button onClick = {increment}>{this.props.name}Clicks done : {counter}</button>
            </div>
        )
    }
}

export default counterAdder(clickComp, 5);
