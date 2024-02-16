import { Modal, message } from "antd";
import { CustomButton } from "../common";
import { useEffect, useState } from "react";
import { usePatchAddUserInfo } from "../../hooks/patchAddUserInfo";

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

  const handlePatchNickname = () => {
    patchNickname({ nickname: previewNickname });
  };

  useEffect(() => {
    setPreviewNickname(nickname);
  }, [nickname]);

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
          content={"변경하기"}
          onClick={handlePatchNickname}
        />
      </div>
    </Modal>
  );
};

export default ProfileEditNicknameModal;
