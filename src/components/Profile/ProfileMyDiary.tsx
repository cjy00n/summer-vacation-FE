import { format } from "date-fns";
import { Diary } from "../../types";
import GetEmotionIcon from "../../assets/icons/emotions/GetEMotionIcon";
import GetWeatherIcon from "../../assets/icons/weather/GetWeatherIcon";
import { ko } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";

const ProfileMyDiary = ({ diaries }: { diaries: Diary[] }) => {
  const navigate = useNavigate();

  const classifiedDiaries = classifiedDiariesByMonth();

  function classifiedDiariesByMonth(): { [key: string]: Diary[] } {
    const obj: { [key: string]: Diary[] } = {};
    diaries.forEach((item: Diary) => {
      const key = format(item.date as Date, "yyyy년 MM월");
      if (!obj[key]) obj[key] = [];
      obj[key].push(item);
    });
    return obj;
  }

  /* 피드 상세 페이지로 이동 */
  const linkToDetailPage = (id: string) => {
    navigate(ROUTE.FEED_DETAIL_PAGE.link + `/${id}`);
  };

  return (
    Object.keys(classifiedDiaries).length > 0 &&
    Object.keys(classifiedDiaries).map((key) => (
      <div className="" key={key}>
        <span className="flex items-center p-3 text-base font-semibold">
          {key}
        </span>
        <div className="grid grid-cols-3">
          {classifiedDiaries[key].map(
            ({ image, id, date, emotion, weather }, idx) => (
              <div
                key={"profileFeedItem" + id + idx}
                className="relative h-[33vw] w-[33vw] cursor-pointer p-[1px] custom-breakpoint:h-[160px] custom-breakpoint:w-[160px]"
                onClick={() => linkToDetailPage(id)}
              >
                <img src={image} className="h-full w-full object-cover" />
                <div className="absolute bottom-1 left-1 flex w-[80%] items-center justify-around rounded-md bg-black bg-opacity-35 px-1">
                  <span className="text-sm font-semibold text-primary-white">
                    {format(date as Date, "dd(eee)", { locale: ko })} |
                  </span>
                  <span>
                    <GetWeatherIcon weather={weather} fillColor="white" />
                  </span>
                  <span>
                    <GetEmotionIcon emotion={emotion} fillColor="white" />
                  </span>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    ))
  );
};

export default ProfileMyDiary;
