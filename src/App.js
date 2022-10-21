import React from "react";
import './App.css';
//component imports
import Form from "./components/Form";
import TodoList from "./components/TodoList"; 

function App() {
  return (
    <div className="App">
      <header>
      <h1>hello</h1>
      </header>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
