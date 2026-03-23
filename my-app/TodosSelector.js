// src/selectors/filteredTodosSelector.js
import { selector } from "recoil";
import { todoAtom } from "../atoms/todoAtom";
import { filterAtom } from "../atoms/filterAtom";

export const filteredTodosSelector = selector({
  key: "filteredTodosSelector",
  get: ({ get }) => {
    const todos = get(todoAtom);
    const filter = get(filterAtom);

    if (filter === "completed") return todos.filter(t => t.completed);
    if (filter === "pending") return todos.filter(t => !t.completed);
    return todos;
  },
});