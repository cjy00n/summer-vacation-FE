import { atom } from "recoil";
import { loadDrawingRecord } from "../utils/loadDrawingRecord";

interface DrawingRecordStateType {
  lastAttemptDate: Date;
  remainingTries: number;
}

export const drawingRecordState = atom<DrawingRecordStateType>({
  key: "drawingRecordState",
  default: loadDrawingRecord(),
});
