import { Modal, Switch } from "antd";
import { TopAppBar } from "../../components/common";
import { CloseIcon, AddIcon } from "../../assets/icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";

const AddDiaryPage = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [isStopModalOpen, setIsStopModalOpen] = useState(false);

  const showStopModal = () => {
    setIsStopModalOpen(true);
  };

  const handleStopOk = () => {
    setIsStopModalOpen(false);
    navigate(ROUTE.HOME_PAGE.link);
  };

  const handleStopCancel = () => {
    setIsStopModalOpen(false);
  };

  return (
    <div className="mb-4 bg-primary-white">
      <TopAppBar
        title="일기쓰기"
        rightIcon={<CloseIcon />}
        rightOnClick={showStopModal}
      />
      <div className="flex h-14 items-center px-6 py-2 border-b">
        <span className="font-medium text-sm mr-8">날짜</span>
      </div>
      <div className="flex h-14 items-center px-6 py-2 ">
        <span className="font-medium text-sm mr-8">제목</span>
        <input
          placeholder="제목을 입력하세요"
          className="text-sm bg-transparent"
        />
      </div>
      <div className="flex flex-col border-y-2">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용 쓰기"
          className="h-36 p-4 text-xs bg-transparent outline-none "
        />
        <span className="w-full p-2 text-right text-gray-30 text-xs">
          {content.length + "/100"}
        </span>
      </div>
      <div className="flex flex-col items-center h-28 p-4 mx-2 border-b">
        <span className="py-1 text-sm w-full font-medium">오늘의 기분</span>
        <div className="bg-white w-full h-14 rounded-lg "></div>
      </div>
      <div className="flex flex-col items-center h-28 p-4 mx-2 border-b">
        <span className="py-1 text-sm w-full font-medium">오늘의 날씨</span>
        <div className="bg-white w-full h-14 rounded-lg "></div>
      </div>
      <div className="flex items-center h-14 p-4 mx-2 border-b">
        <span className="py-1 text-sm w-full font-medium">나만 보기</span>
        <Switch className="bg-white" />
      </div>
      <div className="flex flex-col items-center justify-center h-[350px] gap-6">
        <Link
          to={ROUTE.ADD_DIARY_TRANSLATE_PAGE.link}
          className="flex flex-col items-center justify-center w-[320px] h-[320px] bg-gray-70 rounded"
        >
          <AddIcon fillColor="black" />
          <span className="font-semibold text-sm">
            선택해서 AI로 그림 그리기
          </span>
        </Link>
        <button className="h-12  bg-primary-orange w-[320px] rounded-[81px] gap-2">
          <span className="text-base font-medium text-primary-white">
            일기 미리보기
          </span>
        </button>
      </div>
      <Modal
        style={{ height: 162 }}
        width={"90%"}
        title={
          <h1 className="mt-4 text-center text-lg font-semibold">
            일기를 그만 쓸까요?
          </h1>
        }
        open={isStopModalOpen}
        onCancel={handleStopCancel}
        footer={null}
        centered
      >
        <div className="flex justify-center items-end h-24">
          <button
            onClick={handleStopOk}
            className="flex justify-center items-center h-12 w-36 mx-1 bg-error-red rounded-[81px] text-white"
          >
            그만 쓸래요
          </button>
          <button
            onClick={handleStopCancel}
            className="flex justify-center items-center h-12 w-36 mx-1 bg-white rounded-[81px] text-black border-2 border-solid border-black"
          >
            닫기
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddDiaryPage;
