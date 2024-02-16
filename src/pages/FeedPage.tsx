import { useRecoilState } from "recoil";
import { FeedContest, FeedItem } from "../components/Feed";
import { TopAppBar } from "../components/common";
import { bottomTabState } from "../recoil/atoms/bottomTabState";
import { useEffect } from "react";
import { useGetPublicDiary } from "../hooks/getPublicDiary";
import TopLogoIcon from "../assets/icons/TopLogoIcon";
import FeedTitle from "../components/Feed/FeedTitle";

const FeedPage = () => {
  const [, setActiveBottomTab] = useRecoilState(bottomTabState);

  const { data: publicDiaries } = useGetPublicDiary();
  console.log(publicDiaries);

  useEffect(() => {
    setActiveBottomTab("FEED");
  }, [setActiveBottomTab]);

  return (
    <div className="bg-primary-white">
      <TopAppBar title={<TopLogoIcon fillColor="black" />} />
      <div>
        <FeedTitle title="이번 사생대회 우승작" />
        <FeedContest />
      </div>
      {publicDiaries && (
        <>
          <FeedTitle
            title="우리의 일상"
            description="최근 가장 많은 공감을 받았어요"
          />
          <div className="grid grid-flow-dense grid-cols-3 grid-rows-3">
            {publicDiaries.map(({ diary, likeCount }, idx) => (
              <FeedItem
                key={"feed-item-" + idx}
                image={diary.imageUrl}
                idx={idx}
                like={likeCount}
                _id={diary.id}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FeedPage;
