import { Modal } from "antd";

interface AlertModalProps {
  toggle: boolean;
  title: string;
  okText?: string;
  closeText?: string;
  handleOk?: () => void;
  handleClose?: () => void;
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
    >
      <div className="flex justify-center items-end h-24">
        <button
          onClick={handleOk}
          className="flex justify-center items-center h-12 w-36 mx-1 bg-error-red rounded-[81px] text-white"
        >
          {okText}
        </button>
        <button
          onClick={handleClose}
          className="flex justify-center items-center h-12 w-36 mx-1 bg-white rounded-[81px] text-black border-2 border-solid border-black"
        >
          {closeText}
        </button>
      </div>
    </Modal>
  );
};

export default AlertModal;
