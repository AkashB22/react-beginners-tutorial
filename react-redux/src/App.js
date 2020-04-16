import React from 'react';
import {Provider} from 'react-redux';
import store from './components/redux/store'
// import logo from './logo.svg';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import CakeComponent from './components/CakeComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
