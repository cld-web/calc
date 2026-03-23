// src/components/TodoItem.jsx
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../atoms/todoAtom";

export default function TodoItem({ todo }) {
  const setTodos = useSetRecoilState(todoAtom);

  const toggleTodo = () => {
    setTodos(prev => prev.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t));
  };

  const removeTodo = () => {
    setTodos(prev => prev.filter(t => t.id !== todo.id));
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
        onClick={toggleTodo}
      >
        {todo.text}
      </span>
      <button onClick={removeTodo}>Remover</button>
    </li>
  );
}