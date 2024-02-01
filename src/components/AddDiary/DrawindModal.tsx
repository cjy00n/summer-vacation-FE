import { Modal, message } from "antd";

interface DrawingModalProp {
  toggle: boolean;
  onSucess: () => void;
  isFirst?: boolean;
}

const DrawingModal = ({ toggle, onSucess, isFirst }: DrawingModalProp) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <Modal open={toggle} title={null} footer={null} centered closable={false}>
      {contextHolder}
      <div
        className="flex flex-col h-80 items-center justify-center pt-10"
        onClick={() => {
          messageApi.open({
            type: "success",
            content: "그림 생성이 완료되었어요",
            duration: 1,
          });

          setTimeout(
            () => {
              onSucess();
            },
            isFirst ? 1000 : 500,
          );
        }}
      >
        <img src="/image/loading.png" />
        <p className="text-sm font-semibold my-10 text-center">
          AI가 그림을 열심히 그리고 있어요!
          <br />
          0초 정도 소요되니 조금만 기다려 주세요!
        </p>
      </div>
    </Modal>
  );
};

export default DrawingModal;
