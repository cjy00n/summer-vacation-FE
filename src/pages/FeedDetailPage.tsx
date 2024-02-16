import { useEffect, useState } from "react";
import {
  CloseIcon,
  FillStarIcon,
  KebabMenuIcon,
  LoadingIcon,
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
import { Diary, Emotion } from "../types";
import GetEmotionIcon from "../assets/icons/emotions/GetEMotionIcon";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { Drawer, message } from "antd";
import { useGetDiary } from "../hooks/getDiary";
import { useGetMyDiaries } from "../hooks/getMyDiaries";

const FeedDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: diaryData,
    isLoading: isDiaryLoading,
    isError: isDiaryError,
  } = useGetDiary(id ?? "0");
  const {
    data: myDiaries,
    isLoading: isUserInfoLoading,
    isError: isUserInfoError,
  } = useGetMyDiaries();
  const [isMine, setIsMine] = useState(false); // 나의 일기인지 여부
  const [diary, setDiary] = useState<Diary>();
  console.log(diary);

  useEffect(() => {
    if (myDiaries && diaryData) {
      // 내가 작성한 모든 일기의 아이디와 현재 페이지의 아이디가 같은 것을 찾고, 있으면 isMine을 true로
      const isMine = myDiaries.find((item) => item.id === diaryData.id);
      setIsMine(isMine ? true : false);
    }
  }, [diaryData, myDiaries]);

  useEffect(() => {
    if (diaryData) {
      setDiary(diaryData);
    }
  }, [diaryData]);

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

  return isDiaryLoading || isUserInfoLoading ? (
    <div>{<LoadingIcon />}</div>
  ) : isDiaryError || isUserInfoError ? (
    <div>데이터를 불러오는 중 에러가 발생했습니다.</div>
  ) : (
    diary && (
      <>
        <div className="relative mb-6 pb-20">
          <TopAppBar
            title={
              isMine
                ? format(diary.date as Date, "yyy년 MM월 dd일")
                : "오늘의 일기"
            }
            leftGoBack
            rightIcon={<KebabMenuIcon />}
            rightOnClick={toggleMoreDrawer}
          />
          <FeedDetailItem
            title={diary.title}
            date={diary.date}
            weather={diary.weather}
            emotion={diary.emotion}
            imageUrl={diary.imageUrl}
            contents={diary.contents}
            like={like}
            isLike={isLike}
            isPublic={diary.isPublic ? 1 : 0}
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
            <FeedBottomMine diaryData={diary} />
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
    )
  );
};

export default FeedDetailPage;
