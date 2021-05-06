import React, { useState } from 'react';
//import counterButton from './App.css';
import divButton from './App.css';
//import divDisplay from './App.css';

function Counter(props) {
 
  const handleClick = () => {};
   return (
     <div className="divButton">
       <button className = "counterButton" onClick={props.onclickFunction}>
         +1
       </button>
       </div>
   );
}

function Display(props) {
  return (
    <div className="divDisplay">
      {props.message}
    </div>
  )
}

function App() {
  const [counter, setCounter] = useState(42);
  const incrementCounter = () => setCounter(counter+1);
  return (
    <div>
      <Counter onclickFunction={incrementCounter} />
      <Display message={counter} />
    </div>
  )
 
}


export default App;
