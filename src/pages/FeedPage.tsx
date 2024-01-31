import { FillStarIcon } from "../assets/icons";
import { FeedItem } from "../components/Feed";
import { TopAppBar } from "../components/common";

const FeedPage = () => {
  const tempData = [
    {
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "1",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_D1TAPJBVeuPTVKRyWmgyQ4O9ixq7N53Wg&usqp=CAU",
      like: 1000,
      id: "11",
    },
    {
      img: "https://images.unsplash.com/photo-1603617385189-cee5d82d5032?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
      like: 1000,
      id: "13",
    },
    {
      img: "https://images.unsplash.com/photo-1603617385189-cee5d82d5032?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
      like: 1000,
      id: "12",
    },
    {
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "11",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_D1TAPJBVeuPTVKRyWmgyQ4O9ixq7N53Wg&usqp=CAU",
      like: 1000,
      id: "21",
    },
    {
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "10",
    },
    {
      img: "https://images.unsplash.com/photo-1603617385189-cee5d82d5032?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
      like: 1000,
      id: "31",
    },
    {
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "16",
    },
    {
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "61",
    },
    {
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      id: "13",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_D1TAPJBVeuPTVKRyWmgyQ4O9ixq7N53Wg&usqp=CAU",
      like: 1000,
      id: "14",
    },
  ];

  return (
    <div>
      <TopAppBar
        title="오늘의 일기"
        leftIcon={<FillStarIcon fillColor="black" />}
      />
      <div className="grid grid-rows-3 grid-cols-3 grid-flow-dense">
        {tempData.map((item, idx) => (
          <FeedItem
            key={"feed-item-" + idx}
            img={item.img}
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
