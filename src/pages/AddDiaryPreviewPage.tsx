import { useNavigate } from "react-router-dom";
import { CircleButton, CustomButton, TopAppBar } from "../components/common";
import { FeedDetailItem } from "../components/Feed";
import { message } from "antd";
import { FileDownloadIcon } from "../assets/icons";
import { ROUTE } from "../routes/Route";
import { getDiaryLocalStorage } from "../utils/handleDiaryLocalStorage";
import { useRecoilState } from "recoil";
import { drawingRecordState } from "../recoil/atoms/drawingRecordState";
import { usePostDiary } from "../hooks/postDiary";
import { updateDrawingRecord } from "../recoil/utils/updateDrawingRecord";
import { useEffect } from "react";

const AddDiaryPreviewPage = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const [drawingRecord, setDrawingRecord] = useRecoilState(drawingRecordState);
  const { title, contents, weather, emotion, date, isPublic } =
    getDiaryLocalStorage();

  const { mutate: postDiary, isSuccess } = usePostDiary({
    title,
    contents,
    weather,
    emotion,
    date,
    imageUrl: drawingRecord.beforeImages[0],
    isPublic,
  });

  const handleCompleteDiary = () => {
    postDiary();
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTE.ADD_DIARY_COMPLETE_PAGE.link);
      updateDrawingRecord(setDrawingRecord, {
        ...drawingRecord,
        beforeImages: [],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const handleDownladDrawing = () => {
    messageApi.warning("다운로드 기능은 현재 준비중이에요.");
  };

  return (
    <div>
      <TopAppBar title="일기쓰기" leftGoBack />
      <div className="relative mx-auto flex w-[320px] flex-col">
        <FeedDetailItem
          diary={{
            diary_date: date,
            diary_title: title,
            diary_contents: contents,
            diary_imageUrl:
              drawingRecord.beforeImages[drawingRecord.beforeImages.length - 1],
            diary_weather: weather,
            diary_emotion: emotion,
          }}
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
