import { AddPhotoIcon, EditIcon, KebabMenuIcon } from "../assets/icons";
import { TopAppBar } from "../components/common";
import { Diary } from "../types";
import { useGetUserInfo } from "../hooks/getMyUserInfo";
import { useEffect, useState } from "react";
import {
  ProfileBottomSection,
  ProfileEditNicknameModal,
} from "../components/Profile";
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

  const { data: userInfo, isSuccess: userInfoSuccess } = useGetUserInfo();
  const { data: myDiariesData, isSuccess: getMySuccess } = useGetMyDiaries();

  const [isEditNicknameOpen, setIsEditNicknameOpen] = useState(false);
  const [myDiaries, setMyDiaries] = useState<Diary[]>();
  const [nickname, setNickname] = useState("닉네임");

  useEffect(() => {
    if (myDiariesData) {
      setMyDiaries(myDiariesData.map(({ diary }) => diary));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMySuccess]);

  useEffect(() => {
    if (userInfoSuccess) setNickname(userInfo?.nickname ?? "닉네임");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo?.nickname]);

  const toggleEditNicknameModal = () => {
    setIsEditNicknameOpen(!isEditNicknameOpen);
  };

  /* 프로필 더 보기 페이지로 이동 */
  const linkToProfileMorePage = () => {
    navigate(ROUTE.PROFILE_MORE_PAGE.link);
  };

  return (
    <div className="h-[100dvh] bg-gray-80">
      <TopAppBar
        title="프로필"
        rightIcon={<KebabMenuIcon />}
        rightOnClick={linkToProfileMorePage}
      />
      <div className="flex justify-between bg-primary-white px-14 py-8">
        <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-gray-80">
          {userInfo?.image ? (
            <img
              className="h-full w-full rounded-full object-cover"
              src={userInfo.image}
            />
          ) : (
            <AddPhotoIcon />
          )}
        </div>
        <div className="flex flex-col pr-10">
          <div className="mb-2 flex">
            <span className="text-base font-semibold">{nickname}</span>
            <button className="px-2" onClick={toggleEditNicknameModal}>
              <EditIcon fillColor="black" />
            </button>
          </div>
          <span className="text-sm font-semibold">작성한 일기</span>
          <span className="font-bold text-primary-orange">
            {myDiaries && myDiaries?.length.toLocaleString()}
          </span>
        </div>
      </div>
      {myDiaries && <ProfileBottomSection myDiaries={myDiaries} />}
      <ProfileEditNicknameModal
        open={isEditNicknameOpen}
        toggle={toggleEditNicknameModal}
        nickname={nickname}
        setNickname={setNickname}
      />
    </div>
  );
};

export default ProfilePage;
