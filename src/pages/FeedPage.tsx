import { useRecoilState } from "recoil";
import { FillStarIcon } from "../assets/icons";
import { FeedItem } from "../components/Feed";
import { TopAppBar } from "../components/common";
import { bottomTabState } from "../recoil/atoms/bottomTabState";
import { useEffect } from "react";

const FeedPage = () => {
  const [, setActiveBottomTab] = useRecoilState(bottomTabState);
  const tempData = [
    {
      image:
        "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "1",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_D1TAPJBVeuPTVKRyWmgyQ4O9ixq7N53Wg&usqp=CAU",
      like: 1000,
      id: "11",
    },
    {
      image:
        "https://images.unsplash.com/photo-1603617385189-cee5d82d5032?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
      like: 1000,
      id: "13",
    },
    {
      image:
        "https://images.unsplash.com/photo-1603617385189-cee5d82d5032?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
      like: 1000,
      id: "12",
    },
    {
      image:
        "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "11",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_D1TAPJBVeuPTVKRyWmgyQ4O9ixq7N53Wg&usqp=CAU",
      like: 1000,
      id: "21",
    },
    {
      image:
        "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "10",
    },
    {
      image:
        "https://images.unsplash.com/photo-1603617385189-cee5d82d5032?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
      like: 1000,
      id: "31",
    },
    {
      image:
        "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "16",
    },
    {
      image:
        "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "61",
    },
    {
      image:
        "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "13",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_D1TAPJBVeuPTVKRyWmgyQ4O9ixq7N53Wg&usqp=CAU",
      like: 1000,
      id: "14",
    },
  ];

  useEffect(() => {
    setActiveBottomTab("FEED");
  }, [setActiveBottomTab]);

  return (
    <div className="bg-primary-white">
      <TopAppBar
        title="오늘의 일기"
        leftIcon={<FillStarIcon fillColor="black" />}
      />
      <div className="grid grid-flow-dense grid-cols-3 grid-rows-3">
        {tempData.map((item, idx) => (
          <FeedItem
            key={"feed-item-" + idx}
            image={item.image}
            idx={idx}
            like={item.like}
            _id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
