import ToDoInput from '../components/todo-input';
import { useState } from "react";
import '../styles/app.css';
import ToDoItem from '../components/todo-item';

function App() {
    const [todos, setTodos] = useState([]);
    const todoList = [];

    todos.forEach((todo, index) => {
        todoList.push(<ToDoItem title={todo} removeTodo={removeTodo} index={index} key={index}/>);
    });
    function addTodo(todo) {
        setTodos([...todos, todo]);
    }
    function removeTodo(todo) {
        const tempTodos = [...todos];
        tempTodos.splice(todo, 1);

        setTodos(tempTodos);
    }
    return (
    <div className="wrapper">
        <header>
            <h1> To Do List </h1>
            <ToDoInput addTodo={addTodo}/>
        </header>
        {todoList.length > 0 && <div className='todos'> { todoList } </div> }
        
    </div>
  );
}

export default App;
