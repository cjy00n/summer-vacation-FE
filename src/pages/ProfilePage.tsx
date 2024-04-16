import { KebabMenuIcon } from "../assets/icons";
import { LoginRequired, TopAppBar } from "../components/common";
import { useEffect } from "react";
import { ProfileBottomSection, ProfileUserInfo } from "../components/Profile";
import { useRecoilState } from "recoil";
import { bottomTabState } from "../recoil/atoms/bottomTabState";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { isLoggedInState } from "../recoil/atoms/isLoggedinState";
import { useGetMyDiariesByDate } from "../api/getMyDiariesByDate";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isLoggedIn] = useRecoilState(isLoggedInState);
  const [, setActiveBottomTab] = useRecoilState(bottomTabState);

  // 하단 탭 바를 <프로필>로 유지하기
  useEffect(() => {
    setActiveBottomTab("PROFILE");
  }, [setActiveBottomTab]);

  const { data: myDiariesData, isSuccess: isGetMySuccess } =
    useGetMyDiariesByDate();

  /* 프로필 더 보기 페이지로 이동 */
  const linkToProfileMorePage = () => {
    navigate(ROUTE.PROFILE_MORE_PAGE.link);
  };

  return (
    <div className="min-h-dvh bg-gray-80">
      <TopAppBar
        title="프로필"
        rightIcon={<KebabMenuIcon />}
        rightOnClick={linkToProfileMorePage}
      />
      {isLoggedIn && isGetMySuccess && myDiariesData ? (
        <>
          <ProfileUserInfo
            diariesCount={myDiariesData ? myDiariesData.length : 0}
          />
          {myDiariesData && (
            <ProfileBottomSection
              myDiaries={myDiariesData.map((item) => item.diary)}
            />
          )}
        </>
      ) : (
        <LoginRequired />
      )}
    </div>
  );
};

export default ProfilePage;
