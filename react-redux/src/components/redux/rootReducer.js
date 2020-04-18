import {combineReducers} from 'redux';
import cakeReducer from './cakes/cakeReducer';
import icecreamReducer from './icecream/icecreamReducer';

const rootReducer = combineReducers({
    cakes: cakeReducer,
    icecreams : icecreamReducer
});

export default rootReducer;