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
  const initialDate = date; // 변경 전 날짜

  return (
    <Modal
      style={{ padding: 0 }}
      open={toggle}
      title={"날짜 선택"}
      footer={
        <>
          <CustomCalendar date={date} setDate={setDate} />
          <div className="flex justify-center items-end h-24 mt-10 mb-20">
            <button
              onClick={() => setDate(new Date())}
              className="flex justify-center items-center h-12 w-28 mx-1 bg-black rounded-[81px] text-white"
            >
              오늘로 이동
            </button>
            <button
              onClick={() => setToggle(!toggle)}
              className="flex justify-center items-center h-12 w-52 mx-1 bg-primary-orange rounded-[81px] text-white"
            >
              선택
            </button>
          </div>
        </>
      }
      centered
      onCancel={() => {
        setToggle(!toggle);
        setDate(initialDate);
      }}
      closeIcon={<CloseIcon />}
    />
  );
};

export default SelectDateModal;
