import { HomeDiaryItem } from ".";
import { LoadingIcon } from "../../assets/icons";
import { useGetMyDiaries } from "../../hooks/getMyDiaries";
import DraggableScrollContainer from "../common/DraggableScrollContainer";

const HomeMyDiary = () => {
  const { data: myDiaries, isLoading } = useGetMyDiaries();
  console.log(myDiaries);

  return (
    <div className="hide-scrollbar flex flex-row gap-2 overflow-x-auto whitespace-nowrap">
      {isLoading ? (
        <div>
          <LoadingIcon />
        </div>
      ) : myDiaries && myDiaries.length > 0 ? (
        <DraggableScrollContainer>
          {myDiaries?.map((item, idx) => (
            <HomeDiaryItem
              key={"my-diary-item-" + idx}
              image={item.image}
              like={parseInt(item.id)}
              id={item.id}
            />
          ))}
        </DraggableScrollContainer>
      ) : (
        <div className="w-full py-10 text-center">작성된 일기가 없습니다.</div>
      )}
    </div>
  );
};

export default HomeMyDiary;
