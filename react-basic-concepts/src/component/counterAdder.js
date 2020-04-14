import React from 'react'

const counterAdder = (WrapperComponent, incrementBy)=>{
        class counterAdder extends WrapperComponent{
            constructor(props) {
                super(props)
            
                this.state = {
                     counter: 0 
                }
                this.IncrementHandler = this.IncrementHandler.bind(this);
            }

            IncrementHandler(){
                this.setState(prevState =>{
                    return {counter:prevState.counter+incrementBy};
                })
            }

            render(){
                console.log(this.props.name);
                return(<div>
                    <WrapperComponent counter={this.state.counter} increment={this.IncrementHandler} {...this.props}/>
                </div>);
            }
        }
        return counterAdder;
    }

    export default counterAdder;
