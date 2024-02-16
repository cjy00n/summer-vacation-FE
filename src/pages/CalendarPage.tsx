import { useRecoilState } from "recoil";
import { CustomCalendar } from "../components/Calendar";
import { TopAppBar } from "../components/common";
import { bottomTabState } from "../recoil/atoms/bottomTabState";
import { useEffect } from "react";

const CalendarPage = () => {
  const [, setActiveBottomTab] = useRecoilState(bottomTabState);
  useEffect(() => {
    setActiveBottomTab("CALENDAR");
  }, [setActiveBottomTab]);

  return (
    <div className="bg-primary-white">
      <TopAppBar title="달력" />
      <CustomCalendar />
    </div>
  );
};

export default CalendarPage;
