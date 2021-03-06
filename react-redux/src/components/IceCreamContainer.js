import React from 'react';
import {connect} from 'react-redux'
import {buyIcecream} from './redux/index';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Icecreams: {props.numOfIcecream}</h2>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        numOfIcecream: state.icecreams.numOfIcecream
    }
}

const mapActionToProps = (dispatch)=>{
    return {
        buyIcecream : () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapActionToProps)(IceCreamContainer);
