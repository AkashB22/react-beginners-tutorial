import React, { Component } from 'react'

export class classCompForTitleUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0,
             name : '',
        }
    }

    componentDidMount(){
        document.title = `clicks done : ${this.state.count}`
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log('updating title')
            document.title = `clicks done : ${this.state.count}`
        }
    }

    increment = ()=>{
        this.setState(prevValue => ({count : prevValue.count + 1}))
    }

    render() {
        let {count} = this.state;
        return (
            <div>
                <input type='text' value={this.state.name} onChange={(event)=>{
                    this.setState({
                        name : event.target.value
                    })
                }} />
                <button onClick={this.increment}>click done: {count}</button>
            </div>
        )
    }
}

export default classCompForTitleUpdate
