import React, {useReducer} from 'react';
import './App.css';
import FetchingDataByUseReducer from './components/FetchingDataByUseReducer'
// import FetchingData from './components/FetchingData';
// import HookCounter from './components/HookCounter';
// import HookCounterWithPrevValue from './components/HookCounterWithPrevValue';
// import HookCounterWithObject from './components/HookCounterWithObject';
// import HookCounterWithArray from './components/HookCounterWithArray';
// import ClassCompForTitleUpdate from './components/classCompForTitleUpdate';
// import UseEffectHookOne from './components/useEffectHookOne';
// import EffectRunOnce from './components/EffectRunOnce';
// import CleanupOnHooks from './components/CleanupOnHooks';
// import InCorrectDependency from './components/InCorrectDependency';
// import UseEffectToFetchData from './components/UseEffectToFetchData';
// import UseEffectToFetchSingleData from './components/UseEffectToFetchSingleData';
// import UseEffectToFetchSingleDataWithButton from './components/UseEffectToFetchSingleDataWithButton';
// import ComponentD from './components/ComponentD';
// import CounterUsingReducer from './components/CounterUsingReducer';
// import ComplexStateActionInUseReducer from './components/ComplexStateActionInUseReducer';
// import MultipleUseReducers from './components/MultipleUseReducers';
// import CompA from './components/compA';
// import CompB from './components/compB';
// import CompC from './components/compC';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
// export const CountContext = React.createContext();

// let initialValue = 0;
// let reducer = (state, action)=>{
//   switch(action){
//     case 'increment' : return state + 1;
//     case 'decrement' : return state - 1;
//     case 'reset' :
//     default : return initialValue;
//   }
// }
function App() {
  // let [count, dispatcher] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      {/* Counter 1 : {count} */}
      {/* <HookCounter /> */}
      {/* <HookCounterWithPrevValue /> */}
      {/* <HookCounterWithObject /> */}
      {/* <HookCounterWithArray /> */}
      {/* <ClassCompForTitleUpdate  />
      < UseEffectHookOne /> */}
      {/* <EffectRunOnce /> */}
      {/* <CleanupOnHooks /> */}
      {/* <InCorrectDependency /> */}
      {/* <UseEffectToFetchData /> */}
      {/* <UseEffectToFetchSingleData /> */}
      {/* <UseEffectToFetchSingleDataWithButton /> */}
      {/* <UserContext.Provider value={'Akash'}>
        <ChannelContext.Provider value={'CodeEvolution'}>
          <ComponentD />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterUsingReducer /> */}
      {/* <ComplexStateActionInUseReducer /> */}
      {/* <MultipleUseReducers />? */}
      {/* <CountContext.Provider value={{countState: count, countDispatcher: dispatcher}}>
        <CompA />
        <CompB />
        <CompC />
      </CountContext.Provider> */}
      {/* <FetchingData /> */}
      <FetchingDataByUseReducer />
    </div>
  );
}

export default App;
