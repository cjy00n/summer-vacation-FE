interface NotificationProps {
  imgUrl: string;
  showType: string;
  reactionNumber: number;
}

const NotificationItem = ({
  imgUrl,
  showType,
  reactionNumber,
}: NotificationProps) => {
  return (
    <div className="flex h-14 mx-3 p-3 items-center border-b">
      <img src={imgUrl} className="w-10 h-10 object-cover rounded" />
      <div className="flex flex-col ml-3">
        <p className="font-medium">{showType}</p>
        <p className="text-gray-30">{reactionNumber}건의 반응이 있었어요.</p>
      </div>
    </div>
  );
};

export default NotificationItem;
