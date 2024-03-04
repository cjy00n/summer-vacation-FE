import BottomTabItem from "./BottomTabItem";
import { useRecoilState } from "recoil";
import { bottomTabState } from "../../recoil/atoms/bottomTabState";
import { BottomTab } from "../../types";
import { ROUTE } from "../../routes/Route";
import {
  CalendarIcon,
  DiaryIcon,
  FeedIcon,
  HomeIcon,
  PersonIcon,
} from "../../assets/icons";

interface BottomTabDataType {
  text: "홈" | "피드" | "일기쓰기" | "달력" | "프로필";
  link: string;
  icon: React.ReactElement;
  id: BottomTab;
}

const BottomAppbar = () => {
  const [activeBottomTab, setActiveBottomTab] = useRecoilState(bottomTabState);

  const handleClickBottomTab = (id: BottomTab) => {
    setActiveBottomTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bottomTabData: BottomTabDataType[] = [
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
      icon: <PersonIcon />,
      id: "PROFILE",
    },
  ];

  return (
    <div
      className="fixed bottom-0 z-10 flex
      h-bottom-tab w-[100vw] items-center
      justify-around
      bg-gray-90
      px-0
      py-2 shadow-[0_-5px_10px_-5px_gray]
      custom-breakpoint:w-[450px]"
    >
      {bottomTabData.map((item) => (
        <BottomTabItem
          text={item.text}
          link={item.link}
          key={item.link}
          icon={item.icon}
          isActive={activeBottomTab === item.id}
          onClick={() => handleClickBottomTab(item.id)}
        />
      ))}
    </div>
  );
};
export default BottomAppbar;
