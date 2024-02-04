import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { StarCountInImage } from "../common";

interface FeedItemProps {
  image: string;
  like: number;
  idx: number;
  _id: string;
}

const FeedItem = ({ image, like, idx, _id }: FeedItemProps) => {
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
    return `${idx % 6 === 1 ? "w-[66vw] custom-breakpoint:w-[320px]" : "w-[33vw] custom-breakpoint:w-[160px]"} ${idx % 6 === 2 || idx % 6 === 4 ? "h-[66vw] custom-breakpoint:h-[320px]" : "h-[33vw] custom-breakpoint:h-[160px]"} `;
  };

  const linkToDetalPage = () => {
    navigate(ROUTE.FEED_DETAIL_PAGE.link + `/${_id}`);
  };

  return (
    <div
      className={`${getGridRatio()} relative cursor-pointer p-[1px] `}
      onClick={linkToDetalPage}
    >
      <img src={image} className={`${getSize()} object-cover`} loading="lazy" />
      <div
        className={`absolute top-0 bg-black bg-opacity-10 ${getSize()}`}
      ></div>
      <StarCountInImage like={like} />
    </div>
  );
};

export default FeedItem;
