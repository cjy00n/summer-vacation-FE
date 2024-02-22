import { KebabMenuIcon } from "../assets/icons";
import { TopAppBar } from "../components/common";
import { Diary } from "../types";
import { useEffect, useState } from "react";
import { ProfileBottomSection, ProfileUserInfo } from "../components/Profile";
import { useGetMyDiaries } from "../hooks/getMyDiaries";
import { useRecoilState } from "recoil";
import { bottomTabState } from "../recoil/atoms/bottomTabState";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [, setActiveBottomTab] = useRecoilState(bottomTabState);

  // 하단 탭 바를 <프로필>로 유지하기
  useEffect(() => {
    setActiveBottomTab("PROFILE");
  }, [setActiveBottomTab]);

  const { data: myDiariesData, isSuccess: getMySuccess } = useGetMyDiaries();
  const [myDiaries, setMyDiaries] = useState<Diary[]>();

  useEffect(() => {
    if (myDiariesData) {
      setMyDiaries(myDiariesData.map(({ diary }) => diary));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMySuccess]);

  /* 프로필 더 보기 페이지로 이동 */
  const linkToProfileMorePage = () => {
    navigate(ROUTE.PROFILE_MORE_PAGE.link);
  };

  return (
    <div className="h-real-screen bg-gray-80">
      <TopAppBar
        title="프로필"
        rightIcon={<KebabMenuIcon />}
        rightOnClick={linkToProfileMorePage}
      />
      <ProfileUserInfo diariesCount={myDiaries ? myDiaries?.length : 0} />
      {myDiaries && <ProfileBottomSection myDiaries={myDiaries} />}
    </div>
  );
};

export default ProfilePage;
