// TodoForm.js
import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { useInput } from "./useInput";

export const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const { value, onChange, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={onChange} placeholder="Nova tarefa..." />
      <button type="submit">Adicionar</button>
    </form>
  );
};