import DraggableScrollContainer from "../common/DraggableScrollContainer";
import FeedContestItem from "./FeedContestItem";

const FeedContest = () => {
  const data = [
    {
      ranking: 1,
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
      date: new Date(),
      nickname: "닉네임",
    },
    {
      ranking: 2,
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 900,
      date: new Date(),
      nickname: "닉네임",
    },
    {
      ranking: 3,
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 800,
      date: new Date(),
      nickname: "닉네임",
    },
  ];

  return (
    <div className="hide-scrollbar flex flex-row gap-4 overflow-x-auto whitespace-nowrap px-3">
      <DraggableScrollContainer>
        {data.map((item, idx) => (
          <FeedContestItem
            key={"contest-item-" + idx}
            ranking={item.ranking}
            img={item.img}
            like={item.like}
            date={item.date}
            nickname={item.nickname}
          />
        ))}
      </DraggableScrollContainer>
    </div>
  );
};

export default FeedContest;
