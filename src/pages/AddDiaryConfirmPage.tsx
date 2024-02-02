import { useEffect, useState } from "react";
import { CustomButton, TopAppBar } from "../components/common";
import { DrawingModal } from "../components/AddDiary";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { message } from "antd";
import { usePostDiaryDrawing } from "../hooks/postDiaryDrawing";

const AddDiaryConfirmPage = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const [retryCount, setRetryCount] = useState(2);

  let image = ""; // 받아오는 이미지로 해야함
  let engContents = "";

  const { state } = useLocation();
  if (state && state.image) image = state.image;
  if (state && state.engContents) engContents = state.engContents;

  const { mutate: drawing, data, isSuccess, isLoading } = usePostDiaryDrawing();

  const handleDrawing = () => {
    if (engContents) {
      drawing(engContents);
    }
  };

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data);
      image = data;
    }
  }, [isSuccess, data, navigate]);

  return (
    <div className="flex flex-col">
      <TopAppBar title="AI 그림 확인" leftGoBack />
      <div className="mx-auto flex flex-col items-center p-4">
        <h2 className="py-3 text-lg font-semibold">AI는 이렇게 그렸어요</h2>
        <img src={image} className="h-[320px] w-[320px] object-cover" />
        <div className="my-6 flex h-40 flex-col">
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
                handleDrawing();
                setRetryCount(retryCount - 1);
              }
            }}
          />
          <DrawingModal open={isLoading} />
          <CustomButton
            content={`이 그림으로 할래요`}
            size="long"
            onClick={() =>
              navigate(ROUTE.ADD_DIARY_PAGE.link, { state: { image: image } })
            }
          />
          {contextHolder}
        </div>
      </div>
    </div>
  );
};

export default AddDiaryConfirmPage;
