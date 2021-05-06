import React, { useState } from 'react';
import Button from './App.css';
function App() {
 const [counter, setCounter] = useState(0);
 const handleClick = () => setCounter(counter+1);
  return (
    <div>
      <button className = "Button" onClick={handleClick}>
        {counter}
      </button>
      </div>
  );
}

export default App;
