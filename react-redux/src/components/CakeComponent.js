import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from './redux/cakes/cakesAction';

function CakeComponent(props) {
    return (
        <div>
            <h2>Number of Cakes available: {props.numOfCakes}</h2>

            <button onClick={props.buyCake}>Buy Cake Now!</button>
        </div>
    )
}

let mapStateToProps = (state)=>{
    return {
        numOfCakes: state.numOfCakes
    }
}

let mapDispatchToProps = dispatch=>{
    return {
        buyCake: ()=> dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
