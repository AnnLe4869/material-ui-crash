import React, { useState } from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import { muscles, exercises } from "./store";
import Exercise from "./components/excercises/index";
function App() {
  const [exercise, setExercises] = useState(exercises);
  return (
    <div className="App">
      <Header />
      <Exercise />
      <Footer muscles={muscles} />
    </div>
  );
}

export default App;
