import { Modal, message } from "antd";
import { CustomButton } from "../common";
import { useEffect, useState } from "react";
import { usePatchAddUserInfo } from "../../hooks/patchAddUserInfo";
import { useGetIsDuplicateNickname } from "../../hooks/getIsDuplicateNickname";

interface ProfileEditNicknameModalProps {
  open: boolean;
  toggle: () => void;
  nickname: string;
  setNickname: React.Dispatch<string>;
}

const ProfileEditNicknameModal = ({
  open,
  toggle,
  nickname,
}: ProfileEditNicknameModalProps) => {
  const { mutate: patchNickname, isSuccess } = usePatchAddUserInfo();
  const [previewNickname, setPreviewNickname] = useState(nickname);
  const [isPossibleNickname, setIsPossibleNickname] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePatchNickname = () => {
    patchNickname({ nickname: previewNickname });
  };

  useEffect(() => {
    setPreviewNickname(nickname);
  }, [nickname]);

  const { data } = useGetIsDuplicateNickname(
    previewNickname,
    isPossibleNickname,
  );

  useEffect(() => {
    const regex = /^[가-힣a-zA-Z0-9.\-_]+$/;
    setIsPossibleNickname(false);
    if (previewNickname === nickname) {
      setErrorMessage("");
      setIsPossibleNickname(false);
    } else if (previewNickname.length > 10) {
      setErrorMessage("닉네임은 10자까지 가능해요.");
    } else if (previewNickname.length < 2) {
      setErrorMessage("닉네임은 2글자 이상이어야 해요.");
    } else if (!regex.test(previewNickname) && previewNickname.length !== 0) {
      setErrorMessage(
        "한글/영어/숫자와 온점(.), 하이픈(-), 언더바(_)만을 사용하여 닉네임을 작성해주세요.",
      );
    } else {
      setIsPossibleNickname(true);
      setErrorMessage("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewNickname]);

  useEffect(() => {
    if (nickname && isPossibleNickname) {
      if (data === false) {
        setErrorMessage("");
      } else if (data === true) {
        setErrorMessage("이미 사용 중인 닉네임입니다.");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, previewNickname, isPossibleNickname]);

  useEffect(() => {
    if (isSuccess) {
      message.success("닉네임이 변경되었습니다.");
      toggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Modal
      centered
      open={open}
      title={
        <div className="mx-4 text-center text-lg font-semibold">
          닉네임 변경하기
          <input
            className="my-2 w-full rounded-lg border-none bg-gray-70 bg-opacity-70 p-2 text-sm"
            value={previewNickname}
            onChange={(e) => setPreviewNickname(e.target.value)}
          />
          <p className="min-h-5 text-sm text-error-red">{errorMessage}</p>
        </div>
      }
      footer={null}
      closeIcon={null}
    >
      <div className="flex">
        <CustomButton
          type="white"
          size="half"
          content={"닫기"}
          onClick={toggle}
        />
        <CustomButton
          size="half"
          type={isPossibleNickname ? "default" : "disabled"}
          content={"변경하기"}
          onClick={handlePatchNickname}
        />
      </div>
    </Modal>
  );
};

export default ProfileEditNicknameModal;
