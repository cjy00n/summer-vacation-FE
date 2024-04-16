import { useEffect, useState } from "react";
import { KebabMenuIcon, LoadingIcon } from "../assets/icons";
import {
  FeedBottomMine,
  FeedBottomOthers,
  FeedDetailItem,
  FeedDetailMoreDrawer,
  FeedProgressBar,
} from "../components/Feed";
import { NotFound, PageBottomShadow, TopAppBar } from "../components/common";
import { DiaryDetail } from "../types";
import { useLocation, useParams } from "react-router-dom";
import { format } from "date-fns";
import { useGetDiary } from "../api/getDiary";
import { useGetUserInfo } from "../api/getMyUserInfo";
import { useGetCheckEmotion } from "../api/getCheckEmotion";
import { useGetCheckLike } from "../api/getCheckLike";

const FeedDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();

  const {
    data: diaryData,
    isLoading: isDiaryLoading,
    isError: isDiaryError,
  } = useGetDiary(id!);

  const {
    data: userInfo,
    isLoading: isUserInfoLoading,
    isError: isUserInfoError,
  } = useGetUserInfo();

  const { data: checkEmotion } = useGetCheckEmotion(id!);
  const { data: checkLike } = useGetCheckLike(id!);

  const [isMine, setIsMine] = useState(false); // 나의 일기인지 여부
  const [diary, setDiary] = useState<DiaryDetail>(); // 보여줄 일기 데이터

  const [isMoreDrawerOpen, setIsMoreDrawerOpen] = useState(false);

  useEffect(() => {
    if (userInfo && diaryData?.diary_userId) {
      const isMine = diaryData?.diary_userId === userInfo.id;
      setIsMine(isMine ? true : false);
    }
  }, [diaryData, userInfo]);

  useEffect(() => {
    if (diaryData) setDiary(diaryData);
  }, [diaryData]);

  /* 다른 사람의 글일 때 > 더보기 메뉴 토글 */
  const toggleMoreDrawer = () => {
    setIsMoreDrawerOpen(!isMoreDrawerOpen);
  };

  return isDiaryLoading || isUserInfoLoading ? (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      {<LoadingIcon />}
    </div>
  ) : isDiaryError || isUserInfoError ? (
    <div className="text-center">{<NotFound />}</div>
  ) : (
    diary && (
      <>
        <div className="relative mb-6 pb-20">
          <TopAppBar
            title={
              isMine
                ? format(diary.diary_date as Date, "yyy년 MM월 dd일")
                : "오늘의 일기"
            }
            leftGoBack
            rightIcon={<KebabMenuIcon />}
            rightOnClick={toggleMoreDrawer}
          />
          <FeedDetailItem
            diary={diary}
            like={diary.totalCount ?? 0}
            checkEmotion={checkEmotion}
            checkLike={checkLike}
          />
          {isMine ? (
            <FeedBottomMine
              diaryData={{
                title: diary.diary_title,
                contents: diary.diary_contents,
                emotion: diary.diary_emotion,
                id: diary.diary_id,
                weather: diary.diary_weather,
                date: diary.diary_date,
                imageUrl: diary.diary_imageUrl,
              }}
            />
          ) : (
            <FeedBottomOthers feedId={id!} />
          )}
        </div>
        <PageBottomShadow />
        {state && state.toNext && <FeedProgressBar />}
        <FeedDetailMoreDrawer
          id={id!}
          open={isMoreDrawerOpen}
          toggle={toggleMoreDrawer}
          isPublic={isMine ? diaryData?.diary_isPublic : null}
        />
      </>
    )
  );
};

export default FeedDetailPage;
