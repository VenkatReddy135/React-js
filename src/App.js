import React from 'react'
import './App.css';
import Form from './components/Form';
import  Hoc1  from './components/Hoc1';
import  Hoc2  from './components/Hoc2';
import Parent from './components/Parent';
import TwoWayBind from './components/TwoWayBind';
import RenderProps from './components/RenderProps';
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';
import ContextProvider from './components/ContextProvider';
import Hooks from './components/Hooks';



function App() {
  return (
    <div className="App">

<Parent />
<h1>-----------------------</h1>
<Form></Form>
<h1>------------------------</h1>

<h1 style={{color:'blueviolet'}}>Two way Binding</h1>
 <TwoWayBind />

 <h1>-------------------------</h1>
     <h2 style={{color:'red'}}>HOC1</h2>
     <Hoc1 />

     
 <h1>-----------------------</h1>
     <h2 style={{color:'red'}}> Hoc2</h2>
     <Hoc2 />

<h1 style={{color:'blue'}}>------------Render Props-----------------</h1>
  <RenderProps   render={(clicked,count)=>(
             <HoverCounter  clicked={clicked} count={count} />
             
  )} />

<RenderProps   render={(clicked,count)=>(
             <ClickCounter  clicked={clicked} count={count} />
             
)} />

<h1 style={{color:'violet'}}>-------------------Context in React------------------</h1>
<ContextProvider />

<h1 style={{color:'orange'}}>-----------------------UseState----------------------------------</h1>
<Hooks />
  
  <h1>Hello Iam Venkat </h1>
    </div>
  );
}


export default React.memo(App);
