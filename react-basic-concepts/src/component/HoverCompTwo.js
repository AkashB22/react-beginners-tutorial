import React, { Component } from 'react'

class HoverCompTwo extends Component {
    
    render() {
        let {count, incrementHandler} = this.props;
        return (
            <div>
                <h1 onMouseOver={incrementHandler}>{count} hovers done</h1>
            </div>
        )
    }
}

export default HoverCompTwo
