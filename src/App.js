import React, { useState } from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import { muscles, exercises as initialValue } from "./store";
import Exercises from "./components/exercises";
function App() {
  const [exercises, setExercises] = useState(initialValue);
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState({});
  const [editMode, setEditNode] = useState(undefined);

  function getExercisesByMuscles() {
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

  function handleExerciseSelect(id) {
    setExercise(exercises.find(ex => ex.id === id));
    setEditNode(false);
  }

  function handleExerciseCreate(exercise) {
    setExercises([...exercises, exercise]);
  }

  function handleExerciseDelete(id) {
    setExercises(exercises.filter(ex => ex.id !== id));
    setExercise({});
    setEditNode(false);
  }

  function handleExerciseSelectEdit(id) {
    setEditNode(true);
    setExercise(exercises.find(ex => ex.id === id));
  }

  function handleExerciseEdit(exercise) {
    setExercises([...exercises.filter(ex => ex.id !== exercise.id), exercise]);
    setExercise(exercise);
    setEditNode(false);
  }

  return (
    <div className="App">
      <Header muscles={muscles} onExerciseCreate={handleExerciseCreate} />
      <Exercises
        exercises={getExercisesByMuscles()}
        exercise={exercise}
        category={category}
        editMode={editMode}
        muscles={muscles}
        onSelect={handleExerciseSelect}
        onDelete={handleExerciseDelete}
        onSelectEdit={handleExerciseSelectEdit}
        onEdit={handleExerciseEdit}
      />
      <Footer category={category} muscles={muscles} onSelect={handleCategorySelect} />
    </div>
  );
}

export default App;
