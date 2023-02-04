import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/Todolist';


function App() {

  // This is where our states are as we can pass our states and props downwards
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);  

  // USE Effect - RUN ONCE
  useEffect(() => {
    getLocalTodos();
  }, []);


  // USE Effect where functions can run repeatedly
  useEffect(() => {
  // Function related 
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

    // USE Effect where functions run can repeatedly
  filterHandler();
  savedLocalTodos();
}, [todos, status])


  const savedLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
        <header>
          <h1>Jameel's Todo List</h1>
        </header>
        <Form 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        inputText={inputText}
        setStatus={setStatus}
        />
        <TodoList 
        filteredTodos={filteredTodos}
        setTodos={setTodos} 
        todos={todos} />
    </div>
  );
}

export default App;
