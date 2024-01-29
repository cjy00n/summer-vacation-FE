import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarIcon, FillStarIcon, PersonIcon } from "../../assets/icons";
import { HomeContentItem } from ".";

interface HomeContestItemProps {
  ranking: number;
  img: string;
  like: number;
  nickname: string;
  date: Date;
}

const HomeContestItem = ({
  ranking,
  img,
  like,
  nickname,
  date,
}: HomeContestItemProps) => {
  return (
    <div className="flex flex-col flex-shrink-0">
      <div className="relative">
        <img
          src={img}
          className="w-[320px] h-[320px] object-cover rounded-lg"
        />
        <span className="absolute top-0 left-0 p-2 text-white text-lg font-bold">
          {ranking}등
        </span>
      </div>
      <HomeContentItem
        icon={<FillStarIcon width={20} height={20} fillColor="black" />}
        content={like.toLocaleString()}
      />
      <HomeContentItem
        icon={<PersonIcon width={20} height={20} fillColor="black" />}
        content={nickname}
      />
      <HomeContentItem
        icon={<CalendarIcon width={20} height={20} fillColor="black" />}
        content={format(date, "yy.MM.dd", { locale: ko })}
      />
    </div>
  );
};

export default HomeContestItem;
