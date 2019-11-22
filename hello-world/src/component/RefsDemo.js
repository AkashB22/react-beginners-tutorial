import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
        this.newRef = React.createRef();
        this.inputCbRef = null;
        this.inputCb = (element)=>{
            this.inputCbRef = element;
        }
    }
    
    componentDidMount(){
        this.inputRef.current.focus();  
        console.log(this.inputRef);
        this.inputCbRef.focus();
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value);
        this.newRef.current.style.width = 100+'px';
    }
    render() {
        return (
            <div>
                {/* <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.newRef} /> */}
                <input type='text' ref={this.inputCb} />
                <button onClick={this.clickHandler}>button</button>
            </div>
        )
    }
}

export default RefsDemo
