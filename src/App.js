import React, { useState } from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import { muscles, exercises as initialValue } from "./store";
import Exercises from "./components/exercises";
function App() {
  const [exercises, setExercises] = useState(initialValue);
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState({});

  // Note how interchange between object and array
  // Array is easier to enumerate/loop through
  // Object is easier to create and manage
  // Also note how reduce() is used to transform old data to new and useable data. Don't forget the initial value of reduce()
  function getExercisesByMuscles() {
    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }

  function handleCategorySelected(category) {
    setCategory(category);
  }

  // Note how array method is skillfully used here instead of manually code
  // Some useful ones are find(), indexOf(), includes()
  function handleExerciseSelected(id) {
    setExercise(exercises.find(ex => ex.id === id));
  }
  return (
    <div className="App">
      <Header />
      <Exercises
        exercises={getExercisesByMuscles()}
        exercise={exercise}
        category={category}
        onSelect={handleExerciseSelected}
      />
      <Footer category={category} muscles={muscles} onSelect={handleCategorySelected} />
    </div>
  );
}

export default App;
