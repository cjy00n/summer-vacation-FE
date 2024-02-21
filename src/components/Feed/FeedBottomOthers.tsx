import { useEffect, useState } from "react";
import {
  BookmarkIcon,
  FillBookmarkIcon,
  // FillStarIcon,
  ShareIcon,
  StarIcon,
} from "../../assets/icons";
import { copyUrlToClipBoard } from "../../utils/copyUrlToClipBoard";
import { CircleButton, CustomButton } from "../common";
import { message } from "antd";
import { usePostBookmark } from "../../hooks/postBookmark";
import { useGetCheckBookmark } from "../../hooks/getCheckBookmark";
import { FeedStampMenu } from ".";
import { useGetCheckEmotion } from "../../hooks/getEmotion";
import GetEmotionIcon from "../../assets/icons/emotions/GetEMotionIcon";
// import { Emotion } from "../../types";

interface FeedBottomOthersProps {
  feedId: string;
}

const FeedBottomOthers = ({ feedId }: FeedBottomOthersProps) => {
  const [isBookmark, setIsBookmark] = useState(false); // 북마크 여부
  const [isOpenLikeList, setIsOpenLikeList] = useState(false);

  const [stampButtonIcon, setStampButtonIcon] = useState(<StarIcon />);

  const [isLike, setIsLike] = useState(false); // 참잘했어요 여부
  const { mutate: postBookmark, data: postBookmarkResult } =
    usePostBookmark(feedId); // 북마크 post
  const { data: checkBookmark, refetch: refetchCheckBookmark } =
    useGetCheckBookmark(feedId); // 북마크 여부 get
  const { data: checkEmotion } = useGetCheckEmotion(feedId);
  console.log(checkEmotion);

  useEffect(() => {
    if (checkEmotion) {
      setStampButtonIcon(
        // checkEmotion === "star" ? (
        //   <FillStarIcon fillColor="white" />
        // ) : (
        <GetEmotionIcon
          emotion={checkEmotion}
          fillColor="white"
          width={22}
          height={22}
        />,
        // ),
      );
    }
  }, [checkEmotion]);

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

  const toggleLikeList = () => {
    setIsOpenLikeList(!isOpenLikeList);
  };

  /* 참 잘했어요 버튼 클릭 시 */
  const onStampButtonClick = () => {
    if (isLike) {
      setIsLike(!isLike);
      setStampButtonIcon(<StarIcon />);
    } else {
      toggleLikeList();
    }
  };

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
        type={stampButtonIcon ? "default" : "white"}
        size="middle"
        onClick={onStampButtonClick}
        content={
          <span
            className={`flex items-center justify-around px-10 ${stampButtonIcon ? "text-white" : "text-black"} mx-1 text-base font-medium`}
          >
            {stampButtonIcon} 참 잘했어요
          </span>
        }
      ></CustomButton>
      {isOpenLikeList && (
        <FeedStampMenu id={feedId} toggleLikeList={toggleLikeList} />
      )}
    </div>
  );
};

export default FeedBottomOthers;
