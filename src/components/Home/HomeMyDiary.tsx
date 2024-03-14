import { useRecoilState } from "recoil";
import { HomeDiaryItem, HomeDiaryItemSkeleton } from ".";
import { useGetMyDiaries } from "../../hooks/getMyDiaries";
import DraggableScrollContainer from "../common/DraggableScrollContainer";
import { isLoggedInState } from "../../recoil/atoms/isLoggedinState";

const HomeMyDiary = () => {
  const [isLoggedIn] = useRecoilState(isLoggedInState); // 로그인 여부
  const { data: myDiaries, isLoading } = useGetMyDiaries();

  return (
    <div className="hide-scrollbar overflow-x-auto whitespace-nowrap">
      <DraggableScrollContainer>
        {isLoggedIn ? (
          isLoading ? (
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((_, idx) => (
                <HomeDiaryItemSkeleton key={"home my skeletion" + idx} />
              ))}
            </div>
          ) : myDiaries && myDiaries.length > 0 ? (
            <>
              {myDiaries?.map(({ diary, likeCount }, idx) => (
                <HomeDiaryItem
                  key={"my-diary-item-" + idx}
                  image={diary.imageUrl}
                  like={likeCount}
                  id={diary.id}
                />
              ))}
            </>
          ) : (
            <div className="w-full py-10 text-center">
              작성된 일기가 없습니다.
            </div>
          )
        ) : (
          <div className="mx-auto my-auto flex flex-col py-8 text-center">
            <span className="opacity-80">로그인이 필요한 기능이에요.</span>
          </div>
        )}
      </DraggableScrollContainer>
    </div>
  );
};

export default HomeMyDiary;
