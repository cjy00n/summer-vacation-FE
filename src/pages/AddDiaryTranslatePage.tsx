import { useEffect, useState } from "react";
import { AlertModal, CustomButton, TopAppBar } from "../components/common";
import { CloseIcon } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { usePostDiaryTranslation } from "../hooks/postDiaryTranslation";
import {
  clearDiaryLocalStorage,
  getDiaryLocalStorage,
  setDiaryLocalStorage,
} from "../utils/handleDiaryLocalStorage";
import RequestDrawingButton from "../components/AddDiary/RequestDrawingButton";
const AddDiaryTranslatePage = () => {
  const navigate = useNavigate();

  const diaryData = getDiaryLocalStorage()!; // 번역할 글 받아오기

  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [koreanContent] = useState(diaryData.contents ?? "");
  const [englishContent, setEnglishContent] = useState(
    "열심히 번역을 하고 있어요 . . ",
  );

  const {
    mutate: translate,
    data: output,
    isSuccess: translateSuccess,
  } = usePostDiaryTranslation(koreanContent);

  useEffect(() => {
    translate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (output && translateSuccess) {
      setEnglishContent(output!);
      setDiaryLocalStorage({ ...diaryData, englishContents: output });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [output]);

  const handleExit = () => {
    navigate(ROUTE.HOME_PAGE.link);
    clearDiaryLocalStorage();
  };

  const linkToConfirmPage = () => {
    navigate(ROUTE.ADD_DIARY_CONFIRM_PAGE.link);
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
          <RequestDrawingButton
            input={englishContent}
            emotion={diaryData.emotion}
            weather={diaryData.weather}
            handleFinish={linkToConfirmPage}
          >
            <CustomButton content="그림 부탁하기" size="middle" />
          </RequestDrawingButton>
        </div>
      </div>
    </div>
  );
};

export default AddDiaryTranslatePage;
