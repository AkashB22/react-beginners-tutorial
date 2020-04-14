const redux = require('redux');
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
};

function buyIceCream(){
    return {
        type : BUY_ICECREAM,
        info: 'Second action creator'
    }
}

const initialCakeState = {
    numOfCakes : 10
};

const initialIcecreamState = {
    numOfIcecreams : 10
}

// const reducer = (state=initialState, action)=>{
//     switch(action.type){
//         case "BUY_CAKE" : return {
//             ...state,
//             numOfCakes : state.numOfCakes -1
//         }
//         case "BUY_ICECREAM" : return {
//             ...state,
//             numOfIcecreams : state.numOfIcecreams -1
//         }
//         default : return state
//     }
// }

const cakeReducer = (state=initialCakeState, action)=>{
    switch(action.type){
        case "BUY_CAKE" : return {
            ...state,
            numOfCakes : state.numOfCakes -1
        }
        default : return state
    }
}

const icecreamReducer = (state=initialIcecreamState, action)=>{
    switch(action.type){
        case "BUY_ICECREAM" : return {
            ...state,
            numOfIcecreams : state.numOfIcecreams -1
        }
        default : return state
    }
}

// const store = createStore(reducer);

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(()=>{
    // console.log('Updated state: ', store.getState())
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();