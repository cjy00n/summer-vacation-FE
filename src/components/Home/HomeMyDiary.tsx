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
    <div className="flex flex-row gap-2 whitespace-nowrap overflow-x-auto hide-scrollbar">
      {data.map((item, idx) => (
        <HomeDiaryItem
          key={"my-diary-item-" + idx}
          img={item.img}
          like={item.like}
        />
      ))}
    </div>
  );
};

export default HomeMyDiary;
