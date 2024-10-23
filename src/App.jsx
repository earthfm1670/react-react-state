import "./App.css";
import { useState } from 'react';

function App() {
  const [counter,setCounter] = useState("Greeting Message")
  const clickA = () => {
    setCounter("สวัสดี!")
  }
  const clickB = () => {
    setCounter("Hi!")
  }
  const clickC = () => {
    setCounter("你好!")
  }

  return (
    <div className="App">
      <div className="greeting-container">{counter}</div>
      <div className="buttons">
        <button onClick={clickA} >สวัสดี!</button>
        <button onClick={clickB} >Hi!</button>
        <button onClick={clickC} >你好!</button>
      </div>
    </div>
  );
}

export default App;
