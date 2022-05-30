import ToDoInput from "../components/todo-input";
import { useState, useEffect } from "react";
import "../styles/app.css";
import ToDoItem from "../components/todo-item";

function App() {
  const [todos, setTodos] = useState([]);
  let todoList = [];

  todos.forEach((todo, index) => {
    todoList.push(
      <ToDoItem
        title={todo}
        removeTodo={removeTodo}
        index={index}
        key={index}
      />
    );
  });
  
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  function removeTodo(todo) {
    const tempTodos = [...todos];
    tempTodos.splice(todo, 1);

    setTodos(tempTodos);
  }

  useEffect(() => {
    let tempTodos = JSON.parse(localStorage.getItem("todos"));

    setTodos(tempTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="wrapper">
      <header>
        <h1> To Do List </h1>
        <ToDoInput addTodo={addTodo} />
      </header>
      {todoList.length > 0 && <div className="todos"> {todoList} </div>}
    </div>
  );
}

export default App;
