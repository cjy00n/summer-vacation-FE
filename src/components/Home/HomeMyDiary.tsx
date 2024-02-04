import { HomeDiaryItem } from ".";
import { LoadingIcon } from "../../assets/icons";
import { useGetUserInfo } from "../../hooks/getMyUserInfo";

const HomeMyDiary = () => {
  const { data: userInfo, isLoading } = useGetUserInfo();

  return (
    <div className="hide-scrollbar flex flex-row gap-2 overflow-x-auto whitespace-nowrap">
      {isLoading ? (
        <div>
          <LoadingIcon />
        </div>
      ) : userInfo && userInfo?.diaries.length > 0 ? (
        userInfo?.diaries.map((item, idx) => (
          <HomeDiaryItem
            key={"my-diary-item-" + idx}
            image={item.image}
            like={parseInt(item.id)}
            id={item.id}
          />
        ))
      ) : (
        <div className="w-full py-10 text-center">작성된 일기가 없습니다.</div>
      )}
    </div>
  );
};

export default HomeMyDiary;
