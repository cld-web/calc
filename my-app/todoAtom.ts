import { atom } from "recoil";

export const todoAtom = atom({
  key: "todoAtom",
  default: [] as { id: number; text: string; completed: boolean }[],
});