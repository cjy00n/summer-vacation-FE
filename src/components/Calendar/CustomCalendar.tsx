import { useEffect, useState } from "react";
import { format, isWithinInterval, subDays } from "date-fns";
import { ko } from "date-fns/locale";
import { DateType, Diary } from "../../types";
import { CustomButton } from "../common";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { EmotionIcon } from "../../assets/icons/emotions";
import { useRecoilState } from "recoil";
import { bottomTabState } from "../../recoil/atoms/bottomTabState";
import { useGetMyDiaries } from "../../hooks/getMyDiaries";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";

interface CustomCalendarProps {
  // 아래 props들은 날짜 선택 컴포넌트로 사용할 때만 전달받음
  date?: DateType;
  onRightClick?: (date: Date) => void;
  isSelectedUse?: boolean;
}

const CustomCalendar = ({
  date,
  onRightClick,
  isSelectedUse,
}: CustomCalendarProps) => {
  const navigate = useNavigate();
  const [, setActiveBottomTab] = useRecoilState(bottomTabState);

  const [selectedDay, setSelectedDay] = useState<DateType>(date ?? new Date());

  /* 현재 선택된 날짜를 변경하는 함수 */
  const onChangeDay = (newDate: DateType) => {
    setSelectedDay(newDate);
  };

  const { data: myDiaryData } = useGetMyDiaries();
  const [myDiaries, setMyDiaries] = useState<Diary[]>([]);

  /* 내 일기 정보 불러와서 다이어리 배열만 넘기기 */
  useEffect(() => {
    if (myDiaryData) {
      setMyDiaries(myDiaryData.map(({ diary }) => diary));
    }
  }, [myDiaryData]);

  // 다이어리가 있는 날인지 여부 리턴 */
  const isHaveDiaryDay = myDiaries.some(
    (diary) =>
      format(selectedDay as Date, "yyyyMMdd", { locale: ko }) ===
      format(diary.date as Date, "yyyyMMdd", { locale: ko }),
  );

  /* 하단 오늘로 이동 / 일기 쓰기(또는 보기) 버튼 클릭 시 수행 */
  const handleDiaryButton = () => {
    if (isHaveDiaryDay) {
      /* 일기가 있는 날이면 상세페이지로 이동 */
      const targetDiary = myDiaries.filter(
        (diary) =>
          format(diary.date as Date, "yyyyMMdd") ===
          format(selectedDay as Date, "yyyyMMdd"),
      )[0];

      setActiveBottomTab("CALENDAR");
      navigate(`${ROUTE.FEED_DETAIL_PAGE.link}/${targetDiary.id}`);
    } else {
      /* 일기가 없는 날이면 일기쓰기 페이지로 이동 */
      setActiveBottomTab("ADD_DIARY");
      navigate(ROUTE.ADD_DIARY_PAGE.link, { state: { date: selectedDay } });
    }
  };

  /* 해당 날짜의 다이어리 emotion 표시하기 */
  function tileContent({ date, view }: { date: Date; view: string }) {
    if (view === "month") {
      const event = myDiaries.find(
        (e) =>
          format(date, "yyyMMdd", { locale: ko }) ===
          format(e.date as Date, "yyyMMdd", { locale: ko }),
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

  /* 선택된 날짜이면 배경색을 오렌지로 변경하기 */
  function tileClassName({ date, view }: { date: Date; view: string }) {
    if (view === "month") {
      const event = myDiaries.find(
        (e) =>
          format(date, "yyyMMdd", { locale: ko }) ===
          format(e.date!.toString(), "yyyMMdd", { locale: ko }),
      );
      if (event) {
        return "tile-bg-orange";
      }
    }
    return null;
  }

  /* 선택된 날짜가 일기 작성이 가능한 날짜인지 (오늘로부터 6일 전까지 - 일주일이내 ) */
  const isWithInAWeek = (date: DateType) => {
    const now = new Date(); // 현재 날짜 및 시간
    const oneWeekAgo = subDays(now, 7); // 일주일 전

    return isWithinInterval(date as Date, {
      start: oneWeekAgo,
      end: now,
    });
  };

  const rightButtonType = () => {
    if (
      (isSelectedUse && !isWithInAWeek(selectedDay!)) ||
      (isSelectedUse && isHaveDiaryDay) ||
      (!isHaveDiaryDay && !isWithInAWeek(selectedDay))
    )
      return "disabled";
    else return "default";
  };

  return (
    <div>
      <Calendar
        calendarType="gregory"
        value={selectedDay}
        onChange={onChangeDay}
        formatDay={(_, date) => format(date, "dd")}
        tileContent={tileContent}
        tileClassName={tileClassName}
        next2Label={null}
        prev2Label={null}
      />
      <div
        className={`mx-auto flex justify-between ${isSelectedUse ? "my-1 w-full" : "my-8 w-[95%]"}`}
      >
        <CustomButton
          onClick={() => onChangeDay(new Date())}
          content="오늘로 이동"
          type="black"
          size={onRightClick ? "short" : "half"}
        />
        <div className="ml-1 flex flex-col">
          <CustomButton
            onClick={
              onRightClick
                ? () => onRightClick(selectedDay as Date)
                : handleDiaryButton
            }
            type={rightButtonType()}
            content={
              isSelectedUse
                ? "선택하기"
                : isHaveDiaryDay
                  ? "일기보기"
                  : "일기쓰기"
            }
            size={"middle"}
          />
          <pre className="h-7 text-center text-xs text-gray-600">
            {rightButtonType() === "disabled" && !isHaveDiaryDay
              ? "새로운 일기는 오늘로부터" + "\n" + "일주일 이내만 가능해요"
              : rightButtonType() === "disabled" && isHaveDiaryDay
                ? "이미 일기를 작성한 날이에요"
                : ""}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
