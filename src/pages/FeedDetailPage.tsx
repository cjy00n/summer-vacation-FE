import { useState } from "react";
import {
  BookmarkIcon,
  FillBookmarkIcon,
  FillStarIcon,
  KebabMenuIcon,
  ShareIcon,
  StarIcon,
} from "../assets/icons";
import { FeedDetailItem, FeedStampMenu } from "../components/Feed";
import { PageBottomShadow, TopAppBar } from "../components/common";
import { Emotion } from "../types";
import GetEmotionIcon from "../assets/icons/emotions/GetEMotionIcon";
import { EmotionData, WeatherData } from "../assets/data";

const FeedDetailPage = () => {
  // 피드데이터 (임시)
  const feedData = {
    date: new Date(),
    weather: WeatherData[2],
    emotion: EmotionData[1],
    imgUrl:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzAyMTZfMTc1/MDAxNDg3MjA1NDE1MjY2.QH0KN_iUDKx8OviOiSe7xyfQAnITCeqMf7VW0RIDTcEg.AXQnn3XzvjDksNaSNvQh30tEN5DD0xB1q_iropXRCgQg.JPEG.narospacemuseum/%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C%EC%95%84%EC%9B%832.jpg?type=w800",
    title: "오늘의 일기오늘의 일기오늘의 일기오늘의",
    content:
      "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세.",
    like: 1000,
    like1: 1212,
    like2: 1313,
    like3: 1414,
    like4: 1515,
    like5: 1616,
  };

  const {
    date,
    weather,
    emotion,
    imgUrl,
    title,
    content,
    like,
    like1,
    like2,
    like3,
    like4,
    like5,
  } = feedData;

  const [isOpenLikeList, setIsOpenLikeList] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const [stampButtonIcon, setStampButtonIcon] = useState(<StarIcon />);

  const toggleBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  const toggleLikeList = () => {
    setIsOpenLikeList(!isOpenLikeList);
  };

  const toggleLike = () => {
    setIsLike(!isLike);
  };

  // 참 잘했어요 버튼 클릭 시
  const handleStampButton = () => {
    if (isLike) {
      setIsLike(!isLike);
      setStampButtonIcon(<StarIcon />);
    } else {
      toggleLikeList();
    }
  };
  const likeNumbers = [like1, like2, like3, like4, like5];

  // 참잘했어요 버튼 클릭 후, 공감 리스트에서 각각의 버튼 클릭 시
  const handleLikeButton = (type: Emotion | "star") => {
    toggleLike();
    toggleLikeList();
    setIsLike(true);
    // 여기에 백엔드 api 붙이기
    setStampButtonIcon(
      type === "star" ? (
        <FillStarIcon fillColor="white" />
      ) : (
        <GetEmotionIcon emotion={type} fillColor="white" />
      ),
    );
  };

  return (
    <>
      <div className="relative mb-6 pb-20">
        <TopAppBar
          title="오늘의 일기"
          leftGoBack
          rightIcon={<KebabMenuIcon />}
        />
        <FeedDetailItem
          title={title}
          date={date}
          weather={weather}
          emotion={emotion}
          imgUrl={imgUrl}
          content={content}
          like={like}
          isLike={isLike}
        />
        {isOpenLikeList && (
          <FeedStampMenu
            like={like}
            likes={likeNumbers}
            handleLikeButton={handleLikeButton}
          />
        )}
        <div className="fixed z-10 bottom-[100px] left-[50%] transform -translate-x-1/2 flex w-[320px] justify-between">
          <button className="flex items-center justify-center shadow-lg bg-black w-12 h-12 rounded-[81px]">
            <ShareIcon width={24} height={24} fillColor="white" />
          </button>
          <button
            onClick={toggleBookmark}
            className={`flex items-center justify-center shadow-lg w-12 h-12 rounded-[81px] ${isBookmark ? "bg-black" : "bg-white border-[1px] border-solid border-black"}`}
          >
            {isBookmark ? (
              <FillBookmarkIcon width={20} height={16} fillColor="white" />
            ) : (
              <BookmarkIcon width={24} height={24} />
            )}
          </button>
          <button
            onClick={handleStampButton}
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
      </div>
      <PageBottomShadow />
    </>
  );
};

export default FeedDetailPage;
