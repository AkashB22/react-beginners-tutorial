import React, { Component } from 'react'

class ClassCompToClearTimer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             timer : 0
        }
    }
    
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState((prevState)=>{
                return prevState.timer = prevState.timer + 1;
            })
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                timer : {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>stop timer</button>
            </div>
        )
    }
}

export default ClassCompToClearTimer
