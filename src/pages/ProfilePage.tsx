import { ko } from "date-fns/locale";
import { AddPhotoIcon, EditIcon } from "../assets/icons";
import { TopAppBar } from "../components/common";
import { format } from "date-fns";

const ProfilePage = () => {
  const temp = [
    { img: "/sample.webp", date: new Date(), emotion: "기뻐요" },
    { img: "/sample.webp", date: new Date(), emotion: "기뻐요" },
    { img: "/sample.webp", date: new Date(), emotion: "기뻐요" },
    { img: "/sample.webp", date: new Date(), emotion: "기뻐요" },
    { img: "/sample.webp", date: new Date(), emotion: "기뻐요" },
  ];

  return (
    <>
      <TopAppBar title="프로필" />
      <div className="flex px-14 py-8 justify-between">
        <div className="flex bg-gray-80 w-20 h-20 rounded-full items-center justify-center">
          <AddPhotoIcon />
        </div>
        <div className="flex flex-col px-10">
          <div className="flex mb-2">
            <span className="text-base font-semibold">Nickname</span>
            <EditIcon fillColor="black" />
          </div>
          <span className="text-sm font-semibold">작성한 일기</span>
          <span>{temp.length.toLocaleString()}</span>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 py-4">
          {temp.map((item, idx) => (
            <div key={item.img + idx} className="relative p-[1px]">
              <img src={item.img} className="w-[33vw] h-[33vw] object-cover" />
              <span className="absolute left-1 bottom-1 text-xs font-semibold text-primary-white">
                {format(item.date, "MM/dd(eee)", { locale: ko })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
