import {BUY_CAKE} from './cakesTypes';

let reducer = (state=BUY_CAKE, action)=>{
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default : return state;
    }
}

export default reducer;