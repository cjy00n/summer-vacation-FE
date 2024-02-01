import { useState } from "react";
import { TopAppBar } from "../components/common";
import { CustomButton, DrawingModal } from "../components/AddDiary";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { message } from "antd";

const AddDiaryConfirmPage = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const [retryCount, setRetryCount] = useState(3);
  const [isDrawingModalOpen, setIsDrawingModalOpen] = useState(false);

  const img = "/sample.webp";
  return (
    <div className="flex flex-col">
      <TopAppBar title="AI 그림 확인" leftGoBack />
      <div className="flex flex-col p-4 mx-auto items-center">
        <h2 className="text-lg font-semibold py-3">AI는 이렇게 그렸어요</h2>
        <img src={img} className="w-[320px] h-[320px] object-cover" />
        <div className="flex flex-col my-4">
          <CustomButton
            disabled={retryCount === 3}
            size="long"
            buttonStyle={`${retryCount <= 2 ? ` ` : " opacity-20 "} bg-white border-black  `}
            text="전에 그린 그림 보기"
            textStyle={`text-black`}
            onClick={() => navigate(ROUTE.ADD_DIARY_BEFORE_PAGE.link)}
          />
          <CustomButton
            text={`다시 그리기(${retryCount}/3)`}
            buttonStyle={`${retryCount === 0 ? "opacity-20" : ""} bg-black`}
            size="long"
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
            text={`이 그림으로 할래요`}
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
