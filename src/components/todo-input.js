import { useState } from "react";

function ToDoInput(props) {
  const [title, setTitle] = useState("");
  function submit(event) {
      event.preventDefault();
      props.addTodo(title);
      setTitle("");
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        required
        placeholder="Title..."
        name="name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

export default ToDoInput;
