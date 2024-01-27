import { ROUTE } from "../../routes/Route";
import TabItem, { TabItemProps } from "./TabItem";

const navList: TabItemProps[] = [
  { text: "홈", link: ROUTE.HOME_PAGE.link },
  { text: "피드", link: ROUTE.FEED_PAGE.link },
  { text: "일기쓰기", link: ROUTE.ADD_DIARY_PAGE.link },
  { text: "달력", link: ROUTE.CALANDAR_PAGE.link },
  { text: "프로필", link: ROUTE.PROFILE_PAGE.link },
];

const TabBar = () => {
  return (
    <div
      className="px-0 py-2
      flex justify-around items-center
      bg-white
      shadow-[0_-5px_10px_-5px_lightgray]
      h-20
      fixed bottom-0
      w-[100vw] md:w-[480px]
      z-10"
    >
      {navList.map((item) => (
        <TabItem text={item.text} link={item.link} key={item.link} />
      ))}
    </div>
  );
};

export default TabBar;
