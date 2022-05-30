import React, { useEffect } from "react";

function ToDoItem(props) {
  return (
    <div>
      <p> {props.title} </p>
      <button onClick={() => props.removeTodo(props.index)}> remove </button>
    </div>
  );
}

export default ToDoItem;
