import NotificationItem from "../../components/Notification/NotificationItem";
import { TopAppBar } from "../../components/common";

const NotificationPage = () => {
  const notificationList = [
    { imgUrl: "/sample.webp", showType: "나만보기", reactionNumber: 10 },
    { imgUrl: "/sample.webp", showType: "나만보기", reactionNumber: 2 },
    { imgUrl: "/sample.webp", showType: "나만보기", reactionNumber: 13 },
    { imgUrl: "/sample.webp", showType: "나만보기", reactionNumber: 14 },
  ];
  return (
    <>
      <TopAppBar title="알림" leftGoBack />
      <div className="flex flex-col">
        {notificationList.map((item, idx) => (
          <NotificationItem
            key={"notification-" + idx}
            imgUrl={item.imgUrl}
            showType={item.showType}
            reactionNumber={item.reactionNumber}
          />
        ))}
      </div>
    </>
  );
};

export default NotificationPage;
