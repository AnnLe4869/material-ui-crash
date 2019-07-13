import React, { useState } from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import { muscles, exercises } from "./store";
import Exercise from "./components/exercises";
function App() {
  const [exercise, setExercise] = useState(exercises);

  // SORTING using reduce
  // First param is accumulator, second param is current value
  // Callback must return something, which become new accumulator
  function getExercisesByMuscles() {
    return exercise.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise];
      return exercises;
    }, {});
  }

  console.log(getExercisesByMuscles());
  return (
    <div className="App">
      <Header />
      <Exercise />
      <Footer muscles={muscles} />
    </div>
  );
}

export default App;
