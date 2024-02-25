import { useRecoilState } from "recoil";
import { postDiaryDrawing } from "../../hooks/postDiaryDrawing";
import { Emotion, Weather } from "../../types";
import { drawingRecordState } from "../../recoil/atoms/drawingRecordState";
import { useState } from "react";
import { DrawingModal } from ".";
import { updateDrawingRecord } from "../../recoil/utils/updateDrawingRecord";

interface RequestDrawingButton {
  children: React.ReactNode;
  input: string;
  weather: Weather;
  emotion: Emotion;
  handleFinish?: () => void;
}

const RequestDrawingButton = ({
  children,
  input,
  emotion,
  weather,
  handleFinish,
}: RequestDrawingButton) => {
  const [drawingRecord, setDrawingRecord] = useRecoilState(drawingRecordState);
  const [drawingModalOpen, setDrawingModalOpen] = useState(false);

  const handleDrawing = async () => {
    setDrawingModalOpen(true);
    try {
      const newImage = await postDiaryDrawing({
        input: input,
        emotion: emotion,
        weather: weather,
      });

      if (newImage) {
        updateDrawingRecord(setDrawingRecord, {
          ...drawingRecord,
          beforeImages: [...drawingRecord.beforeImages, newImage],
          remainingTries: drawingRecord.remainingTries - 1,
        });
        if (handleFinish) handleFinish();
        setDrawingModalOpen(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div onClick={handleDrawing}>
      {children}
      <DrawingModal open={drawingModalOpen} />
    </div>
  );
};

export default RequestDrawingButton;
