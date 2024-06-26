import { useEffect } from "react";
import { FeedItem } from ".";
import { getPublicDiary } from "../../api/getPublicDiary";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import { Diary } from "../../types";

const FeedContainer = () => {
  const [ref, isView] = useInView();

  const fetchPublicData = async ({ pageParam = 1 }) => {
    const response = await getPublicDiary(pageParam);
    return response;
  };

  const {
    data: diaryData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery(["getPublicDiary"], fetchPublicData, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage && lastPage?.length > 0) return pages.length + 1;
      else return undefined;
    },
  });

  useEffect(() => {
    if (isView && hasNextPage) fetchNextPage();
  }, [diaryData, fetchNextPage, hasNextPage, isView]);

  const diaryItems =
    diaryData?.pages
      ?.flat()
      .map((item) => item)
      .filter(
        (item): item is { diary: Diary; totalCount: number } =>
          !!item && !!item.diary,
      ) ?? [];

  return (
    <div className="grid grid-flow-dense grid-cols-3 grid-rows-3">
      {isLoading
        ? Array.from({ length: 12 }).map((_, idx) => (
            <FeedItem idx={idx} key={"feedItem-skeleton" + idx} />
          ))
        : diaryItems.map(({ diary, totalCount }, idx) => (
            <FeedItem
              image={diary.imageUrl}
              idx={idx}
              like={totalCount}
              _id={diary.id}
              key={"feedItem" + diary.id}
            />
          ))}
      <div ref={ref} />
      {isFetchingNextPage &&
        Array.from({ length: 12 }).map((_, idx) => (
          <FeedItem idx={idx} key={"feedItem-skeleton" + idx} />
        ))}
    </div>
  );
};

export default FeedContainer;
