import { AddPhotoIcon, EditIcon } from "../assets/icons";
import { TopAppBar } from "../components/common";
import { Diary } from "../types";
import { useGetUserInfo } from "../hooks/getMyUserInfo";
import { useEffect, useState } from "react";
import {
  ProfileMyDiary,
  ProfileEditNicknameModal,
} from "../components/Profile";

const ProfilePage = () => {
  const { data: userInfo, isSuccess: getSuccess } = useGetUserInfo();

  const [isEditNicknameOpen, setIsEditNicknameOpen] = useState(false);
  const [myDiaries, setMyDiaries] = useState<Diary[]>();
  const [nickname, setNickname] = useState(
    userInfo?.nickname ? userInfo?.nickname : "닉네임",
  );

  useEffect(() => {
    if (userInfo) {
      setNickname(userInfo?.nickname);
      setMyDiaries(userInfo?.diaries);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSuccess]);

  const toggleEditNicknameModal = () => {
    setIsEditNicknameOpen(!isEditNicknameOpen);
  };

  return (
    <>
      <TopAppBar title="프로필" />
      <div className="flex justify-between px-14 py-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-80">
          <AddPhotoIcon />
        </div>
        <div className="flex flex-col pr-10">
          <div className="mb-2 flex">
            <span className="text-base font-semibold">{nickname}</span>
            <span className="px-2" onClick={toggleEditNicknameModal}>
              <EditIcon fillColor="black" />
            </span>
          </div>
          <span className="text-sm font-semibold">작성한 일기</span>
          <span className="font-bold text-primary-orange">
            {myDiaries && myDiaries?.length.toLocaleString()}
          </span>
        </div>
      </div>
      <div>
        <div className="bg-primary-orange px-3 py-3 text-lg font-bold text-primary-white">
          내 일기
        </div>
        <div className="bg-gray-90">
          {myDiaries && myDiaries.length > 0 ? (
            <ProfileMyDiary diaries={myDiaries} />
          ) : (
            <div className="w-full py-20 text-center">
              작성한 일기가 없습니다.
            </div>
          )}
        </div>
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
