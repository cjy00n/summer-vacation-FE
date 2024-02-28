import { Modal } from "antd";

const DrawingModal = ({ open }: { open: boolean }) => {
  return (
    <Modal
      open={open}
      title={null}
      footer={null}
      centered
      closable={false}
      width={"350px"}
      style={{ height: "280px" }}
    >
      <div className="flex h-80 flex-col items-center justify-center pt-10">
        <img src="/image/loading.png" />
        <p className="my-10 text-center text-sm font-semibold">
          AI가 그림을 열심히 그리고 있어요!
          <br />
          5초 정도 소요되니 조금만 기다려 주세요!
        </p>
      </div>
    </Modal>
  );
};

export default DrawingModal;
