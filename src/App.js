import React, { useState } from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import { muscles, exercises } from "./store";
import Exercises from "./components/exercises";
function App() {
  const [exercise, setExercise] = useState(exercises);

  function getExercisesByMuscles() {
    return Object.entries(
      exercise.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }
  return (
    <div className="App">
      <Header />
      <Exercises exercises={getExercisesByMuscles()} />
      <Footer muscles={muscles} />
    </div>
  );
}

export default App;
