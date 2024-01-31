import { CustomCalendar } from "../components/Calendar";

const CalendarPage = () => {
  return (
    <div>
      <CustomCalendar />
      <div className="flex justify-center mt-12">
        <button className="flex w-28 h-12 p-4 mr-5 items-center justify-center bg-black text-white rounded-[81px]">
          일기 쓰기
        </button>
        <button className="flex w-52 h-12 p-4 items-center justify-center bg-primary-orange text-white rounded-[81px]">
          일기 보기
        </button>
      </div>
    </div>
  );
};

export default CalendarPage;
