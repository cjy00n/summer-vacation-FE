import { Link, useNavigate } from "react-router-dom";
import { NotificationIcon } from "../assets/icons";
import {
  Banner,
  HomeContest,
  HomeMyDiary,
  HomeTitle,
} from "../components/Home";
import HomeRecentBestDiary from "../components/Home/HomeRecentBestDiary";
import { PageBottomShadow, TopAppBar } from "../components/common";
import { ROUTE } from "../routes/Route";
import { CustomButton } from "../components/AddDiary";

const HomePage = () => {
  const navigate = useNavigate();
  const month = new Date().getMonth() + 1;

  const linkAddDiaryPage = () => {
    navigate(ROUTE.ADD_DIARY_PAGE.link);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-primary-orange">
      <TopAppBar
        title="여름방학"
        bgColor="bg-primary-orange"
        rightIcon={
          <Link to={ROUTE.NOTIFICATION_PAGE.link}>
            <NotificationIcon fillColor="white" />
          </Link>
        }
      />
      <Banner />
      <div className="relative px-4 pt-10 pb-20 bg-primary-white">
        <HomeTitle
          title="최근 관심을 받는 일기"
          description="가장 큰 관심을 받고 있어요"
        />
        <HomeRecentBestDiary />
        <HomeTitle title="내 일기" description="최근 7일 간 받은 공감 순" />
        <HomeMyDiary />
        <HomeTitle
          title={`${month}월 사생대회`}
          description="AI가 그린 기린 그림"
        />
        <HomeContest />
        <div className="fixed z-10 bottom-24 left-[50%] transform -translate-x-1/2">
          <CustomButton
            buttonStyle="border-none bg-primary-orange"
            onClick={linkAddDiaryPage}
            text="일기 쓰러가기"
            size="long"
          />
        </div>
      </div>
      <PageBottomShadow />
    </div>
  );
};

export default HomePage;
