import { format } from "date-fns";
import { FillStarIcon } from "../../assets/icons";
import { ko } from "date-fns/locale";
import { WeatherIcon } from "../../assets/icons/weather";
import { EmotionIcon } from "../../assets/icons/emotions";
import { DiaryDetail, Emotion } from "../../types";
import { MAX_CONTENT_LENGTH } from "../../constant/constant";

interface FeedDetailItemProp {
  diary: Pick<
    DiaryDetail,
    | "diary_title"
    | "diary_contents"
    | "diary_date"
    | "diary_emotion"
    | "diary_weather"
    | "diary_imageUrl"
  >;
  like?: number;
  checkLike?: "alread checked" | "possible";
  checkEmotion?: Emotion;
}

export const FeedDetailItem = ({
  diary,
  like,
  checkEmotion,
  checkLike,
}: FeedDetailItemProp) => {
  const {
    diary_title: title,
    diary_date: date,
    diary_weather: weather,
    diary_emotion: emotion,
    diary_imageUrl: imageUrl,
    diary_contents: contents,
  } = diary;

  return (
    <div className="mx-auto mt-6 flex w-[322px] flex-col border-[1px] border-solid border-primary-orange">
      <div className="flex h-8">
        <span className="w-16 border-[1px] border-solid border-primary-orange text-center text-sm font-semibold leading-7">
          날짜
        </span>
        <p className="w-64 border-[1px] border-solid border-primary-orange pl-2 font-gamja text-base font-normal leading-8">
          {format(date as Date, "yyyy년 MM월 dd일 eeee", { locale: ko })}
        </p>
      </div>
      <div className="flex h-8">
        <span className="w-16 border-[1px] border-solid border-primary-orange text-center text-sm font-semibold leading-7 ">
          날씨
        </span>
        <p className="flex w-[91px] items-center justify-around border-[1px] border-solid  border-primary-orange px-2 font-gamja text-base font-normal">
          {<WeatherIcon weather={weather} fillColor="black" />}
          {weather}
        </p>
        <span className="w-16 border-[1px] border-solid border-primary-orange text-center text-sm font-semibold leading-7">
          기분
        </span>
        <p className="flex w-[101px] items-center justify-around border-[1px] border-solid border-primary-orange px-1 font-gamja text-base font-normal leading-8">
          {<EmotionIcon emotion={emotion} />}
          {emotion}
        </p>
      </div>
      <div className="relative flex h-[320px] border-[1px] border-solid border-primary-orange">
        {imageUrl && (
          <img
            src={
              imageUrl.includes("https://") ? imageUrl : "https://" + imageUrl
            }
            className="absolute top-0 h-[318px] w-[320px] object-cover"
          />
        )}
        {
          <img
            src="/image/stamp.webp"
            style={{ transition: "opacity 0.3s ease-in-out" }}
            className={`${checkLike === "alread checked" || checkEmotion ? "opacity-100" : "opacity-0"} absolute bottom-6 left-2 z-10 h-20 w-20 rotate-[-10deg] rounded-full bg-primary-white bg-opacity-20 shadow-custom transition-opacity duration-500`}
          />
        }
        {like != undefined && (
          <div
            className="absolute bottom-2 left-2 flex h-8 w-[88px] content-center items-center justify-around
          rounded-lg bg-black bg-opacity-50"
          >
            <FillStarIcon fillColor="white" />
            <span className="mx-1 text-white">{like.toLocaleString()}</span>
          </div>
        )}
      </div>
      <div className="flex h-8">
        <span className="w-16 border-[1px] border-solid border-primary-orange text-center text-sm  font-semibold leading-7">
          제목
        </span>
        <p className="w-64 border-[1px] border-solid border-primary-orange pl-2 font-gamja text-lg font-normal leading-8">
          {title}
        </p>
      </div>
      {contents && (
        <div className="flex flex-wrap">
          {(
            contents +
            " ".repeat(
              contents.length > MAX_CONTENT_LENGTH
                ? 0
                : MAX_CONTENT_LENGTH - contents.length,
            )
          )
            .split("")
            .map((s, idx) => (
              <span
                key={idx}
                className="flex h-8 w-8 items-center justify-center border-[1px] border-solid border-primary-orange text-center font-gamja text-lg font-normal leading-8"
              >
                {s}
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

export default FeedDetailItem;
