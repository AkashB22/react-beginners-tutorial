import React from 'react';
import {connect} from 'react-redux';
import {buyCake, buyIcecream} from './redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Number of {props.cake? 'cakes' : 'icecreams'}: {props.item} </h2>
            <button onClick={props.buyItem}>Buy {props.cake? 'cake' : 'icecream'}</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps)=>{
    const itemState = ownProps.cake ? state.cakes.numOfCakes : state.icecreams.numOfIcecream;

    return {
        item : itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    const action = ownProps.cake ? buyCake : buyIcecream;
    
    return {
        buyItem : ()=> dispatch(action())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
