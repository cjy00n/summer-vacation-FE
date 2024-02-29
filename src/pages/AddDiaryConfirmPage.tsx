import { CustomButton, TopAppBar } from "../components/common";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { message } from "antd";
import { drawingRecordState } from "../recoil/atoms/drawingRecordState";
import { useRecoilState } from "recoil";
import { getDiaryLocalStorage } from "../utils/handleDiaryLocalStorage";
import { defaultTries } from "../recoil/utils/loadDrawingRecord";
import RequestDrawingButton from "../components/AddDiary/RequestDrawingButton";

const AddDiaryConfirmPage = () => {
  const navigate = useNavigate();
  const diaryData = getDiaryLocalStorage();

  const [drawingRecord] = useRecoilState(drawingRecordState);

  return (
    diaryData && (
      <div className="flex flex-col">
        <TopAppBar title="AI 그림 확인" leftGoBack />
        <div className="mx-auto flex flex-col items-center p-3">
          <h2 className="py-2 text-lg font-semibold">AI는 이렇게 그렸어요</h2>
          <img
            src={
              drawingRecord.beforeImages[drawingRecord.beforeImages.length - 1]
            }
            className="h-[320px] w-[320px] rounded-md object-cover"
          />
          <div className="my-6 flex h-40 flex-col">
            <CustomButton
              type={
                drawingRecord.beforeImages.length < 2 ? "disabled" : "white"
              }
              size="long"
              content="전에 그린 그림 보기"
              onClick={() => navigate(ROUTE.ADD_DIARY_BEFORE_PAGE.link)}
            />
            <RequestDrawingButton
              input={diaryData.englishContents}
              emotion={diaryData.emotion}
              weather={diaryData.weather}
            >
              <CustomButton
                content={`다시 그리기(${drawingRecord.remainingTries}/${defaultTries})`}
                type={drawingRecord.remainingTries === 0 ? "disabled" : "black"}
                onClick={() => {
                  if (drawingRecord.remainingTries === 0) {
                    message.error("그릴 수 있는 횟수가 끝났어요");
                  }
                }}
              />
            </RequestDrawingButton>

            <CustomButton
              content={`이 그림으로 할래요`}
              size="long"
              onClick={() => navigate(ROUTE.ADD_DIARY_PAGE.link)}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default AddDiaryConfirmPage;
