import React, { Component } from 'react'

export class ChildNonPureComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'notChanged'
        }
    }
    
    shouldComponentUpdate(nextProps){
        if(nextProps.name === this.props.name){
            return false;
        }
        return true;
    }
    render() {
        console.log('Child Component');
        return (
            <div>
                Child Component
            </div>
        )
    }
}

export default ChildNonPureComp
