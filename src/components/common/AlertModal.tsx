import { Modal } from "antd";
import { CustomButton } from ".";

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
      <div className="flex h-24 items-end justify-center">
        <CustomButton
          onClick={handleOk}
          content={okText ?? "그만둘래요"}
          type="dangerous"
        />
        <CustomButton
          onClick={handleClose}
          content={closeText ?? "닫기"}
          type="white"
          size="half"
        />
      </div>
    </Modal>
  );
};

export default AlertModal;
