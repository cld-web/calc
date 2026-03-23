// src/components/TodoItem.jsx
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useContext(TodoContext);

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remover</button>
    </li>
  );
}

export default React.memo(TodoItem); // 🔥 Memoization