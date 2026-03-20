// App.js
import { TodoProvider } from "./TodoContext";
import { TodoForm } from "./TodoForm";
import { TodoFilters } from "./TodoFilters";

function App() {
  return (
    <TodoProvider>
      <h1>Minha Todo List</h1>
      <TodoForm />
      <TodoFilters />
    </TodoProvider>
  );
}

export default App;