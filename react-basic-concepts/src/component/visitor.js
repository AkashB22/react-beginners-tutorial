import React, {Component} from 'react';

class Visitor extends Component{
    constructor(){
        super();
        this.state ={
            message : 'Welcome Dood!!'
        }
    }

    changeMessage(){
        this.setState({
            message : 'Thank you!! See you next time!'
        });
    }

    render(){
        return (<div>
            <h1>{this.state.message}</h1>
            <button onClick= {() => this.changeMessage()}>Bye</button>
        </div>)
    }
}

export default Visitor;