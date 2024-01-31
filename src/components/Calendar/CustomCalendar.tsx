import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CustomCalendar = () => {
  const [selectedDay, setSelectedDay] = useState<Value>(new Date());

  const onChangeDay = (newDate: Value) => {
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
    </div>
  );
};

export default CustomCalendar;
