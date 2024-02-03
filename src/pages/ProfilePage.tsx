import { ko } from "date-fns/locale";
import { AddPhotoIcon, EditIcon, KebabMenuIcon } from "../assets/icons";
import { TopAppBar } from "../components/common";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { Diary } from "../types";
import GetEmotionIcon from "../assets/icons/emotions/GetEMotionIcon";
import GetWeatherIcon from "../assets/icons/weather/GetWeatherIcon";
import { useGetUserInfo } from "../hooks/getMyUserInfo";

const ProfilePage = () => {
  const navigate = useNavigate();
  const data = useGetUserInfo();
  console.log(data);

  const temp: Diary[] = [
    {
      id: "1",
      image: "/sample.webp",
      date: new Date("2024-01-23"),
      emotion: "기뻐요",
      weather: "맑음",
      title: "오늘의 일기",
      contents: "오늘의 일기입니다",
      isWrite: 1,
      isPublic: 1,
      createdAt: new Date(),
    },
    {
      id: "1",
      image: "/sample.webp",
      date: new Date("2024-01-03"),
      emotion: "화나요",
      weather: "맑음",
      title: "오늘의 일기",
      contents: "오늘의 일기입니다",
      isWrite: 1,
      isPublic: 1,
      createdAt: new Date(),
    },
    {
      id: "1",
      image: "/sample.webp",
      date: new Date("2024-02-03"),
      emotion: "좋아요",
      weather: "맑음",
      title: "오늘의 일기",
      contents: "오늘의 일기입니다",
      isWrite: 1,
      isPublic: 1,
      createdAt: new Date(),
    },
    {
      id: "1",
      image: "/sample.webp",
      date: new Date("2023-12-31"),
      emotion: "기뻐요",
      weather: "천둥",
      title: "오늘의 일기",
      contents: "오늘의 일기입니다",
      isWrite: 1,
      isPublic: 1,
      createdAt: new Date(),
    },
  ];

  /* 년/월별로 분류해서 객체로 리턴 */
  const classifyByMonth = (items: Diary[]) => {
    const obj: { [key: string]: Diary[] } = {};
    items.forEach((item) => {
      const key = format(item.date as Date, "yyyy년 MM월");
      if (!obj[key]) obj[key] = [];
      obj[key].push(item);
    });
    return obj;
  };

  console.log(classifyByMonth(temp));
  const classifiedDiaries = classifyByMonth(temp);

  /* 피드 상세 페이지로 이동 */
  const linkToDetailPage = (id: string) => {
    navigate(ROUTE.FEED_DETAIL_PAGE.link + `/${id}`);
  };

  return (
    <>
      <TopAppBar title="프로필" rightIcon={<KebabMenuIcon />} />
      <div className="flex justify-between px-14 py-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-80">
          <AddPhotoIcon />
        </div>
        <div className="flex flex-col px-10">
          <div className="mb-2 flex">
            <span className="text-base font-semibold">Nickname</span>
            <EditIcon fillColor="black" />
          </div>
          <span className="text-sm font-semibold">작성한 일기</span>
          <span>{temp.length.toLocaleString()}</span>
        </div>
      </div>
      <div>
        <div className="bg-primary-orange px-3 py-3 text-lg font-bold text-primary-white">
          내 일기
        </div>
        <div className="bg-gray-90">
          {Object.keys(classifiedDiaries).map((key) => (
            <div className="" key={key}>
              <span className="flex items-center p-3 text-base font-semibold">
                {key}
              </span>
              <div className="grid grid-cols-3">
                {classifiedDiaries[key].map(
                  ({ image, id, date, emotion, weather }, idx) => (
                    <div
                      key={"profileFeedItem" + id + idx}
                      className="relative h-[33vw] w-[33vw] p-[1px]"
                      onClick={() => linkToDetailPage(id)}
                    >
                      <img
                        src={image}
                        className="h-[33vw] w-[33vw] object-cover"
                      />
                      <div className="absolute bottom-1 left-1 flex w-[25vw] items-center justify-around bg-black bg-opacity-35 px-1">
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
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
