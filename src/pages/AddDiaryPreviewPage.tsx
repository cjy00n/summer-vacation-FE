import { useLocation, useNavigate } from "react-router-dom";
import { CircleButton, TopAppBar } from "../components/common";
import { FeedDetailItem } from "../components/Feed";
import { CustomButton } from "../components/AddDiary";
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
      <div className="flex flex-col relative mx-auto w-[320px]">
        <FeedDetailItem
          date={date}
          title={title}
          content={content}
          imgUrl={img}
          weather={weather}
          emotion={emotion}
        />
        <div className="flex fixed z-10 bottom-[10px] left-[50%] transform -translate-x-1/2 w-[320px] my-2">
          <CircleButton
            onClick={handleDownladDrawing}
            icon={<FileDownloadIcon width={32} height={32} />}
          />
          <CustomButton
            text="작성 완료하기"
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
