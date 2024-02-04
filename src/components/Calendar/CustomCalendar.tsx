import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { DateType, Emotion } from "../../types";
import { CustomButton } from "../common";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { EmotionIcon } from "../../assets/icons/emotions";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";
import { useRecoilState } from "recoil";
import { bottomTabState } from "../../recoil/atoms/bottomTabState";
import { useGetUserInfo } from "../../hooks/getMyUserInfo";

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
  const [, setActiveBottomTab] = useRecoilState(bottomTabState);

  const [selectedDay, setSelectedDay] = useState<DateType>(date ?? new Date());

  const { data: userInfo } = useGetUserInfo();

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.diaries);
    }
  }, [userInfo]);

  const onChangeDay = (newDate: DateType) => {
    if (setDate) setDate(newDate);
    setSelectedDay(newDate);
  };

  const temp: { date: Date; emotion: Emotion }[] = [
    { date: new Date("2024-02-01"), emotion: "괜찮아요" },
    { date: new Date("2024-01-10"), emotion: "슬퍼요" },
    { date: new Date("2024-02-03"), emotion: "화나요" },
    { date: new Date("2024-01-27"), emotion: "기뻐요" },
    { date: new Date("2024-01-28"), emotion: "슬퍼요" },
    { date: new Date("2024-01-29"), emotion: "괜찮아요" },
    { date: new Date("2024-01-31"), emotion: "좋아요" },
  ];

  // 다이어리가 있는 날인지 여부 리턴 */
  const isHaveDiaryDay = temp.some(
    (item) =>
      format(selectedDay as Date, "yyyyMMdd", { locale: ko }) ===
      format(item.date, "yyyyMMdd", { locale: ko }),
  );

  /* 하단 오늘로 이동 / 일기 쓰기(또는 보기) 버튼 클릭 시 수행 */
  const handleDiaryButton = () => {
    if (isHaveDiaryDay) {
      /* 일기가 있는 날이면 상세페이지로 이동 */
      setActiveBottomTab("CALENDAR");
      navigate(ROUTE.FEED_DETAIL_PAGE.link + "/9");
    } else {
      /* 일기가 없는 날이면 일기쓰기 페이지로 이동 */
      setActiveBottomTab("ADD_DIARY");
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
        return (
          <span className="rounded-full bg-primary-yellow">
            {<EmotionIcon emotion={event.emotion} width={15} height={15} />}
          </span>
        );
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
      <div className="my-10 flex w-full justify-center">
        <CustomButton
          onClick={() => onChangeDay(new Date())}
          content="오늘로 이동"
          type="black"
          size={onRightClick ? "short" : "half"}
        />
        <CustomButton
          onClick={onRightClick ? onRightClick : handleDiaryButton}
          content={
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
