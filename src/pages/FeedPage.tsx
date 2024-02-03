import { useRecoilState } from "recoil";
import { FeedItem } from "../components/Feed";
import { TopAppBar } from "../components/common";
import { bottomTabState } from "../recoil/atoms/bottomTabState";
import { useEffect } from "react";
import { useGetPublicDiary } from "../hooks/getPublicDiary";
import { HomeContest, HomeTitle } from "../components/Home";
import TopLogoIcon from "../assets/icons/TopLogoIcon";

const FeedPage = () => {
  const [, setActiveBottomTab] = useRecoilState(bottomTabState);

  const { data } = useGetPublicDiary();
  console.log(data);

  useEffect(() => {
    setActiveBottomTab("FEED");
  }, [setActiveBottomTab]);

  return (
    <div className="bg-primary-white">
      <TopAppBar title={<TopLogoIcon fillColor="black" />} />
      <div>
        <div className="px-3 py-1">
          <HomeTitle title="이번 사생대회 우승작" />
        </div>
        <HomeContest />
      </div>
      {data && (
        <>
          <div className="px-3 py-1">
            <HomeTitle
              title="우리의 일상"
              description="최근 가장 많은 공감을 받았어요"
            />
          </div>
          <div className="grid grid-flow-dense grid-cols-3 grid-rows-3">
            {data.map((item, idx) => (
              <FeedItem
                key={"feed-item-" + idx}
                image={item.image}
                idx={idx}
                like={idx * 10}
                _id={item.id}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FeedPage;
