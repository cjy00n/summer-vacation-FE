import { Modal } from "antd";
import { CustomButton } from "../AddDiary";

interface AlertModalProps {
  toggle?: boolean;
  title: string;
  okText?: string;
  closeText?: string;
  handleOk: () => void;
  handleClose: () => void;
}

const AlertModal = ({
  toggle,
  title,
  okText,
  closeText,
  handleOk,
  handleClose,
}: AlertModalProps) => {
  return (
    <Modal
      open={toggle}
      style={{ height: 162 }}
      width={"90%"}
      title={
        <h1 className="mt-4 text-center text-lg font-semibold">{title}</h1>
      }
      footer={null}
      centered
      closable={false}
      onCancel={handleClose}
    >
      <div className="flex justify-center items-end h-24">
        <CustomButton
          onClick={handleOk}
          text={okText ?? "그만둘래요"}
          buttonStyle="bg-error-red"
        />
        <CustomButton
          onClick={handleClose}
          text={closeText ?? "닫기"}
          buttonStyle="bg-white border-black "
          textStyle="text-black"
        />
      </div>
    </Modal>
  );
};

export default AlertModal;
