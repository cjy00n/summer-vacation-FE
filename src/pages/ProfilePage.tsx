import { ko } from "date-fns/locale";
import { AddPhotoIcon, EditIcon } from "../assets/icons";
import { TopAppBar } from "../components/common";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { Diary } from "../types";

const ProfilePage = () => {
  const navigate = useNavigate();

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
      date: new Date("2024-02-03"),
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
      date: new Date("2023-12-31"),
      emotion: "기뻐요",
      weather: "맑음",
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
      const key = format(item.date as Date, "yy년 MM월");
      if (!obj[key]) obj[key] = [];
      obj[key].push(item);
    });
    return obj;
  };

  console.log(classifyByMonth(temp));
  const classifiedDiaries = classifyByMonth(temp);

  /* 피드 상세 페이지로 이동 */
  const linkToDetailPage = (id: string) => {
    navigate(ROUTE.FEED_DETAIL_PAGE.link + id);
  };

  return (
    <>
      <TopAppBar title="프로필" />
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
        <div className="py-4">
          {Object.keys(classifiedDiaries).map((key) => (
            <div className="my-2" key={key}>
              <span>{key}</span>
              {classifiedDiaries[key].map(({ image, id, date }, idx) => (
                <div
                  key={"profileFeedItem" + id + idx}
                  className="relative grid grid-cols-3 p-[1px]"
                  onClick={() => linkToDetailPage(id)}
                >
                  <img src={image} className="h-[33vw] w-[33vw] object-cover" />
                  <span className="absolute bottom-1 left-1 text-xs font-semibold text-primary-white">
                    {format(date as Date, "MM/dd(eee)", { locale: ko })}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
