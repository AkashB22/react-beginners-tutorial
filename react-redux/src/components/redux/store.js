import {createStore} from 'redux';
import reducer from './cakes/cakeReducer';

let store = createStore(reducer);

export default store;