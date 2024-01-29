import { HomeContentItem } from ".";
import { FillStarIcon } from "../../assets/icons";

interface HomeMyDiaryItemProps {
  img: string;
  like: number;
}

const HomeMyDiaryItem = ({ img, like }: HomeMyDiaryItemProps) => {
  return (
    <div className="flex flex-col flex-shrink-0">
      <img src={img} className="w-[140px] h-[140px] object-cover rounded-lg" />
      <HomeContentItem
        icon={<FillStarIcon width={20} height={20} fillColor="black" />}
        content={like.toLocaleString()}
      />
    </div>
  );
};

export default HomeMyDiaryItem;
