import { CustomCalendar } from "../components/Calendar";
import { TopAppBar } from "../components/common";

const CalendarPage = () => {
  return (
    <div className="bg-primary-white">
      <TopAppBar title="달력" />
      <CustomCalendar />
    </div>
  );
};

export default CalendarPage;
