// TodoItem.js
import { memo, useContext } from "react";
import { TodoContext } from "./TodoContext";

export const TodoItem = memo(({ todo }) => {
  const { toggleTodo, removeTodo } = useContext(TodoContext);

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remover</button>
    </li>
  );
});