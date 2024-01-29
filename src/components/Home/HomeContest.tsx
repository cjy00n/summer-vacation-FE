import HomeContestItem from "./HomeContestItem";

const HomeContest = () => {
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
    <div className="flex flex-row gap-4 whitespace-nowrap overflow-x-auto hide-scrollbar">
      {data.map((item, idx) => (
        <HomeContestItem
          key={"contest-item-" + idx}
          ranking={item.ranking}
          img={item.img}
          like={item.like}
          date={item.date}
          nickname={item.nickname}
        />
      ))}
    </div>
  );
};

export default HomeContest;
