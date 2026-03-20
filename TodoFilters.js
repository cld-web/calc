// TodoFilters.js
import { useState } from "react";
import { TodoList } from "./TodoList";

export const TodoFilters = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("completed")}>Concluídas</button>
      <button onClick={() => setFilter("pending")}>Pendentes</button>
      <TodoList filter={filter} />
    </div>
  );
};