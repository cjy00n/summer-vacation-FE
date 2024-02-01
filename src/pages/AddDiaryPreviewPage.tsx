import { useLocation } from "react-router-dom";
import { TopAppBar } from "../components/common";
import { FeedDetailItem } from "../components/Feed";

const AddDiaryPreviewPage = () => {
  const { state } = useLocation();
  const { title, content, img, weather, emotion, date } = state;
  return (
    <div>
      <TopAppBar title="일기쓰기" leftGoBack />
      <div>
        <FeedDetailItem
          date={date}
          title={title}
          content={content}
          imgUrl={img}
          weather={weather}
          emotion={emotion}
        />
      </div>
    </div>
  );
};

export default AddDiaryPreviewPage;
