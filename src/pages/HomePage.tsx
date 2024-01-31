import { Link } from "react-router-dom";
import { NotificationIcon } from "../assets/icons";
import {
  Banner,
  HomeContest,
  HomeMyDiary,
  HomeTitle,
} from "../components/Home";
import HomeRecentBestDiary from "../components/Home/HomeRecentBestDiary";
import { TopAppBar } from "../components/common";
import { ROUTE } from "../routes/Route";

const HomePage = () => {
  const month = new Date().getMonth() + 1;

  return (
    <div>
      <TopAppBar
        title="AI 그림일기"
        rightIcon={
          <Link to={ROUTE.NOTIFICATION_PAGE.link}>
            <NotificationIcon />
          </Link>
        }
      />
      <Banner />
      <div className="px-4 py-2">
        <HomeTitle
          title={`${month}월 사생대회`}
          description="AI가 그린 기린 그림"
        />
        <HomeContest />
        <HomeTitle title="내 일기" description="최근 7일 간 받은 공감 순" />
        <HomeMyDiary />
        <HomeTitle
          title="최근 관심을 받는 일기"
          description="가장 큰 관심을 받고 있어요"
        />
        <HomeRecentBestDiary />
      </div>
    </div>
  );
};

export default HomePage;
