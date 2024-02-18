import { useEffect, useState } from "react";
import { BookmarkIcon, FillBookmarkIcon, ShareIcon } from "../../assets/icons";
import { copyUrlToClipBoard } from "../../utils/copyUrlToClipBoard";
import { CircleButton, CustomButton } from "../common";
import { message } from "antd";
import { usePostBookmark } from "../../hooks/postBookmark";
import { useGetCheckBookmark } from "../../hooks/getCheckBookmark";

interface FeedBottomOthersProps {
  onStampButtonClick: () => void;
  stampButtonIcon: React.ReactElement;
  isLike: boolean;
  feedId: string;
}

const FeedBottomOthers = ({
  onStampButtonClick,
  isLike,
  stampButtonIcon,
  feedId,
}: FeedBottomOthersProps) => {
  const [isBookmark, setIsBookmark] = useState(false); // 북마크 여부
  const { mutate: postBookmark, data: postBookmarkResult } =
    usePostBookmark(feedId); // 북마크 post
  const { data: checkBookmark, refetch: refetchCheckBookmark } =
    useGetCheckBookmark(feedId); // 북마크 여부 get

  /* 북마크 버튼 클릭 시 */
  const handleBookMark = () => {
    postBookmark();
  };

  /* 북마크 여부에 따라 북마크 아이콘 색상 변경 */
  useEffect(() => {
    if (checkBookmark != undefined) setIsBookmark(checkBookmark);
  }, [checkBookmark]);

  /* 북마크 post 후 결과 message 띄우기 */
  useEffect(() => {
    if (postBookmarkResult) {
      message.warning(postBookmarkResult);
      refetchCheckBookmark();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postBookmarkResult]);

  return (
    <div className="fixed bottom-[100px] left-[50%] z-10 flex w-[340px] -translate-x-1/2 transform justify-between">
      <CircleButton
        icon={<ShareIcon fillColor="white" />}
        onClick={copyUrlToClipBoard}
      />
      <CircleButton
        type="toggle"
        onClick={handleBookMark}
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
};

export default FeedBottomOthers;
