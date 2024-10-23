import { useState } from "react";
import "./App.css";
function App() {
  let [greetingMes, setGreetingMes] = useState("Greeting Message");
  const handleThai = () => {
    setGreetingMes("สวัสดี");
  };
  const handleEng = () => {
    setGreetingMes("Hi!");
  };
  const handleJapan = () => {
    setGreetingMes("你好!");
  };
  return (
    <div className="App">
      {" "}
      <div className="greeting-container">{greetingMes}</div>{" "}
      <div className="buttons">
        {" "}
        <button onClick={handleThai}>สวัสดี</button>{" "}
        <button onClick={handleEng}>Hi!</button>{" "}
        <button onClick={handleJapan}>你好!</button>{" "}
      </div>{" "}
    </div>
  );
}
export default App;
