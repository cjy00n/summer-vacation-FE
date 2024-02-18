import { BookmarkIcon, FillBookmarkIcon, ShareIcon } from "../../assets/icons";
import { copyUrlToClipBoard } from "../../utils/copyUrlToClipBoard";
import { CircleButton, CustomButton } from "../common";

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
}: FeedBottomOthersProps) => (
  <div className="fixed bottom-[100px] left-[50%] z-10 flex w-[340px] -translate-x-1/2 transform justify-between">
    <CircleButton
      icon={<ShareIcon fillColor="white" />}
      onClick={copyUrlToClipBoard}
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
    <CustomButton
      type={isLike ? "default" : "white"}
      size="middle"
      onClick={onStampButtonClick}
      content={
        <span
          className={`flex items-center justify-around px-10 ${isLike ? "text-white" : "text-black"} mx-1 text-base font-medium`}
        >
          {stampButtonIcon} 참 잘했어요
        </span>
      }
    ></CustomButton>
  </div>
);

export default FeedBottomOthers;
