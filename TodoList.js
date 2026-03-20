// TodoList.js
import { useContext, useMemo } from "react";
import { TodoContext } from "./TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ filter }) => {
  const { todos } = useContext(TodoContext);

  const filteredTodos = useMemo(() => {
    if (filter === "completed") return todos.filter((t) => t.completed);
    if (filter === "pending") return todos.filter((t) => !t.completed);
    return todos;
  }, [todos, filter]);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};