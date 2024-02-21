import { useEffect, useState } from "react";
import { AddPhotoIcon, EditIcon } from "../../assets/icons";
import { useGetUserInfo } from "../../hooks/getMyUserInfo";
import { ProfileEditNicknameModal } from ".";
import { usePostProfileImage } from "../../hooks/postProfileImage";

interface ProfileUserInfoProps {
  diariesCount: number;
}
const ProfileUserInfo = ({ diariesCount }: ProfileUserInfoProps) => {
  const { data: userInfo, refetch: refetchUserInfo } = useGetUserInfo();

  const [previeImage, setPreviewImage] = useState(userInfo?.image);
  const [isEditNicknameOpen, setIsEditNicknameOpen] = useState(false);
  const [nickname, setNickname] = useState("");

  /* 프로필 사진 업로드 */
  const { mutate: postProfileImage, data: postProfileImageData } =
    usePostProfileImage();

  const handleImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      postProfileImage(file);
    }
  };

  useEffect(() => {
    if (postProfileImageData) refetchUserInfo();
  }, [postProfileImageData, refetchUserInfo]);

  useEffect(() => {
    if (userInfo) {
      setPreviewImage(userInfo.image);
    }
  }, [userInfo, userInfo?.image]);

  useEffect(() => {
    if (userInfo) setNickname(userInfo?.nickname ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo?.nickname]);

  /* 닉네임 수정 창 토글함수 */
  const toggleEditNicknameModal = () => {
    setIsEditNicknameOpen(!isEditNicknameOpen);
  };

  return (
    <div className="flex justify-between bg-primary-white px-14 py-8">
      <label
        htmlFor="input-file"
        className={
          "flex h-20 w-20 cursor-pointer items-center justify-center rounded-full  bg-gray-80"
        }
      >
        {previeImage ? (
          <img
            className="h-full w-full rounded-full object-cover"
            src={
              previeImage?.includes("https")
                ? previeImage
                : "https://" + previeImage
            }
          />
        ) : (
          <AddPhotoIcon />
        )}
      </label>
      <input
        type="file"
        id="input-file"
        className="hidden"
        onChange={handleImgFile}
      />
      <div className="flex flex-col pr-10">
        <div className="mb-2 flex">
          <span className="text-base font-semibold">{nickname}</span>
          <button className="px-2" onClick={toggleEditNicknameModal}>
            <EditIcon fillColor="black" />
          </button>
        </div>
        <span className="text-sm font-semibold">작성한 일기</span>
        <span className="font-bold text-primary-orange">{diariesCount}</span>
      </div>
      <ProfileEditNicknameModal
        open={isEditNicknameOpen}
        toggle={toggleEditNicknameModal}
        nickname={nickname}
        setNickname={setNickname}
      />
    </div>
  );
};

export default ProfileUserInfo;
