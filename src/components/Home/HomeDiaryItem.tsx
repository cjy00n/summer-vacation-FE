import { useNavigate } from "react-router-dom";
import { FillStarIcon } from "../../assets/icons";
import { ROUTE } from "../../routes/Route";

interface HomeRecentBestDiaryItemProps {
  image: string;
  like: number;
  id: string;
}

const HomeRecentBestDiaryItem = ({
  image,
  like,
  id,
}: HomeRecentBestDiaryItemProps) => {
  const navigate = useNavigate();
  const linkToDetailPage = () => {
    navigate(ROUTE.FEED_DETAIL_PAGE.link + `/${id}`, {
      state: { isMine: true },
    });
  };

  return (
    <div
      onClick={linkToDetailPage}
      className="relative flex flex-shrink-0 flex-col"
    >
      <img
        src={image}
        className="h-[140px] w-[140px] rounded-lg object-cover"
      />
      <div className="absolute bottom-1 left-1 flex h-6 w-16 items-center justify-center rounded-lg bg-black bg-opacity-50">
        <FillStarIcon width={20} height={20} fillColor="white" />
        <span className="text-sm text-white">{like.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default HomeRecentBestDiaryItem;
