import { useEffect, useState } from "react";
import { AlertModal, CustomButton, TopAppBar } from "../components/common";
import { DrawingModal } from "../components/AddDiary";
import { CloseIcon } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { usePostDiaryTranslation } from "../hooks/postDiaryTranslation";
import { useRecoilState } from "recoil";
import { drawingRecordState } from "../recoil/atoms/drawingRecordState";
import { updateDrawingRecord } from "../recoil/utils/updateDrawingRecord";
import { postDiaryDrawing } from "../hooks/postDiaryDrawing";
import {
  clearDiaryLocalStorage,
  getDiaryLocalStorage,
  setDiaryLocalStorage,
} from "../utils/handleDiaryLocalStorage";
const AddDiaryTranslatePage = () => {
  const navigate = useNavigate();

  const [drawingRecord, setDrawingRecord] = useRecoilState(drawingRecordState);
  const diaryData = getDiaryLocalStorage()!; // 번역할 글 받아오기

  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [drawingModalOpen, setDrawingModalOpen] = useState(false);
  const [koreanContent] = useState(diaryData.contents ?? "");
  const [englishContent, setEnglishContent] = useState(
    "열심히 번역을 하고 있어요 . . ",
  );

  /* 그림 부탁하기 버튼 클릭 시 -> 그림 그리기 요청 */
  const handleDrawing = async () => {
    setDrawingModalOpen(true);
    try {
      const newImage = await postDiaryDrawing({
        input: englishContent,
        emotion: diaryData.emotion,
        weather: diaryData.weather,
      });
      if (newImage) {
        setDiaryLocalStorage({ ...diaryData, englishContents: englishContent });
        updateDrawingRecord(setDrawingRecord, {
          ...drawingRecord,
          beforeImages: [...drawingRecord.beforeImages, newImage],
          remainingTries: drawingRecord.remainingTries - 1,
        });
        navigate(ROUTE.ADD_DIARY_CONFIRM_PAGE.link);
        setDrawingModalOpen(false);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const { mutate: translate, data: output } =
    usePostDiaryTranslation(koreanContent);

  useEffect(() => {
    translate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (output) {
      setEnglishContent(output!);
    }
  }, [output]);

  const handleExit = () => {
    navigate(ROUTE.HOME_PAGE.link);
    clearDiaryLocalStorage();
  };

  return (
    <div className="flex h-[100vh] flex-col">
      <TopAppBar
        title="글 확인하기"
        leftGoBack
        rightIcon={<CloseIcon />}
        rightOnClick={() => setIsCloseModalOpen(true)}
      />
      <AlertModal
        toggle={isCloseModalOpen}
        title="일기를 그만 쓸까요?"
        handleOk={handleExit}
        handleClose={() => setIsCloseModalOpen(false)}
      />
      <div className="my-auto flex h-full flex-col justify-center px-4">
        <div>
          <h2 className="text-lg font-semibold">
            AI는 이렇게 생각했어요(역번역)
          </h2>
          <p className="py-2 text-sm font-normal">
            부탁한 그림을 영어로 번역해 그리고 있어요.
            <br />
            번역된 단어가 어울리지 않을 경우 수정해 주세요.
          </p>
          <div className="my-2 bg-gray-80">
            <div className="w-full rounded-md bg-transparent p-4 text-sm text-black">
              {koreanContent}
            </div>
          </div>
          <h3 className="py-2 pt-6 font-semibold">번역된 글</h3>
          <div className="my-2 bg-gray-80">
            <div className="w-full rounded-md bg-transparent p-4 text-sm text-black">
              {englishContent}
            </div>
          </div>
        </div>
        <div className="my-20 flex">
          <CustomButton
            content="글 수정하기"
            onClick={() => navigate(-1)}
            size="short"
            type="black"
          />
          <CustomButton
            content="그림 부탁하기"
            onClick={handleDrawing}
            size="middle"
          />
          <DrawingModal open={drawingModalOpen} />
        </div>
      </div>
    </div>
  );
};

export default AddDiaryTranslatePage;
