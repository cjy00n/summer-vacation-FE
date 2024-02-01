import { FillStarIcon } from "../../assets/icons";

interface HomeRecentBestDiaryItemProps {
  img: string;
  like: number;
}

const HomeRecentBestDiaryItem = ({
  img,
  like,
}: HomeRecentBestDiaryItemProps) => {
  return (
    <div className="relative flex flex-col flex-shrink-0">
      <img src={img} className="w-[140px] h-[140px] object-cover rounded-lg" />
      <div className="flex items-center justify-center absolute bottom-1 left-1 w-16 h-6 bg-black bg-opacity-50 rounded-lg">
        <FillStarIcon width={20} height={20} fillColor="white" />
        <span className="text-white text-sm">{like.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default HomeRecentBestDiaryItem;