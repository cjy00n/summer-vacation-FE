import { AddPhotoIcon, EditIcon } from "../assets/icons";
import { TopAppBar } from "../components/common";
import { Diary } from "../types";
import { useGetUserInfo } from "../hooks/getMyUserInfo";
import { useEffect, useState } from "react";
import {
  ProfileMyDiary,
  ProfileEditNicknameModal,
  ProfileTopTab,
} from "../components/Profile";
import { useGetMyDiaries } from "../hooks/getMyDiaries";
import { useRecoilState } from "recoil";
import { bottomTabState } from "../recoil/atoms/bottomTabState";
import { useGetMyBookmark } from "../hooks/getMyBookmark";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [, setActiveBottomTab] = useRecoilState(bottomTabState);
  useEffect(() => {
    setActiveBottomTab("PROFILE");
  }, [setActiveBottomTab]);

  const { data: userInfo, isSuccess: userInfoSuccess } = useGetUserInfo();
  const { data: myDiariesData, isSuccess: getMySuccess } = useGetMyDiaries();
  const { data: myBookmark } = useGetMyBookmark();

  console.log("유저 정보 : ", userInfo);
  console.log("내일기 리스트 : ", myDiariesData);
  console.log("북마크 : ", myBookmark);
  const [isEditNicknameOpen, setIsEditNicknameOpen] = useState(false);
  const [myDiaries, setMyDiaries] = useState<Diary[]>();
  const [nickname, setNickname] = useState("닉네임");
  const [currentTab, setCurretTab] = useState<"My-Diary" | "Bookmark">(
    "My-Diary",
  );

  useEffect(() => {
    if (myDiariesData) {
      setMyDiaries(myDiariesData);
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

  /* 피드 상세 페이지로 이동 */
  const linkToDetailPage = (id: string) => {
    navigate(ROUTE.FEED_DETAIL_PAGE.link + `/${id}`);
  };

  return (
    <>
      <TopAppBar title="프로필" />
      <div className="flex justify-between px-14 py-8">
        <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-gray-80">
          <AddPhotoIcon />
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
      <div>
        <ProfileTopTab currentTab={currentTab} setCurretTab={setCurretTab} />
        {currentTab === "My-Diary" ? (
          <div className="bg-gray-90">
            {myDiaries && myDiaries.length > 0 ? (
              <ProfileMyDiary diaries={myDiaries} />
            ) : (
              <div className="w-full py-20 text-center">
                작성한 일기가 없습니다.
              </div>
            )}
          </div>
        ) : (
          <div className="bg-gray-90">
            {myBookmark && myBookmark.length > 0 ? (
              myBookmark.map((item) => (
                <div
                  key={item.toString()}
                  className="relative h-[33vw] w-[33vw] cursor-pointer p-[1px] custom-breakpoint:h-[160px] custom-breakpoint:w-[160px]"
                  onClick={() => linkToDetailPage(item.diary.id)}
                >
                  <img
                    src={"https://" + item.diary.imageUrl}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))
            ) : (
              <div className="w-full py-20 text-center">
                북마크한 일기가 없습니다.
              </div>
            )}
          </div>
        )}
      </div>
      <ProfileEditNicknameModal
        open={isEditNicknameOpen}
        toggle={toggleEditNicknameModal}
        nickname={nickname}
        setNickname={setNickname}
      />
    </>
  );
};

export default ProfilePage;
