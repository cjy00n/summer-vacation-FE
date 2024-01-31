import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { DateType } from "../../types";
import { CustomButton } from "../AddDiary";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";

interface CustomCalendarProps {
  // 아래 props들은 날짜 선택 컴포넌트로 사용할 때만 전달받음
  date?: DateType;
  setDate?: (date: DateType) => void;
  onRightClick?: () => void;
  rightButtonText?: string;
}

const CustomCalendar = ({
  date,
  setDate,
  onRightClick,
  rightButtonText,
}: CustomCalendarProps) => {
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState<DateType>(date ?? new Date());

  const onChangeDay = (newDate: DateType) => {
    if (setDate) setDate(newDate);
    setSelectedDay(newDate);
  };

  const temp = [
    { date: new Date("2024-01-09"), text: "😍" },
    { date: new Date("2024-01-10"), text: "😍" },
    { date: new Date("2024-01-11"), text: "😍" },
    { date: new Date("2024-01-27"), text: "😍" },
    { date: new Date("2024-01-28"), text: "😍" },
    { date: new Date("2024-01-29"), text: "😄" },
    { date: new Date("2024-01-31"), text: "😍" },
  ];
  const isHaveDiaryDay = temp.some(
    (item) =>
      format(selectedDay as Date, "yyyyMMdd", { locale: ko }) ===
      format(item.date, "yyyyMMdd", { locale: ko }),
  );

  const handleDiaryButton = () => {
    if (isHaveDiaryDay) {
      navigate(ROUTE.FEED_DETAIL_PAGE.link + "/1");
    } else {
      navigate(ROUTE.ADD_DIARY_PAGE.link, { state: { date: selectedDay } });
    }
  };

  function tileContent({ date, view }: { date: Date; view: string }) {
    if (view === "month") {
      const event = temp.find(
        (e) =>
          format(date, "yyyMMdd", { locale: ko }) ===
          format(e.date, "yyyMMdd", { locale: ko }),
      );
      if (event) {
        return <span>{event.text}</span>;
      }
    }
    return null;
  }

  function tileClassName({ date, view }: { date: Date; view: string }) {
    if (view === "month") {
      const event = temp.find(
        (e) =>
          format(date, "yyyMMdd", { locale: ko }) ===
          format(e.date, "yyyMMdd", { locale: ko }),
      );
      if (event) {
        return "tile-bg-orange";
      }
    }
    return null;
  }

  return (
    <div>
      <Calendar
        value={selectedDay}
        onChange={onChangeDay}
        onClickMonth={() => console.log("달")}
        formatDay={(_, date) => format(date, "dd")}
        tileContent={tileContent}
        tileClassName={tileClassName}
        next2Label={null}
        prev2Label={null}
      />
      <div className="flex justify-center w-full my-10">
        <CustomButton
          onClick={() => onChangeDay(new Date())}
          text="오늘로 이동"
          textStyle="text-white"
          buttonStyle="bg-black"
          size={onRightClick ? "short" : "half"}
        />
        <CustomButton
          onClick={onRightClick ? onRightClick : handleDiaryButton}
          text={
            rightButtonText
              ? rightButtonText
              : isHaveDiaryDay
                ? "일기보기"
                : "일기쓰기"
          }
          size="middle"
        />
      </div>
    </div>
  );
};

export default CustomCalendar;
