import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    
    static getDerivedStateFromError(){
        return {
            hasError : true
        }
    }

    render() {
        if(this.state.hasError){
            return (
                <div>
                    <h1>Something Went wrong </h1>
                </div>
            )
        } else{
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary
