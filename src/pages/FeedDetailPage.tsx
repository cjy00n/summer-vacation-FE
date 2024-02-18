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
import { usePostLike } from "../hooks/postLike";
import { useGetUserInfo } from "../hooks/getMyUserInfo";
import { usePostEmotion } from "../hooks/postEmotion";
import { useGetCheckEmotion } from "../hooks/getEmotion";

const FeedDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: diaryData,
    isLoading: isDiaryLoading,
    isError: isDiaryError,
    refetch: refetchDiary,
  } = useGetDiary(id!);

  const {
    data: userInfo,
    isLoading: isUserInfoLoading,
    isError: isUserInfoError,
  } = useGetUserInfo();

  const { data: checkEmotion } = useGetCheckEmotion(id!);
  console.log(checkEmotion);

  const [isMine, setIsMine] = useState(false); // 나의 일기인지 여부
  const [diary, setDiary] = useState<Diary>(); // 보여줄 일기 데이터

  const [isOpenLikeList, setIsOpenLikeList] = useState(false); // 참잘했어요 모달 오픈 여부
  const [isLike, setIsLike] = useState(false); // 참잘했어요 여부
  const [isMoreDrawerOpen, setIsMoreDrawerOpen] = useState(false);
  const [stampButtonIcon, setStampButtonIcon] = useState(<StarIcon />);

  useEffect(() => {
    if (userInfo && diaryData?.userId) {
      const isMine = diaryData?.userId === userInfo.id;
      setIsMine(isMine ? true : false);
    }
  }, [diaryData, userInfo]);

  useEffect(() => {
    if (diaryData) {
      setDiary(diaryData);
    }
  }, [diaryData]);

  // 임시 감정 데이터
  const [like1, like2, like3, like4, like5] = [10, 20, 30, 40, 50];

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

  const { mutate: postLike } = usePostLike(id!);
  const { mutate: postEmotion } = usePostEmotion(id!);

  // 참잘했어요 버튼 클릭 후, 공감 리스트에서 각각의 버튼 클릭 시
  const handleLikeButton = (type: Emotion | "star") => {
    toggleLike();
    toggleLikeList();
    setIsLike(true);

    if (type === "star") {
      postLike();
      refetchDiary();
    } else {
      postEmotion(type);
      refetchDiary();
    }

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
            diary={diary}
            like={diary.likeCount ?? 0}
            isLike={isLike}
          />

          {isOpenLikeList && (
            <FeedStampMenu
              like={diary.likeCount ?? 0}
              likes={likeNumbers}
              handleLikeButton={handleLikeButton}
            />
          )}
          {isMine ? (
            <FeedBottomMine diaryData={diary} />
          ) : (
            <FeedBottomOthers
              feedId={id!}
              isLike={isLike}
              onStampButtonClick={onStampButtonClick}
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
