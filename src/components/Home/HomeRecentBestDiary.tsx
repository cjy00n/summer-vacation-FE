import { HomeDiaryItem, HomeDiaryItemSkeleton } from ".";
import { useGetPublicDiary } from "../../hooks/getPublicDiary";
import DraggableScrollContainer from "../common/DraggableScrollContainer";

const HomeRecentBestDiary = () => {
  const { data: bestDiaries, isLoading } = useGetPublicDiary();

  return (
    <div className="hide-scrollbar overflow-x-auto whitespace-nowrap">
      <DraggableScrollContainer>
        {isLoading ? (
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((_, idx) => (
              <HomeDiaryItemSkeleton key={"main recent skeletion" + idx} />
            ))}
          </div>
        ) : bestDiaries && bestDiaries.length > 0 ? (
          <>
            {bestDiaries.map((diary, idx) => (
              <HomeDiaryItem
                key={"my-diary-item-" + idx}
                image={diary.diary.imageUrl}
                like={diary.totalCount ?? 0}
                id={diary.diary.id}
              />
            ))}
          </>
        ) : (
          <div className="w-full py-10 text-center">
            작성된 일기가 없습니다.
          </div>
        )}
      </DraggableScrollContainer>
    </div>
  );
};

export default HomeRecentBestDiary;
