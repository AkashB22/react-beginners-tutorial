import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 1
        }
    }
    
    increment(){
        this.setState({
            count: this.state.count + 1
        }, () => console.log('callback value: ' + this.state.count));

        console.log('Without callback value: ' + this.state.count)
    }

    incrementByPrev(){
        this.setState((prevState, props)=>{
          return {count : prevState.count + 1}
        }, ()=> console.log('callback value: ' + this.state.count));
    }

    incrementByFive(){
        this.incrementByPrev();
        this.incrementByPrev();
        this.incrementByPrev();
        this.incrementByPrev();
        this.incrementByPrev();
    }

    render() {
        return (
            <div>
               <div>Count : {this.state.count} </div>
               <button onClick= {()=>this.incrementByFive()}>Add 5</button>
            </div>
        )
    }
}

export default counter;
