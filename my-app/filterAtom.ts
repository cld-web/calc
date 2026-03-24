import { atom } from "recoil";

export const filterAtom = atom({
  key: "filterAtom",
  default: "all", // valores: all, completed, pending
});