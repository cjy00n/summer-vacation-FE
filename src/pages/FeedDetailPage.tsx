import { useState } from "react";
import { FillStarIcon, KebabMenuIcon, StarIcon } from "../assets/icons";
import {
  FeedBottomMine,
  FeedBottomOthers,
  FeedDetailItem,
  FeedProgressBar,
  FeedStampMenu,
} from "../components/Feed";
import { PageBottomShadow, TopAppBar } from "../components/common";
import { Emotion } from "../types";
import GetEmotionIcon from "../assets/icons/emotions/GetEMotionIcon";
import { EmotionData, WeatherData } from "../assets/data";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { message } from "antd";

const FeedDetailPage = () => {
  // 임시로, state에 내 글인지 아닌지 담아서 받음
  let isMine = false;

  const { state } = useLocation();
  if (state?.isMine) isMine = true;

  const [messageApi, contextHolder] = message.useMessage();

  // 피드데이터 (임시)
  const feedData = {
    date: new Date(),
    weather: WeatherData[2],
    emotion: EmotionData[1],
    image:
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
    image,
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  const toggleLikeList = () => {
    setIsOpenLikeList(!isOpenLikeList);
  };

  const toggleLike = () => {
    setIsLike(!isLike);
  };

  const handleBookMark = () => {
    messageApi.warning("북마크 기능은 현재 준비 중이에요.");
    // toggleBookmark();
  };

  // 참 잘했어요 버튼 클릭 시
  const onStampButtonClick = () => {
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
        <GetEmotionIcon
          emotion={type}
          fillColor="white"
          width={22}
          height={22}
        />
      ),
    );
  };

  return (
    <>
      <div className="relative mb-6 pb-20">
        <TopAppBar
          title={isMine ? format(date, "yyy년 MM월 dd일") : "오늘의 일기"}
          leftGoBack
          rightIcon={<KebabMenuIcon />}
        />
        <FeedDetailItem
          title={title}
          date={date}
          weather={weather}
          emotion={emotion}
          image={image}
          contents={content}
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
        {isMine ? (
          <FeedBottomMine />
        ) : (
          <FeedBottomOthers
            isBookmark={isBookmark}
            isLike={isLike}
            onStampButtonClick={onStampButtonClick}
            toggleBookmark={handleBookMark}
            stampButtonIcon={stampButtonIcon}
          />
        )}
      </div>
      <PageBottomShadow />
      {!isMine && <FeedProgressBar />}
      {contextHolder}
    </>
  );
};

export default FeedDetailPage;
