import { Modal } from "antd";
import { CustomCalendar } from "../Calendar";
import { CloseIcon } from "../../assets/icons";
import { DateType } from "../../types";
import { CustomButton } from ".";

interface SelectDateModalProps {
  date: DateType;
  setDate: (date: DateType) => void;
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}
const SelectDateModal = ({
  date,
  setDate,
  toggle,
  setToggle,
}: SelectDateModalProps) => {
  const initialDate = date; // 변경 전 날짜

  return (
    <Modal
      open={toggle}
      title={"날짜 선택"}
      centered
      onCancel={() => {
        setToggle(!toggle);
        setDate(initialDate);
      }}
      closeIcon={<CloseIcon />}
      footer={null}
    >
      <div className="p-0 m-0">
        <CustomCalendar date={date} setDate={setDate} />
        <div className="flex justify-center w-full  my-10">
          <CustomButton
            onClick={() => setDate(new Date())}
            text="오늘로 이동"
            textColor="white"
            bgColor="bg-black"
            size="short"
          />
          <CustomButton
            onClick={() => setToggle(!toggle)}
            text="선택"
            size="middle"
          />
        </div>
      </div>
    </Modal>
  );
};

export default SelectDateModal;
