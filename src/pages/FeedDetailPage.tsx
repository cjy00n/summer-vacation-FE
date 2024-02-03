import { useState } from "react";
import {
  CloseIcon,
  FillStarIcon,
  KebabMenuIcon,
  StarIcon,
} from "../assets/icons";
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
import { useLocation, useParams } from "react-router-dom";
import { format } from "date-fns";
import { Drawer, message } from "antd";
import { useGetDiary } from "../hooks/getDiary";

const FeedDetailPage = () => {
  // 임시로, state에 내 글인지 아닌지 담아서 받음
  let isMine = false;

  const { state } = useLocation();
  if (state?.isMine) isMine = true;

  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetDiary(id ?? "0");

  const like = 5000;
  const like1 = 700;
  const like2 = 1100;
  const like3 = 1200;
  const like4 = 600;
  const like5 = 400;

  const [isOpenLikeList, setIsOpenLikeList] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const [isMoreDrawerOpen, setIsMoreDrawerOpen] = useState(false);
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

  /* 다른 사람의 글일 때 > 더보기 메뉴 토글 */
  const toggleMoreDrawer = () => {
    setIsMoreDrawerOpen(!isMoreDrawerOpen);
  };

  /* 신고하기 버튼 클릭 시 */
  const handleRepost = () => {
    message.warning("신고 기능은 현재 준비 중이에요.");
  };
  /* 북마크 버튼 클릭 시 */
  const handleBookMark = () => {
    message.warning("북마크 기능은 현재 준비 중이에요.");
    toggleBookmark();
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;
  if (!data) return <div>No data found</div>;
  else {
    const { title, contents, image, date, emotion, weather, isPublic } = data;
    return (
      <>
        <div className="relative mb-6 pb-20">
          <TopAppBar
            title={
              isMine ? format(date as Date, "yyy년 MM월 dd일") : "오늘의 일기"
            }
            leftGoBack
            rightIcon={<KebabMenuIcon />}
            rightOnClick={toggleMoreDrawer}
          />
          <FeedDetailItem
            title={title}
            date={date}
            weather={weather}
            emotion={emotion}
            image={image}
            contents={contents}
            like={like}
            isLike={isLike}
            isPublic={isPublic ? 1 : 0}
            isWrite={1}
          />

          {isOpenLikeList && (
            <FeedStampMenu
              like={like}
              likes={likeNumbers}
              handleLikeButton={handleLikeButton}
            />
          )}
          {isMine ? (
            <FeedBottomMine id={id!} />
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

        <Drawer
          open={isMoreDrawerOpen}
          placement="bottom"
          title="더 보기"
          closeIcon={<CloseIcon />}
          onClose={toggleMoreDrawer}
          height={230}
          style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
        >
          <button onClick={handleRepost}>신고하기</button>
        </Drawer>
      </>
    );
  }
};

export default FeedDetailPage;
