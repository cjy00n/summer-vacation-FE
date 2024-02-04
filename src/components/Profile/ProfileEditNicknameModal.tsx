import { Modal, message } from "antd";
import { CustomButton } from "../common";
import { usePatchNickname } from "../../hooks/patchNickname";
import { useEffect } from "react";

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
  setNickname,
}: ProfileEditNicknameModalProps) => {
  const { mutate: patchNickname, isSuccess } = usePatchNickname(nickname);
  const handlePatchNickname = () => {
    patchNickname();
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("닉네임이 변경되었습니다.");
      toggle();
    }
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
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
