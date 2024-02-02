import { SetterOrUpdater } from "recoil";
import { DrawingRecordStateType } from "../atoms/drawingRecordState";

export const updateDrawingRecord = (
  setDrawingRecord: SetterOrUpdater<DrawingRecordStateType>,
  updatedRecord: DrawingRecordStateType,
) => {
  setDrawingRecord(() => {
    localStorage.setItem("drawingRecord", JSON.stringify(updatedRecord));

    return updatedRecord;
  });
};
