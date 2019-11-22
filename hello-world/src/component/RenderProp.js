import React, { Component } from 'react'

class RenderProp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
        this.incrementHandler = this.incrementHandler.bind(this);
    }

    incrementHandler(){
        this.setState(prevState=>({count : prevState.count +1})
        )
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementHandler)}
            </div>
        )
    }
}

export default RenderProp
