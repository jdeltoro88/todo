import React, { useState } from "react";
import './App.css';
//component imports 
import Form from "./components/Form";
import TodoList from "./components/TodoList"; 

function App() {
  const [inputText, setInputText] = useState("");
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
//we can use const or an arrow function in the same m anner