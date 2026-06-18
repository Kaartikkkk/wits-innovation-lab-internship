import { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import ResultCard from "./ResultCard";
import "./App.css";

function App() {

  const [celsius, setCelsius] = useState("");

  const fahrenheit =
    celsius === ""
      ? ""
      : ((Number(celsius) * 9) / 5 + 32).toFixed(2);

  return (
    <div className="container">

      <div className="card">

        <h1>Temperature Converter</h1>

        <TemperatureInput
          celsius={celsius}
          setCelsius={setCelsius}
        />

        <ResultCard
          fahrenheit={fahrenheit}
        />

      </div>

    </div>
  );
}

export default App;