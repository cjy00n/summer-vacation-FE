import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { StarCountInImage } from "../common";

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
      className="relative flex flex-shrink-0 cursor-pointer flex-col"
    >
      <img
        loading={"lazy"}
        src={"https://" + image}
        className="h-[140px] w-[140px] rounded-lg object-cover"
      />
      <StarCountInImage like={like} />
    </div>
  );
};

export default HomeRecentBestDiaryItem;
