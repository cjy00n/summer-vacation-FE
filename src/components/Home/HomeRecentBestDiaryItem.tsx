import { HomeContentItem } from ".";
import { FillStarIcon, PersonIcon } from "../../assets/icons";

interface HomeRecentBestDiaryItemProps {
  img: string;
  like: number;
  nickname: string;
}

const HomeRecentBestDiaryItem = ({
  img,
  like,
  nickname,
}: HomeRecentBestDiaryItemProps) => {
  return (
    <div className="flex flex-col flex-shrink-0">
      <img src={img} className="w-[140px] h-[140px] object-cover rounded-lg" />{" "}
      <HomeContentItem
        icon={<FillStarIcon width={20} height={20} fillColor="black" />}
        content={like.toLocaleString()}
      />
      <HomeContentItem
        icon={<PersonIcon width={20} height={20} fillColor="black" />}
        content={nickname}
      />
    </div>
  );
};

export default HomeRecentBestDiaryItem;
