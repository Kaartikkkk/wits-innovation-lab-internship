import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="container">
      <div className="counter-card">
        <h1>React Counter App</h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={decreaseCount}>Decrease</button>

          <button onClick={resetCount}>Reset</button>

          <button onClick={increaseCount}>Increase</button>
        </div>
      </div>
    </div>
  );
}

export default App;