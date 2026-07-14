import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;