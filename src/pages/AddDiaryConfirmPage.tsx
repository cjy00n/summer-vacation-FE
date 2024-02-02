import { useState } from "react";
import { CustomButton, TopAppBar } from "../components/common";
import { DrawingModal } from "../components/AddDiary";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { message } from "antd";

const AddDiaryConfirmPage = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const [retryCount, setRetryCount] = useState(2);
  const [isDrawingModalOpen, setIsDrawingModalOpen] = useState(false);

  const img = "/sample.webp";
  return (
    <div className="flex flex-col">
      <TopAppBar title="AI 그림 확인" leftGoBack />
      <div className="mx-auto flex flex-col items-center p-4">
        <h2 className="py-3 text-lg font-semibold">AI는 이렇게 그렸어요</h2>
        <img src={img} className="h-[320px] w-[320px] object-cover" />
        <div className="my-4 flex flex-col">
          <CustomButton
            type={retryCount >= 2 ? "disabled" : "white"}
            size="long"
            content="전에 그린 그림 보기"
            onClick={() => navigate(ROUTE.ADD_DIARY_BEFORE_PAGE.link)}
          />
          <CustomButton
            content={`다시 그리기(${retryCount}/3)`}
            type={retryCount === 0 ? "disabled" : "black"}
            onClick={() => {
              if (retryCount === 0) {
                messageApi.open({
                  type: "error",
                  content: "그릴 수 있는 횟수가 끝났어요",
                });
              } else {
                setRetryCount(retryCount - 1);
                setIsDrawingModalOpen(!isDrawingModalOpen);
              }
            }}
          />
          <DrawingModal
            toggle={isDrawingModalOpen}
            onSucess={() => setIsDrawingModalOpen(!isDrawingModalOpen)}
          />
          <CustomButton
            content={`이 그림으로 할래요`}
            size="long"
            onClick={() =>
              navigate(ROUTE.ADD_DIARY_PAGE.link, { state: { img: img } })
            }
          />
          {contextHolder}
        </div>
      </div>
    </div>
  );
};

export default AddDiaryConfirmPage;
