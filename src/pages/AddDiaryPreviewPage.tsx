import { useLocation, useNavigate } from "react-router-dom";
import { CircleButton, CustomButton, TopAppBar } from "../components/common";
import { FeedDetailItem } from "../components/Feed";
import { message } from "antd";
import { FileDownloadIcon } from "../assets/icons";
import { ROUTE } from "../routes/Route";
import { clearDiaryLocalStorage } from "../utils/handleDiaryLocalStorage";

const AddDiaryPreviewPage = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const { state } = useLocation();
  const { title, content, img, weather, emotion, date } = state;

  const handleCompleteDiary = () => {
    clearDiaryLocalStorage();
    navigate(ROUTE.ADD_DIARY_COMPLETE_PAGE.link);
  };

  const handleDownladDrawing = () => {
    messageApi.warning("다운로드 기능은 현재 준비중이에요.");
  };

  return (
    <div>
      <TopAppBar title="일기쓰기" leftGoBack />
      <div className="relative mx-auto flex w-[320px] flex-col">
        <FeedDetailItem
          date={date}
          title={title}
          content={content}
          imgUrl={img}
          weather={weather}
          emotion={emotion}
        />
        <div className="fixed bottom-[10px] left-[50%] z-10 my-2 flex w-[320px] -translate-x-1/2 transform">
          <CircleButton
            onClick={handleDownladDrawing}
            icon={<FileDownloadIcon width={32} height={32} />}
          />
          <CustomButton
            content="작성 완료하기"
            onClick={handleCompleteDiary}
            size="middleLong"
          />
        </div>
      </div>
      {contextHolder}
    </div>
  );
};

export default AddDiaryPreviewPage;
