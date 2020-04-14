import React, {useReducer, useRef} from 'react';
import './App.css';
import FormComp from './component/FormComp';
// import CounterOne from './component/CounterOne';
// import CounterTwo from './component/CounterTwo';
// import DocumentTitleUpdateOne from './component/DocumentTitleUpdateOne';
// import DocumentTitleUpdateTwo from './component/DocumentTitleUpdateTwo';
// import UseDebugValueHook from './component/UseDebugValueHook';
// import UseImperativeHandleHook from './component/UseImperativeHandleHook';
// import ClassCompToClearTimer from './component/ClassCompToClearTimer';
// import UseRefAsClassProperty from './component/UseRefAsClassProperty';
// import UseRefForDomNodes from './components/UseRefForDomNodes';
// import UseMemoHook from './components/useMemoHook';

// import MainComponent from './components/useCallback/MainComponent';
// import FetchingDataByUseReducer from './components/FetchingDataByUseReducer'
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
  // let inputRef = useRef();

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
      {/* <FetchingDataByUseReducer /> */}
      {/* <MainComponent /> */}
      {/* <UseMemoHook /> */}
      {/* <UseRefForDomNodes /> */}
      {/* <ClassCompToClearTimer />
      <UseRefAsClassProperty /> */}
      {/* <UseImperativeHandleHook ref={inputRef}/>
      <button onClick={()=>inputRef.current.focusCustom()}>focus</button> */}
      {/* <UseDebugValueHook /> */}
      {/* <DocumentTitleUpdateOne />
      <DocumentTitleUpdateTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      <FormComp />
    </div>
  );
}

export default App;
