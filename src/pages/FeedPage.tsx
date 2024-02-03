import { useRecoilState } from "recoil";
import { FillStarIcon } from "../assets/icons";
import { FeedItem } from "../components/Feed";
import { TopAppBar } from "../components/common";
import { bottomTabState } from "../recoil/atoms/bottomTabState";
import { useEffect } from "react";
import { useGetPublicDiary } from "../hooks/getPublicDiary";

const FeedPage = () => {
  const [, setActiveBottomTab] = useRecoilState(bottomTabState);

  const { data } = useGetPublicDiary();
  console.log(data);

  useEffect(() => {
    setActiveBottomTab("FEED");
  }, [setActiveBottomTab]);

  return (
    <div className="bg-primary-white">
      <TopAppBar
        title="오늘의 일기"
        leftIcon={<FillStarIcon fillColor="black" />}
      />
      {data && (
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
      )}
    </div>
  );
};

export default FeedPage;
