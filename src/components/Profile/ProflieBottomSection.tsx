import { useNavigate } from "react-router-dom";
import { ProfileMyDiary, ProfileTopTab } from ".";
import { ROUTE } from "../../routes/Route";
import { useState } from "react";
import { useGetMyBookmark } from "../../hooks/getMyBookmark";
import { Diary } from "../../types";

const ProfileBottomSection = ({ myDiaries }: { myDiaries: Diary[] }) => {
  const navigate = useNavigate();
  const [currentTab, setCurretTab] = useState<"My-Diary" | "Bookmark">(
    "My-Diary",
  );

  const { data: myBookmark } = useGetMyBookmark();

  /* 피드 상세 페이지로 이동 */
  const linkToDetailPage = (id: string) => {
    navigate(ROUTE.FEED_DETAIL_PAGE.link + `/${id}`);
  };

  return (
    <div>
      <ProfileTopTab currentTab={currentTab} setCurretTab={setCurretTab} />
      {currentTab === "My-Diary" ? (
        <div>
          {myDiaries && myDiaries.length > 0 ? (
            <ProfileMyDiary diaries={myDiaries} />
          ) : (
            <div className="w-full py-20 text-center">
              작성한 일기가 없습니다.
            </div>
          )}
        </div>
      ) : (
        <div className="flex">
          {myBookmark && myBookmark.length > 0 ? (
            myBookmark.map((item) => (
              <div
                key={"my-profile" + item.diary.id}
                className="relative h-[33vw] w-[33vw] cursor-pointer p-[1px] custom-breakpoint:h-[160px] custom-breakpoint:w-[160px]"
                onClick={() => linkToDetailPage(item.diary.id)}
              >
                <img
                  src={"https://" + item.diary.imageUrl}
                  className="h-full w-full object-cover"
                />
              </div>
            ))
          ) : (
            <div className="w-full py-20 text-center">
              북마크한 일기가 없습니다.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileBottomSection;
