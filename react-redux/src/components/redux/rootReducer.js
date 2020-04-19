import {combineReducers} from 'redux';
import cakeReducer from './cakes/cakeReducer';
import icecreamReducer from './icecream/icecreamReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
    cakes: cakeReducer,
    icecreams : icecreamReducer,
    users: usersReducer
});

export default rootReducer;