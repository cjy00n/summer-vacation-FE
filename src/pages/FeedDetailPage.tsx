import { useEffect, useState } from "react";
import { CloseIcon, KebabMenuIcon, LoadingIcon } from "../assets/icons";
import {
  FeedBottomMine,
  FeedBottomOthers,
  FeedDetailItem,
  FeedProgressBar,
} from "../components/Feed";
import { PageBottomShadow, TopAppBar } from "../components/common";
import { DiaryDetail } from "../types";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { Drawer, message } from "antd";
import { useGetDiary } from "../hooks/getDiary";
import { useGetUserInfo } from "../hooks/getMyUserInfo";

const FeedDetailPage = () => {
  const { id } = useParams<{ id: string }>();
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
    if (diaryData) {
      setDiary(diaryData);
    }
  }, [diaryData]);
  console.log(diaryData);

  /* 다른 사람의 글일 때 > 더보기 메뉴 토글 */
  const toggleMoreDrawer = () => {
    setIsMoreDrawerOpen(!isMoreDrawerOpen);
  };

  /* 신고하기 버튼 클릭 시 */
  const handleRepost = () => {
    message.warning("신고 기능은 현재 준비 중이에요.");
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
                ? format(diary.diary_date as Date, "yyy년 MM월 dd일")
                : "오늘의 일기"
            }
            leftGoBack
            rightIcon={<KebabMenuIcon />}
            rightOnClick={toggleMoreDrawer}
          />
          <FeedDetailItem diary={diary} like={diary.likeCount ?? 0} />

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
