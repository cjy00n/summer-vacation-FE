import BottomTabItem from "./BottomTabItem";
import { ROUTE } from "../../routes/Route";
import {
  HomeIcon,
  CalendarIcon,
  ProfileIcon,
  FeedIcon,
  DiaryIcon,
} from "../../assets/icons";
import { useRecoilState } from "recoil";
import { bottomTabState } from "../../recoil/atoms/bottomTabState";

const BottomAppbar = () => {
  const [activeBottomTab, setActiveBottomTab] = useRecoilState(bottomTabState);

  const navList = [
    {
      text: "홈",
      link: ROUTE!.HOME_PAGE.link,
      icon: <HomeIcon />,
      id: "HOME",
    },
    {
      text: "피드",
      link: ROUTE!.FEED_PAGE.link,
      icon: <FeedIcon />,
      id: "FEED",
    },
    {
      text: "일기쓰기",
      link: ROUTE!.ADD_DIARY_PAGE.link,
      icon: <DiaryIcon />,
      id: "ADD_DIARY",
    },
    {
      text: "달력",
      link: ROUTE!.CALENDAR_PAGE.link,
      icon: <CalendarIcon />,
      id: "CALENDAR",
    },
    {
      text: "프로필",
      link: ROUTE!.PROFILE_PAGE.link,
      icon: <ProfileIcon />,
      id: "PROFILE",
    },
  ];

  return (
    <div
      className="w-[100vw] custom-breakpoint:w-[480px] px-0 py-2
      flex justify-around items-center
      bg-gray-90
      shadow-[0_-5px_10px_-5px_gray]
      h-20
      fixed bottom-0
      z-10"
    >
      {navList.map((item) => (
        <BottomTabItem
          text={item.text}
          link={item.link}
          key={item.link}
          icon={item.icon}
          isActive={activeBottomTab === item.id}
          onClick={() => setActiveBottomTab(item.id)}
        />
      ))}
    </div>
  );
};
export default BottomAppbar;
