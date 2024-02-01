import { BookmarkIcon, FillBookmarkIcon, ShareIcon } from "../../assets/icons";
import { CircleButton } from "../common";

interface FeedBottomOthersProps {
  toggleBookmark: () => void;
  isBookmark: boolean;
  onStampButtonClick: () => void;
  isLike: boolean;
  stampButtonIcon: React.ReactElement;
}

const FeedBottomOthers = ({
  toggleBookmark,
  isBookmark,
  onStampButtonClick,
  isLike,
  stampButtonIcon,
}: FeedBottomOthersProps) => {
  return (
    <div className="fixed z-10 bottom-[100px] left-[50%] transform -translate-x-1/2 flex w-[320px] justify-between">
      <CircleButton
        icon={<ShareIcon fillColor="white" />}
        onClick={() => console.log("준비중")}
      />
      <CircleButton
        type="toggle"
        onClick={toggleBookmark}
        icon={
          isBookmark ? (
            <FillBookmarkIcon width={20} height={16} fillColor="white" />
          ) : (
            <BookmarkIcon width={24} height={24} />
          )
        }
        toggle={isBookmark}
      />
      <button
        onClick={onStampButtonClick}
        className={`flex items-center justify-center shadow-lg ${isLike ? "bg-primary-orange" : "bg-white border-[1px] border-solid border-black"} w-[192px] h-12 rounded-[81px] `}
      >
        {stampButtonIcon}
        <span
          className={`${isLike ? "text-white" : "text-black"} font-medium text-base mx-1`}
        >
          참 잘했어요
        </span>
      </button>
    </div>
  );
};

export default FeedBottomOthers;
