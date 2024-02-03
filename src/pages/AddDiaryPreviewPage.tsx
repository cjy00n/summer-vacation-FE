import { useNavigate } from "react-router-dom";
import { CircleButton, CustomButton, TopAppBar } from "../components/common";
import { FeedDetailItem } from "../components/Feed";
import { message } from "antd";
import { FileDownloadIcon } from "../assets/icons";
import { ROUTE } from "../routes/Route";
import {
  clearDiaryLocalStorage,
  getDiaryLocalStorage,
} from "../utils/handleDiaryLocalStorage";
import { useRecoilState } from "recoil";
import { drawingRecordState } from "../recoil/atoms/drawingRecordState";
import { postDiary } from "../hooks/postDiary";
import { updateDrawingRecord } from "../recoil/utils/updateDrawingRecord";

const AddDiaryPreviewPage = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const [drawingRecord, setDrawingRecord] = useRecoilState(drawingRecordState);
  const { title, contents, weather, emotion, date, isPublic } =
    getDiaryLocalStorage();

  const handleCompleteDiary = async () => {
    try {
      const response = await postDiary({
        title,
        contents,
        weather,
        emotion,
        date,
        image: drawingRecord.beforeImages[0],
        isPublic,
        isWrite: 1,
      });
      if (response) {
        clearDiaryLocalStorage();
        updateDrawingRecord(setDrawingRecord, {
          ...drawingRecord,
          beforeImages: [],
        });
        navigate(ROUTE.ADD_DIARY_COMPLETE_PAGE.link);
      }
    } catch (e) {
      console.error(e);
    }
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
          contents={contents}
          image={drawingRecord.beforeImages[0]}
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
