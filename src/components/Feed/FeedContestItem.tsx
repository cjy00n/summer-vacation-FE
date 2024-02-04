import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarIcon, FillStarIcon, PersonIcon } from "../../assets/icons";
import { HomeContentItem } from "../Home";

interface FeedContestItemProps {
  ranking: number;
  img: string;
  like: number;
  nickname: string;
  date: Date;
}

const FeedContestItem = ({
  ranking,
  img,
  like,
  nickname,
  date,
}: FeedContestItemProps) => {
  return (
    <div className="flex flex-shrink-0 cursor-pointer flex-col">
      <div className="relative">
        <img
          src={img}
          className="bg-custom-gradient h-[300px] w-[300px] rounded-lg object-cover"
        />
        <div className="absolute top-0 h-[300px] w-[300px] bg-black bg-opacity-5"></div>
        <span className="absolute left-0 top-0 p-2 text-lg font-bold text-white">
          {ranking}등
        </span>
        <div className="absolute bottom-0 w-[300px] rounded-b-lg bg-[#474645] bg-opacity-80 p-2">
          <HomeContentItem
            icon={<FillStarIcon width={20} height={20} fillColor="white" />}
            content={like.toLocaleString()}
          />
          <HomeContentItem
            icon={<PersonIcon width={20} height={20} fillColor="white" />}
            content={nickname}
          />
          <HomeContentItem
            icon={<CalendarIcon width={20} height={20} fillColor="white" />}
            content={format(date, "yy.MM.dd", { locale: ko })}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedContestItem;
