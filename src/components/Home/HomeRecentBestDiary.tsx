import { HomeDiaryItem } from ".";
import { LoadingIcon } from "../../assets/icons";
import { useGetPublicDiary } from "../../hooks/getPublicDiary";
import DraggableScrollContainer from "../common/DraggableScrollContainer";

const HomeRecentBestDiary = () => {
  const { data: bestDiaries, isLoading } = useGetPublicDiary();

  return (
    <div className="hide-scrollbar flex flex-row gap-2 overflow-x-auto whitespace-nowrap">
      {isLoading ? (
        <div>
          <LoadingIcon />
        </div>
      ) : bestDiaries && bestDiaries.length > 0 ? (
        <DraggableScrollContainer>
          {bestDiaries.map((diary, idx) => (
            <HomeDiaryItem
              key={"my-diary-item-" + idx}
              image={diary.diary.imageUrl}
              like={diary.totalCount ?? 0}
              id={diary.diary.id}
            />
          ))}
        </DraggableScrollContainer>
      ) : (
        <div className="w-full py-10 text-center">작성된 일기가 없습니다.</div>
      )}
    </div>
  );
};

export default HomeRecentBestDiary;
