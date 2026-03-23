// src/App.jsx
import { RecoilRoot } from "recoil";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App3() {
  return (
    <RecoilRoot>
      <h1>Todo List com Recoil</h1>
      <TodoForm />
      <TodoList />
    </RecoilRoot>
  );
}