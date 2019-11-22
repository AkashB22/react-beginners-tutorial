import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/greet.js';
import Welcome from './component/welcome';
import Hello from './component/hello';
import Visitor from './component/visitor';
import Counter from './component/counter';
import FunctionClick from './component/functionClick';
import ClassClick from './component/classClick';
import EventBind from './component/eventBind';
import ParentComponent from './component/parentComponent';
import UserGreeting from './component/UserGreeting';
import {Namelist} from './component/Namelist';
import MessageParent from './component/messageParent';
import ParenPureCheck from './component/ParenPureCheck';
import RefsDemo from './component/RefsDemo';
import FocusInput from './component/focusInput';
import FRInputParent from './component/FRInputParent';
import PortalRoot from './component/PortalRoot';
import ToCheckError from './component/toCheckError';
import ErrorBoundary from './component/ErrorBoundary';
import ClickComp from './component/clickComp';
import HoverComp from './component/hoverComp';
import ClickComptwo  from './component/ClickComptwo';
import HoverCompTwo from './component/HoverCompTwo';
import RenderProp from './component/RenderProp'
import CompC from './component/CompC';
import {UserProvider} from './component/UserContext';
import PostFile from './component/PostFile';
import PostDataFile from './component/PostDataFile';

function App() {
  return (
    <div className="App">
      {/* <FunctionClick />
      <ClassClick />
      <Greet name='luffy'>
        <p>I am going to be the pirate king!!!</p>
      </Greet>
      <Welcome name='mihawk'>
        <p>The best swordsmen in the world</p>
      </Welcome>
      <Hello/>
      <Visitor />
      <Counter />
      <EventBind />
      <ParentComponent/>
      <UserGreeting />
      <Namelist />
      <MessageParent />*/}
      {/* <ParenPureCheck />  */}
      {/* <RefsDemo /> */}
      {/* <FocusInput />  */}
      {/* <FRInputParent />
      {/* <PortalRoot /> */}
      {/* <ErrorBoundary>
        <ToCheckError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ToCheckError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ToCheckError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ToCheckError error='yes'/>
      </ErrorBoundary> */}
      {/* <ClickComp name='Batman'/>
      <HoverComp /> */}
      {/* <ClickComptwo />
      <HoverCompTwo /> */}
      {/* <RenderProp render={(count, incrementHandler)=>{
        return (<ClickComptwo count={count} incrementHandler={incrementHandler}/>)
      }} ></RenderProp>

      <RenderProp render={(count, incrementHandler)=>(
        <HoverCompTwo count={count} incrementHandler={incrementHandler}/>
      )}/> */}
      {/* <UserProvider value="john doe" >
        <CompC />
      </UserProvider>
       */}
{/* 
       <PostFile /> */}
       <PostDataFile />
    </div>
  );
}

export default App;
