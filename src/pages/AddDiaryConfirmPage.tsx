import { CustomButton, TopAppBar } from "../components/common";
import { DrawingModal } from "../components/AddDiary";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { message } from "antd";
import { drawingRecordState } from "../recoil/atoms/drawingRecordState";
import { useRecoilState } from "recoil";
import { updateDrawingRecord } from "../recoil/utils/updateDrawingRecord";
import { postDiaryDrawing } from "../hooks/postDiaryDrawing";
import { useState } from "react";

const AddDiaryConfirmPage = () => {
  const navigate = useNavigate();

  let engContents = "";

  const { state } = useLocation();
  if (state && state.engContents) engContents = state.engContents;

  const [drawingModalOpen, setDrawingModalOpen] = useState(false);
  const [drawingRecord, setDrawingRecord] = useRecoilState(drawingRecordState);
  const [messageApi, contextHolder] = message.useMessage();

  /* 그림 부탁하기 버튼 클릭 시 -> 그림 그리기 요청 */
  const handleDrawing = async () => {
    setDrawingModalOpen(true);
    try {
      const newImage = await postDiaryDrawing(engContents);
      if (newImage) {
        updateDrawingRecord(setDrawingRecord, {
          ...drawingRecord,
          beforeImages: [...drawingRecord.beforeImages, newImage],
          remainingTries: drawingRecord.remainingTries - 1,
        });
        setDrawingModalOpen(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col">
      <TopAppBar title="AI 그림 확인" leftGoBack />
      <div className="mx-auto flex flex-col items-center p-4">
        <h2 className="py-3 text-lg font-semibold">AI는 이렇게 그렸어요</h2>
        <img
          src={
            drawingRecord.beforeImages[drawingRecord.beforeImages.length - 1]
          }
          className="h-[320px] w-[320px] object-cover"
        />
        <div className="my-6 flex h-40 flex-col">
          <CustomButton
            type={drawingRecord.remainingTries >= 2 ? "disabled" : "white"}
            size="long"
            content="전에 그린 그림 보기"
            onClick={() => navigate(ROUTE.ADD_DIARY_BEFORE_PAGE.link)}
          />
          <CustomButton
            content={`다시 그리기(${drawingRecord.remainingTries}/3)`}
            type={drawingRecord.remainingTries === 0 ? "disabled" : "black"}
            onClick={() => {
              if (drawingRecord.remainingTries === 0) {
                messageApi.open({
                  type: "error",
                  content: "그릴 수 있는 횟수가 끝났어요",
                });
              } else {
                handleDrawing();
              }
            }}
          />
          <DrawingModal open={drawingModalOpen} />
          <CustomButton
            content={`이 그림으로 할래요`}
            size="long"
            onClick={() => navigate(ROUTE.ADD_DIARY_PAGE.link)}
          />
          {contextHolder}
        </div>
      </div>
    </div>
  );
};

export default AddDiaryConfirmPage;
