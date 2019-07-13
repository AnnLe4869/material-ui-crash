import React, { useState } from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import { muscles, exercises } from "./store";
import Excercise from "./components/excercises/index";
//let initial = exercises;
function App() {
  // Error: Cannot access 'exercises' before initialization
  // Guess bug in the line below
  // Strange is, if paste the line below to outside the scope of function, it work well
  // First guess is something is wrong with inport, but prove it's wrong as muscles still work
  // Second guess is because the hoisting feature
  // As in a function scope, when doing stuff with a variable, it first (guessing) search for the vriable with that name inside the function first
  // If can't find, then it will go outer scope
  console.log(exercises);

  const [exercises, setExercises] = useState();
  return (
    <div className="App">
      <Header />
      <Excercise />
      <Footer muscles={muscles} />
    </div>
  );
}

export default App;
