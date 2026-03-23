// src/components/TodoForm.jsx
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../atoms/todoAtom";

export default function TodoForm() {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todoAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Nova tarefa..." />
      <button type="submit">Adicionar</button>
    </form>
  );
}