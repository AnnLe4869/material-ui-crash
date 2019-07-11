import React from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import Excercise from "./components/excercises";
function App() {
  return (
    <div className="App">
      <Header />
      <Excercise />
      <Footer />
    </div>
  );
}

export default App;
