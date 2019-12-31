import React, { useState } from "react";
import { muscles, exercises as initialValue } from "./store";
import { Provider } from "./context";
import { Header, Footer } from "./components/layouts";
import Exercises from "./components/exercises";
function App() {
  const [exercises, setExercises] = useState(initialValue);
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState({});
  const [editMode, setEditNode] = useState(undefined);

  // Don't destructor syntax here because we want to change the object itself, not just the copy

  function getContext() {
    return {
      muscles,
      exercises,
      exercise,
      category,
      editMode,
      exercisesByMuscles: getExercisesByMuscles(),
      onCreate: handleExerciseCreate,
      onSelect: handleExerciseSelect,
      onCategorySelect: handleCategorySelect,
      onEdit: handleExerciseEdit,
      onSelectEdit: handleExerciseSelectEdit,
      onDelete: handleExerciseDelete
    };
  }

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
    setExercise(exercise.id === id ? {} : exercise);
    setEditNode(exercise.id === id ? false : editMode);
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
    <Provider value={getContext()}>
      <Header />
      <Exercises />
      <Footer />
    </Provider>
  );
}

export default App;
