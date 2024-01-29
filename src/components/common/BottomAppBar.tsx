import BottomTabItem from "./BottomTabItem";
import { ROUTE } from "../../routes/Route";
import {
  HomeIcon,
  AddIcon,
  CalendarIcon,
  ProfileIcon,
  FeedIcon,
} from "../../assets/icons";
import { useState } from "react";

const BottomAppbar = () => {
  const [activeTab, setActiveTab] = useState("HOME");

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
      icon: <AddIcon />,
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
      bg-white
      shadow-[0_-5px_10px_-5px_lightgray]
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
          isActive={activeTab === item.id}
          onClick={() => setActiveTab(item.id)}
        />
      ))}
    </div>
  );
};
export default BottomAppbar;
