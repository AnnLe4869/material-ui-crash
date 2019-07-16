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
    // Add this variable so that when we delete all content under the title, the title will not disappear
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );
    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = [...exercises[muscles], exercise];
        return exercises;
      }, initExercises)
    );
  }

  function handleCategorySelect(category) {
    setCategory(category);
  }

  // Note how array method is skillfully used here instead of manually code
  // Some useful ones are find(), indexOf(), includes()
  function handleExerciseSelect(id) {
    setExercise(exercises.find(ex => ex.id === id));
  }

  function handleExerciseCreate(exercise) {
    setExercises([...exercises, exercise]);
  }

  function handleExerciseDelete(id) {
    setExercises(exercises.filter(ex => ex.id !== id));
  }

  return (
    <div className="App">
      <Header muscles={muscles} onExerciseCreate={handleExerciseCreate} />
      <Exercises
        exercises={getExercisesByMuscles()}
        exercise={exercise}
        category={category}
        onSelect={handleExerciseSelect}
        onDelete={handleExerciseDelete}
      />
      <Footer category={category} muscles={muscles} onSelect={handleCategorySelect} />
    </div>
  );
}

export default App;
