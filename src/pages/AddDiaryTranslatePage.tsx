import { useState } from "react";
import { AlertModal, CustomButton, TopAppBar } from "../components/common";
import { DrawingModal } from "../components/AddDiary";
import { CloseIcon } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
const AddDiaryTranslatePage = () => {
  const content = JSON.parse(localStorage.getItem("diary-content") ?? ""); // 번역할 글 받아오기

  // const { data, mutate } = usePostDiaryTranslation(content);
  // if (content) mutate();
  // console.log(data);

  const navigate = useNavigate();
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [isDrawingModalOpen, setIsDrawingModalOpen] = useState(false);

  const [koreanContent, setKoreanContent] = useState(
    content
      ? content
      : "어린아이가 우산을 쓰고 있고, 장화를 신고 도시 속 길을 걷고 있는 그림[임시]",
  );
  const [englishContent, setEnglishContent] = useState(
    "Young child using umbrella, wearing rainboots, walking on the middle of the city [임시]",
  );

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
        handleOk={() => navigate(ROUTE.HOME_PAGE.link)}
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
            <textarea
              className="w-full rounded-md bg-transparent p-4 text-xs"
              value={koreanContent}
              onChange={(e) => setKoreanContent(e.target.value)}
            />
          </div>
          <h3 className="py-2 pt-6 font-semibold">번역된 글</h3>
          <div className="my-2 bg-gray-80">
            <textarea
              className="w-full rounded-md bg-transparent p-4 text-xs text-gray-30"
              value={englishContent}
              onChange={(e) => setEnglishContent(e.target.value)}
            />
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
            onClick={() => setIsDrawingModalOpen(!isDrawingModalOpen)}
            size="middle"
          />
          <DrawingModal
            isFirst
            toggle={isDrawingModalOpen}
            onSucess={() => navigate(ROUTE.ADD_DIARY_CONFIRM_PAGE.link)}
          />
        </div>
      </div>
    </div>
  );
};

export default AddDiaryTranslatePage;
