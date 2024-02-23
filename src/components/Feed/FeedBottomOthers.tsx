import { useEffect, useState } from "react";
import {
  BookmarkIcon,
  FillBookmarkIcon,
  FillStarIcon,
  ShareIcon,
  StarIcon,
} from "../../assets/icons";
import { copyUrlToClipBoard } from "../../utils/copyUrlToClipBoard";
import { CircleButton, CustomButton } from "../common";
import { message } from "antd";
import { usePostBookmark } from "../../hooks/postBookmark";
import { useGetCheckBookmark } from "../../hooks/getCheckBookmark";
import { FeedStampMenu } from ".";
import { useGetCheckEmotion } from "../../hooks/getCheckEmotion";
import GetEmotionIcon from "../../assets/icons/emotions/GetEMotionIcon";
import { useGetCheckLike } from "../../hooks/getCheckLike";
import { usePostEmotion } from "../../hooks/postEmotion";
import { Emotion } from "../../types";
import { usePostLike } from "../../hooks/postLike";

interface FeedBottomOthersProps {
  feedId: string;
}

const FeedBottomOthers = ({ feedId }: FeedBottomOthersProps) => {
  const [isBookmark, setIsBookmark] = useState(false); // 북마크 여부
  const [isOpenLikeList, setIsOpenLikeList] = useState(false);
  const [currentLike, setCurrentLike] = useState<"star" | Emotion>();
  const [stampButtonIcon, setStampButtonIcon] = useState(<StarIcon />);

  const { mutate: postBookmark, data: postBookmarkResult } =
    usePostBookmark(feedId); // 북마크 post
  const { data: checkBookmark, refetch: refetchCheckBookmark } =
    useGetCheckBookmark(feedId); // 북마크 여부 get
  const { data: checkEmotion } = useGetCheckEmotion(feedId);
  const { data: checkLike } = useGetCheckLike(feedId);
  const { mutate: postLike } = usePostLike(feedId);
  const { mutate: postEmotion } = usePostEmotion(feedId);

  /* 해당 다이어리에 대한 본인의 좋아요/감정 여부 확인하여 참잘했어요 버튼 UI 처리 */
  useEffect(() => {
    if (checkLike === "alread checked") {
      setStampButtonIcon(<FillStarIcon fillColor="white" />);
      setCurrentLike("star");
    } else if (checkEmotion) {
      setStampButtonIcon(
        <GetEmotionIcon
          emotion={checkEmotion}
          fillColor="white"
          width={22}
          height={22}
        />,
      );
      setCurrentLike(checkEmotion);
    } else {
      setStampButtonIcon(<StarIcon />);
      setCurrentLike(undefined);
    }
  }, [checkEmotion, checkLike]);

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

  /* 참 잘했어요 리스트 토글 */
  const toggleLikeList = () => {
    setIsOpenLikeList(!isOpenLikeList);
  };

  /* 참 잘했어요 버튼 클릭 시 */
  const onStampButtonClick = () => {
    if (checkLike === "alread checked") {
      postLike();
    } else if (checkEmotion) {
      postEmotion(checkEmotion);
    } else {
      toggleLikeList();
    }
  };

  return (
    <div className="fixed bottom-bottom-tab left-[50%] z-10 flex w-[340px] -translate-x-1/2 transform items-center justify-between pb-2">
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
        type={currentLike ? "default" : "white"}
        size="middle"
        onClick={onStampButtonClick}
        content={
          <span
            className={`flex items-center justify-around px-10 ${currentLike ? "text-white" : "text-black"} mx-1 text-base font-medium`}
          >
            {stampButtonIcon} 참 잘했어요
          </span>
        }
      ></CustomButton>
      {isOpenLikeList && (
        <FeedStampMenu feedId={feedId} toggleLikeList={toggleLikeList} />
      )}
    </div>
  );
};

export default FeedBottomOthers;
