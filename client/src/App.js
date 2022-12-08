import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  fetch("http://localhost:8080")
    .then((res) => res.json())
    .then((data) => setDisplay(data));
  return (
    <div className="App">
      <h1>LANDING PAGE</h1>
      <p>{display.message}</p>
    </div>
  );
}

export default App;
