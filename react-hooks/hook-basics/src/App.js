import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterWithPrevValue from './components/HookCounterWithPrevValue';
import HookCounterWithObject from './components/HookCounterWithObject';
import HookCounterWithArray from './components/HookCounterWithArray';
import ClassCompForTitleUpdate from './components/classCompForTitleUpdate';
import UseEffectHookOne from './components/useEffectHookOne';
import EffectRunOnce from './components/EffectRunOnce';
import CleanupOnHooks from './components/CleanupOnHooks';
import InCorrectDependency from './components/InCorrectDependency';
import UseEffectToFetchData from './components/UseEffectToFetchData';
import UseEffectToFetchSingleData from './components/UseEffectToFetchSingleData';
import UseEffectToFetchSingleDataWithButton from './components/UseEffectToFetchSingleDataWithButton';
import ComponentD from './components/ComponentD';
import CounterUsingReducer from './components/CounterUsingReducer';
import ComplexStateActionInUseReducer from './components/ComplexStateActionInUseReducer';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
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
      <ComplexStateActionInUseReducer />
    </div>
  );
}

export default App;
