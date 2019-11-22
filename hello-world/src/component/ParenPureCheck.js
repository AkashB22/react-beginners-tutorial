import React, { Component } from 'react'
import ChildNonPureComp from './ChildNonPureComp';
import PureChildComponent from './PureChildComponent';
import MemoComp from './MemoComp';

export class ParenPureCheck extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user : 'john'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                user : 'jane'
            })
        }, 2000)
    }

    render() {
        console.log('Parent Comp');
            
        return (
            <div>
                <h1>Parent Comp</h1>
                <MemoComp name={this.state.user} />
                {/* <ChildNonPureComp name={this.state.user} />
                <PureChildComponent name={this.state.user}/> */}
            </div>
        )
    }
}

export default ParenPureCheck
