// src/atoms/todoAtom.js
import { atom } from "recoil";

export const todoAtom = atom({
  key: "todoAtom",
  default: [],
});

// src/atoms/filterAtom.js
import { atom } from "recoil";

export const filterAtom = atom({
  key: "filterAtom",
  default: "all", // valores possíveis: all, completed, pending
});