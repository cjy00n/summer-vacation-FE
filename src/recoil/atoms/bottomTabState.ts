import { atom } from "recoil";
import { BottomTab } from "../../types";

export const bottomTabState = atom<BottomTab>({
  key: "bottomTabState",
  default: "HOME",
});
