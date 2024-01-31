import { useNavigate } from "react-router-dom";
import { FillStarIcon } from "../../assets/icons";
import { ROUTE } from "../../routes/Route";

interface FeedItemProps {
  img: string;
  like: number;
  idx: number;
  _id: string;
}

const FeedItem = ({ img, like, idx, _id }: FeedItemProps) => {
  const navigate = useNavigate();

  const getGridRatio = () => {
    switch (idx % 6) {
      case 0:
      case 3:
      case 5:
        return "col-span-1 row-span-1";
      case 1:
        return "col-span-2 row-span-1";

      case 2:
      case 4:
        return "col-span-1 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const getSize = () => {
    return `${idx % 6 === 1 ? "w-[66vw]" : "w-[33vw]"} ${idx % 6 === 2 || idx % 6 === 4 ? "h-[66vw]" : "h-[33vw]"} `;
  };

  const linkToDetalPage = () => {
    navigate(ROUTE.FEED_DETAIL_PAGE.link + `/${_id}`);
  };

  return (
    <div
      className={`${getGridRatio()} relative bg-white`}
      onClick={linkToDetalPage}
    >
      <img src={img} className={`${getSize()} object-cover`} loading="lazy" />
      <div
        className={`absolute top-0 bg-opacity-10 bg-black ${getSize()} `}
      ></div>
      <div className="absolute bottom-1 flex">
        <FillStarIcon width={20} height={20} fillColor="white" />
        <span className="text-primary-white text-xs font-bold ">
          {like.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default FeedItem;
