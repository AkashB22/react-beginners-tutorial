import React, { Component } from 'react'
import counterAdder from './counterAdder'
export class hoverComp extends Component {
    render() {
        let {increment, counter} = this.props;
        return (
            <div>
                <h1 onMouseOver={increment}>Hover done : {counter}</h1>
            </div>
        )
    }
}

export default counterAdder(hoverComp, 10);
