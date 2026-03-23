// src/components/TodoList.jsx
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredTodosSelector } from "../selectors/filteredTodosSelector";
import { filterAtom } from "../atoms/filterAtom";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useRecoilValue(filteredTodosSelector);
  const setFilter = useSetRecoilState(filterAtom);

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("completed")}>Concluídas</button>
        <button onClick={() => setFilter("pending")}>Pendentes</button>
      </div>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}