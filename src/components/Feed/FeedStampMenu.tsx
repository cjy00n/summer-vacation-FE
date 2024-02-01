import { EmotionData } from "../../assets/data";
import { StarIcon } from "../../assets/icons";
import GetEmotionIcon from "../../assets/icons/emotions/GetEMotionIcon";
import { Emotion } from "../../types";

interface FeedStampMenuProps {
  like: number;
  likes: number[];
  handleLikeButton: (type: Emotion | "star") => void;
}

const FeedStampMenu = ({
  like,
  likes,
  handleLikeButton,
}: FeedStampMenuProps) => {
  return (
    <div
      className={`fixed bottom-[160px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.16)] right-6 flex gap-1 my-0 items-center justify-center content-center bg-primary-white w-52 h-14 rounded-[100px]
        after:content-[''] after:block after:absolute after:w-3 after:h-3 after:bg-white after:rotate-45 after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:border-r-2 after:border-b-2`}
    >
      <button
        onClick={() => handleLikeButton("star")}
        className="flex flex-col items-center justify-center"
      >
        <StarIcon fillColor="black" />
        <span className="text-[9px] font-normal">{like.toLocaleString()}</span>
      </button>
      <span className="h-2/3 border-r-[1px] border-r-black" />
      {EmotionData.map((emotion, idx) => (
        <button
          onClick={() => handleLikeButton(emotion)}
          className="flex flex-col items-center justify-center"
          key={"likeIcon" + idx}
        >
          {<GetEmotionIcon emotion={emotion} />}
          <span className="text-[9px] font-normal ">
            {likes[idx].toLocaleString()}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FeedStampMenu;
