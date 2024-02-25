import { FeedItem } from ".";
import { useGetPublicDiary } from "../../hooks/getPublicDiary";

const FeedContainer = () => {
  const { data: publicDiaries } = useGetPublicDiary();

  return (
    <>
      <div className="grid grid-flow-dense grid-cols-3 grid-rows-3">
        {publicDiaries &&
          publicDiaries.map(({ diary, totalCount }, idx) => (
            <FeedItem
              key={"feed-item-" + idx}
              image={diary.imageUrl}
              idx={idx}
              like={totalCount}
              _id={diary.id}
            />
          ))}
      </div>
    </>
  );
};

export default FeedContainer;
