import { EmotionData } from "../../assets/data";
import { StarIcon } from "../../assets/icons";
import { useGetDiary } from "../../api/getDiary";
import { usePostEmotion } from "../../api/postEmotion";
import { usePostLike } from "../../api/postLike";
import { Emotion } from "../../types";
import GetEmotionIcon from "../../assets/icons/emotions/GetEMotionIcon";

interface FeedStampMenuProps {
  feedId: string;
  toggleLikeList: () => void;
}

const FeedStampMenu = ({ feedId, toggleLikeList }: FeedStampMenuProps) => {
  const { mutate: postLike } = usePostLike(feedId);
  const { mutate: postEmotion } = usePostEmotion(feedId);

  const { data: diaryData } = useGetDiary(feedId);
  const likes = [
    diaryData?.좋아요,
    diaryData?.괜찮아요,
    diaryData?.기뻐요,
    diaryData?.화나요,
    diaryData?.슬퍼요,
  ];

  // 참잘했어요 버튼 클릭 후, 공감 리스트에서 각각의 버튼 클릭 시
  const handleLikeButton = (type: Emotion | "star") => {
    toggleLikeList();
    if (type === "star") postLike();
    else postEmotion(type);
  };

  return (
    <div
      className={
        "after:content-'' absolute bottom-[60px] left-1/2 flex h-14 w-52 -translate-x-1/2 items-center justify-center gap-2 rounded-[100px] bg-primary-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.16)] after:absolute after:-bottom-1 after:left-2/3 after:block after:h-2 after:w-2 after:-translate-x-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:bg-white "
      }
    >
      <button
        onClick={() => handleLikeButton("star")}
        className="flex flex-col items-center justify-center"
      >
        <StarIcon fillColor="black" height={26} width={26} />
        <span className="text-xs font-normal">{diaryData?.likeCount}</span>
      </button>
      <span className="h-2/3 border-r-[1px] border-r-black" />
      {EmotionData.map((emotion, idx) => (
        <button
          onClick={() => handleLikeButton(emotion)}
          className="flex flex-col items-center justify-center"
          key={"likeIcon" + idx}
        >
          {<GetEmotionIcon emotion={emotion} height={26} width={20} />}
          <span className="text-xs font-normal">{likes[idx]}</span>
        </button>
      ))}
    </div>
  );
};

export default FeedStampMenu;
