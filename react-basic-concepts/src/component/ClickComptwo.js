import React, { Component } from 'react'

class ClickComptwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
        this.incrementHandler = this.incrementHandler.bind(this);
    }
    incrementHandler(){
        this.setState((prevState) =>{ return {count : prevState.count + 1} });
    }
    render() {
        let {count, incrementHandler} = this.props;
        return (
            <div>
                <button onClick={incrementHandler}>{count} Clicks done</button>
            </div>
        )
    }
}

export default ClickComptwo;
