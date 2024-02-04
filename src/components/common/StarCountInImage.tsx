import { FillStarIcon } from "../../assets/icons";

const StarCountInImage = ({ like }: { like: number }) => (
  <div className="absolute bottom-2 left-2 flex w-16 items-center justify-between rounded-xl bg-black bg-opacity-50 px-2 py-1">
    <FillStarIcon width={20} height={20} fillColor="white" />
    <span
      className={`${like >= 1000 ? "" : "px-1"} text-xs font-bold text-primary-white`}
    >
      {like.toLocaleString()}
    </span>
  </div>
);

export default StarCountInImage;
