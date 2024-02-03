import { useNavigate } from "react-router-dom";
import { NotificationIcon } from "../assets/icons";
import {
  Banner,
  HomeContest,
  HomeMyDiary,
  HomeTitle,
} from "../components/Home";
import HomeRecentBestDiary from "../components/Home/HomeRecentBestDiary";
import {
  PageBottomShadow,
  CustomButton,
  TopAppBar,
} from "../components/common";
import { ROUTE } from "../routes/Route";
import { message } from "antd";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const month = new Date().getMonth() + 1;

  const linkAddDiaryPage = () => {
    navigate(ROUTE.ADD_DIARY_PAGE.link);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate(ROUTE.LOGIN_PAGE.link);
    }
  }, [navigate]);

  return (
    <div className="bg-primary-orange">
      <TopAppBar
        bgColor="bg-primary-orange"
        rightIcon={<NotificationIcon fillColor="white" />}
        rightOnClick={() => message.warning("알림 기능은 현재 준비중이에요.")}
      />
      <Banner />
      <div className="relative bg-primary-white px-4 pb-20 pt-10">
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
        <div className="fixed bottom-24 left-[50%] z-10 -translate-x-1/2 transform">
          <CustomButton
            onClick={linkAddDiaryPage}
            content="일기 쓰러가기"
            size="long"
          />
        </div>
      </div>
      <PageBottomShadow />
    </div>
  );
};

export default HomePage;
