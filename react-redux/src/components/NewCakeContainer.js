import React, {useState} from 'react';
import {connect} from 'react-redux';
import {buyCake} from './redux';

function NewCakeContainer(props) {
    let [number, setNumber] = useState(1);

    return (
        <div>
            <h2>Number of Cakes : {props.numOfCakes}</h2>
            <input type="text" onChange={(e)=> setNumber(e.target.value)} />
            <button onClick={()=>{props.buyCake(number)}}>Buy {number} cakes</button>
        </div> 
    )
}

const mapStateToProps = (state)=>{
    return {
        numOfCakes : state.cakes.numOfCakes
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyCake : (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
