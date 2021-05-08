import React, { useState } from 'react';
import reactDom from 'react-dom';
import counterButton from './App.css';
import divButton from './App.css';
import divDisplay from './App.css';

function Counter(props) {
  const handleClick = () => props.onclickFunction(props.increment);
      return (
     <div className="divButton">
       <button className = "counterButton" onClick={handleClick}>
         +{props.increment}
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
function App(props) {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  return (
    <div>
      <Counter onclickFunction={incrementCounter} increment={5} />
      <Counter onclickFunction={incrementCounter} increment={10} />
      <Counter onclickFunction={incrementCounter} increment={15} />
      <Counter onclickFunction={incrementCounter} increment={100} />
      <Display message={counter} />
    </div>
  )
}
export default App;
