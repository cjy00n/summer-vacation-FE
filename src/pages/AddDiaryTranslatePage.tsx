import { useState } from "react";
import { AlertModal, TopAppBar } from "../components/common";
import { CustomButton } from "../components/AddDiary";
import { CloseIcon, LoadingIcon } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { Modal } from "antd";

const AddDiaryTranslatePage = ({ content = "" }: { content?: string }) => {
  const navigate = useNavigate();
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [isDrawingModalOpen, setIsDrawingModalOpen] = useState(false);

  const [koreanContent, setKoreanContent] = useState(
    content ??
      "어린아이가 우산을 쓰고 있고, 장화를 신고 도시 속 길을 걷고 있는 그림[임시]",
  );
  const [englishContent, setEnglishContent] = useState(
    "Young child using umbrella, wearing rainboots, walking on the middle of the city [임시]",
  );

  return (
    <div className="flex flex-col bg-primary-white h-[100vh]">
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
      <div className="flex flex-col px-4 my-auto justify-center h-full">
        <div>
          <h2 className="text-lg font-semibold">
            AI는 이렇게 생각했어요(역번역)
          </h2>
          <p className="text-sm font-normal py-2">
            부탁한 그림을 영어로 번역해 그리고 있어요.
            <br />
            번역된 단어가 어울리지 않을 경우 수정해 주세요.
          </p>
          <div className="bg-gray-80 my-2">
            <textarea
              className="w-full bg-transparent text-xs p-4 rounded-md"
              value={koreanContent}
              onChange={(e) => setKoreanContent(e.target.value)}
            />
          </div>
          <h3 className="font-semibold pt-6 py-2">번역된 글</h3>
          <div className="bg-gray-80 my-2">
            <textarea
              className="w-full bg-transparent text-xs p-4 rounded-md text-gray-30"
              value={englishContent}
              onChange={(e) => setEnglishContent(e.target.value)}
            />
          </div>
        </div>
        <div className="flex my-20">
          <CustomButton
            text="글 수정하기"
            textColor="black"
            bgColor="white"
            onClick={() => console.log("수정")}
            border="border-black"
            size="short"
          />
          <CustomButton
            text="그림 부탁하기"
            textColor="white"
            onClick={() => setIsDrawingModalOpen(!isDrawingModalOpen)}
            size="middle"
          />
          <Modal
            open={isDrawingModalOpen}
            title={null}
            footer={null}
            centered
            closable={false}
          >
            <div className="flex flex-col h-80 items-center justify-center pt-10">
              <LoadingIcon width={60} height={60} />
              <p className="text-sm font-semibold my-10 text-center">
                AI가 그림을 열심히 그리고 있어요!
                <br />
                0초 정도 소요되니 조금만 기다려 주세요!
              </p>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AddDiaryTranslatePage;
