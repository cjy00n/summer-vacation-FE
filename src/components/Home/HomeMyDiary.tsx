import { HomeDiaryItem } from ".";

const HomeMyDiary = () => {
  const data = [
    {
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 1000,
    },
    {
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 900,
    },
    {
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 800,
    },
    {
      img: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg",
      like: 700,
    },
  ];

  return (
    <div className="hide-scrollbar flex flex-row gap-2 overflow-x-auto whitespace-nowrap">
      {data.map((item, idx) => (
        <HomeDiaryItem
          key={"my-diary-item-" + idx}
          image={item.img}
          like={item.like}
          id={""}
        />
      ))}
    </div>
  );
};

export default HomeMyDiary;
