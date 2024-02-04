import { HomeDiaryItem } from ".";
import { useGetPublicDiary } from "../../hooks/getPublicDiary";

const HomeRecentBestDiary = () => {
  const { data } = useGetPublicDiary();
  console.log(data);

  return (
    <div className="hide-scrollbar flex flex-row gap-2 overflow-x-auto whitespace-nowrap">
      {data && data.length > 0 ? (
        data.map((item, idx) => (
          <HomeDiaryItem
            key={"my-diary-item-" + idx}
            image={item.image}
            like={1000}
            id={item.id}
          />
        ))
      ) : (
        <div className="w-full py-10 text-center">작성된 일기가 없습니다.</div>
      )}
    </div>
  );
};

export default HomeRecentBestDiary;
