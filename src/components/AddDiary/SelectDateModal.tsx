import { Modal } from "antd";
import { CustomCalendar } from "../Calendar";
import { CloseIcon } from "../../assets/icons";
import { DateType } from "../../types";

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
  const selectDate = (date: Date) => {
    setToggle(!toggle);
    setDate(date);
  };

  return (
    <Modal
      open={toggle}
      title={"날짜 선택"}
      centered
      onCancel={() => {
        setToggle(!toggle);
      }}
      closeIcon={<CloseIcon />}
      footer={null}
      className="bg-primary-white"
    >
      <div className="m-0 p-0">
        <CustomCalendar
          date={date}
          onRightClick={(date: Date) => selectDate(date)}
          isSelectedUse
        />
      </div>
    </Modal>
  );
};

export default SelectDateModal;
