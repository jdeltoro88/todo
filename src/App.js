import React, { useState, useEffect  } from "react";
import './App.css';
//component imports 
import Form from "./components/Form";
import TodoList from "./components/TodoList"; 

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once on app start
  useEffect(() => {
    getLocalTodos();
  }, [])
  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //functions

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.uncompleted === false));
          break;
          default:
            setFilteredTodos(todos);
            break; 
    }
  };

  //local save
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    };
  
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem)('todos')
      setTodos(todoLocal);
    }
  };


  return (
    <div className="App">
      <header>
        <h1>hello</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
//we can use const or an arrow function in the same manner

