import { useNavigate } from "react-router-dom";
import { NotificationIcon } from "../assets/icons";
import { Banner, HomeMyDiary, HomeTitle } from "../components/Home";
import HomeRecentBestDiary from "../components/Home/HomeRecentBestDiary";
import {
  PageBottomShadow,
  CustomButton,
  TopAppBar,
} from "../components/common";
import { ROUTE } from "../routes/Route";
import { message } from "antd";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../recoil/atoms/isLoggedinState";

const HomePage = () => {
  const [isLoggedIn] = useRecoilState(isLoggedInState); // 로그인 여부

  const navigate = useNavigate();

  /* 로그인 한 경우 -> 일기쓰기 페이지로 이동 버튼 활성화 */
  const linkAddDiaryPage = () => {
    navigate(ROUTE.ADD_DIARY_PAGE.link);
    window.scrollTo(0, 0);
  };

  /* 로그인 안한 경우 -> 로그인 페이지 이동 버튼 활성화 */
  const linkLoginPage = () => {
    navigate(ROUTE.LOGIN_PAGE.link);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-dvh">
      <TopAppBar
        bgColor="bg-primary-orange"
        rightIcon={<NotificationIcon fillColor="white" />}
        rightOnClick={() => message.warning("알림 기능은 현재 준비중이에요.")}
      />
      <Banner />
      <div className="relative px-4 pb-20 pt-10">
        <HomeTitle
          title="최근 관심을 받는 일기"
          description="가장 큰 관심을 받고 있어요"
        />
        <HomeRecentBestDiary />
        <HomeTitle title="내 일기" description="내가 최근 작성한 순" />
        <HomeMyDiary />
        <div className="fixed bottom-[72px] left-[50%] z-10 -translate-x-1/2 transform">
          {isLoggedIn ? (
            <CustomButton onClick={linkAddDiaryPage} content="일기 쓰러가기" />
          ) : (
            <CustomButton
              content={"로그인 하러 가기"}
              onClick={linkLoginPage}
            />
          )}
        </div>
      </div>
      <PageBottomShadow />
    </div>
  );
};

export default HomePage;
