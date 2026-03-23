// src/App.jsx
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";

export default function App() {
  return (
    <TodoProvider>
      <h1>Todo List Avançada</h1>
      <TodoForm />
      <TodoFilter />
    </TodoProvider>
  );
}