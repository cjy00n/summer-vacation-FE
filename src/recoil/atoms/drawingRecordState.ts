import { atom } from "recoil";
import { loadDrawingRecord } from "../utils/loadDrawingRecord";

export interface DrawingRecordStateType {
  lastAttemptDate: string;
  remainingTries: number;
  beforeImages: string[];
}

export const drawingRecordState = atom<DrawingRecordStateType>({
  key: "drawingRecordState",
  default: loadDrawingRecord(),
});
