import { useRecoilState } from "recoil";
import { postDiaryDrawing } from "../../api/postDiaryDrawing";
import { Emotion, Weather } from "../../types";
import { drawingRecordState } from "../../recoil/atoms/drawingRecordState";
import { useState } from "react";
import { DrawingModal } from ".";
import { updateDrawingRecord } from "../../recoil/utils/updateDrawingRecord";
import { useGetUserInfo } from "../../api/getMyUserInfo";

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
  const { data: UserInfo } = useGetUserInfo();
  const [drawingRecord, setDrawingRecord] = useRecoilState(drawingRecordState);
  const [drawingModalOpen, setDrawingModalOpen] = useState(false);

  const handleDrawing = async () => {
    setDrawingModalOpen(true);
    try {
      const newImage = await postDiaryDrawing({
        input: input,
        emotion: emotion,
        weather: weather,
        gender: UserInfo!.gender,
      });

      if (newImage) {
        updateDrawingRecord(setDrawingRecord, {
          ...drawingRecord,
          lastAttemptDate: new Date().toDateString(),
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
