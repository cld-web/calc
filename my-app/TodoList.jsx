// src/components/TodoList.jsx
import { RecoilRoot } from "recoil";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <RecoilRoot>
      <h1>Todo List com Recoil</h1>
      <TodoForm />
      <TodoList />
    </RecoilRoot>

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