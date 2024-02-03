import { HomeDiaryItem } from ".";
import { useGetPublicDiary } from "../../hooks/getPublicDiary";

const HomeRecentBestDiary = () => {
  const { data } = useGetPublicDiary();
  console.log(data);

  return (
    <div className="hide-scrollbar flex flex-row gap-2 overflow-x-auto whitespace-nowrap">
      {data &&
        data.map((item, idx) => (
          <HomeDiaryItem
            key={"my-diary-item-" + idx}
            image={item.image}
            like={1000}
            id={item.id}
          />
        ))}
    </div>
  );
};

export default HomeRecentBestDiary;
