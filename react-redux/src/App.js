import React, {useState} from 'react';
import {Provider} from 'react-redux';
import store from './components/redux/store'
import {BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink, Prompt} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import CakeComponent from './components/CakeComponent';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UsersContainer from './components/UsersContainer';

function User({name}){
  return (
  <h2>Welcome User {name}</h2>
  )
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const clickHandle= ()=>{
    console.log(count);
    setLoggedIn(prevValue =>{
      return !prevValue;
    });
    setCount((prevCount)=>{
      return prevCount + 1;
    })
  }
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <NavLink exact activeStyle={{'color': 'green'}} to="/"><h1>Home</h1></NavLink>
          <NavLink exact activeStyle={{'color': 'green'}} to="/cake"><h1>Cake</h1></NavLink>
          <NavLink exact activeStyle={{'color': 'green'}} to="/icecream"><h1>Icecream</h1></NavLink>
          <NavLink exact activeStyle={{'color': 'green'}} to="/users"><h1>Users</h1></NavLink>
          <NavLink exact activeStyle={{'color': 'green'}} to="/user/John"><h1>John</h1></NavLink>
          <NavLink exact activeStyle={{'color': 'green'}} to="/user/Jane"><h1>Jane</h1></NavLink>
          <Switch>
            <Route path="/" exact>
              <h1>{'Welcome home'}</h1>
            </Route>
            <Route path="/cake" >
              <ItemContainer cake />
              <CakeComponent />
              <HooksCakeContainer />
              <NewCakeContainer />
            </Route>
            <Route path="/icecream">
              <ItemContainer />
              <IceCreamContainer />
            </Route>
            <Route path="/users">
              {loggedIn ? <UsersContainer /> : <Redirect to="/cake" />}
            </Route>
            <Route path="/user/:name" 
              render = {({ match }) => {
                return (loggedIn ?  <User name={match.params.name} /> : <Redirect to="/" />)
              }}>
            </Route>
          </Switch>
        </div>
        <Prompt when={!loggedIn} message={(location)=> location.pathname.startsWith('/user') ? 'Are you sure' : true}/>
        <input type="button" value={loggedIn ? 'log out' : 'log in'} onClick={clickHandle} />
      </Provider>
    </Router>
  );
}

export default App;
