import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from './redux/cakes/cakesAction';

function CakeComponent(props) {
    return (
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2>
            <button onClick={()=> props.dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

let mapStateToProp = (state)=>{
    return {
        state: state
    }
}

let mapDispatchToProp = (dispatch)=>{
    return store(dispatch)
}
export default connect(mapStateToProp, mapDispatchToProp)(CakeComponent);
