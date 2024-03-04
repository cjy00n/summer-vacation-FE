import { useRecoilState } from "recoil";
import { FeedContainer } from "../components/Feed";
import { TopAppBar } from "../components/common";
import { bottomTabState } from "../recoil/atoms/bottomTabState";
import { useEffect } from "react";
import TopLogoIcon from "../assets/icons/TopLogoIcon";
import FeedTitle from "../components/Feed/FeedTitle";

const FeedPage = () => {
  const [, setActiveBottomTab] = useRecoilState(bottomTabState);

  useEffect(() => {
    setActiveBottomTab("FEED");
  }, [setActiveBottomTab]);

  return (
    <div className="h-min-dvh bg-primary-white">
      <TopAppBar title={<TopLogoIcon fillColor="black" />} />
      {/* <div>
        <FeedTitle title="이번 사생대회 우승작" />
        <FeedContest />
      </div> */}
      <FeedTitle
        title="우리의 일상"
        description="최근 가장 많은 공감을 받았어요"
      />
      <FeedContainer />
    </div>
  );
};

export default FeedPage;
