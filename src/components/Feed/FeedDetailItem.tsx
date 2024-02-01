import { format } from "date-fns";
import { FillStarIcon } from "../../assets/icons";
import { ko } from "date-fns/locale";
import { WeatherIcon } from "../../assets/icons/weather";
import { EmotionIcon } from "../../assets/icons/emotions";
import { Emotion, Weather } from "../../types";

interface FeedDetailItemProp {
  date: Date;
  weather: Weather;
  emotion: Emotion;
  imgUrl: string;
  content: string;
  title: string;
  like?: number;
  isLike?: boolean;
}

export const FeedDetailItem = ({
  date,
  weather,
  emotion,
  imgUrl,
  content,
  like,
  title,
  isLike,
}: FeedDetailItemProp) => {
  return (
    <>
      <div className="flex flex-col w-[322px] mx-auto mt-6 border-[1px] border-primary-orange border-solid">
        <div className="flex h-8">
          <span className="border-[1px] w-16 text-center font-semibold text-sm leading-7 border-primary-orange border-solid">
            날짜
          </span>
          <p className="font-gamja w-64 pl-2 border-[1px] border-primary-orange border-solid font-normal text-base leading-8">
            {format(date, "yyyy년 MM월 dd일 eeee", { locale: ko })}
          </p>
        </div>
        <div className="flex h-8">
          <span className="border-[1px] w-16 text-center font-semibold text-sm leading-7 border-primary-orange border-solid ">
            날씨
          </span>
          <p className="flex items-center px-2 justify-around font-gamja w-[91px]  border-[1px] border-primary-orange border-solid font-normal text-base">
            {
              <WeatherIcon
                weather={weather}
                fillColor="black"
                width={19}
                height={18}
              />
            }
            {weather}
          </p>
          <span className="w-16 text-center font-semibold text-sm leading-7 border-[1px] border-primary-orange border-solid">
            기분
          </span>
          <p className="flex items-center px-1 justify-around font-gamja w-[101px] border-[1px] border-primary-orange border-solid font-normal text-base leading-8">
            {<EmotionIcon emotion={emotion} />}
            {emotion}
          </p>
        </div>
        <div className="flex h-[320px] relative border-[1px] border-primary-orange border-solid">
          <img
            src={imgUrl}
            className="absolute top-0 w-[320px] h-[318px] object-cover"
          />
          {isLike && (
            <img
              src="/image/stamp.webp"
              className="z-10 absolute w-20 h-20 bottom-6 left-2 w-18 h-18 rotate-[-10deg] shadow-custom"
            />
          )}
          {like && (
            <div
              className="absolute flex bottom-2 left-2 bg-black bg-opacity-50 rounded-lg w-[88px] h-8
          items-center justify-center content-center"
            >
              <FillStarIcon fillColor="white" />
              <span className="text-white mx-1">{like.toLocaleString()}</span>
            </div>
          )}
        </div>
        <div className="flex h-8">
          <span className="w-16 text-center font-semibold text-sm leading-7 border-[1px]  border-primary-orange border-solid">
            제목
          </span>
          <p className="font-gamja w-64 pl-2 border-[1px] border-primary-orange border-solid font-normal text-base leading-8">
            {title}
          </p>
        </div>
        <div className="flex flex-wrap">
          {(content + " ".repeat(80 - content.length))
            .split("")
            .map((s, idx) => (
              <span
                key={idx}
                className="flex w-8 h-8 font-gamja text-lg font-normal items-center justify-center text-center leading-8 border-[1px] border-primary-orange border-solid"
              >
                {s}
              </span>
            ))}
        </div>
      </div>
    </>
  );
};

export default FeedDetailItem;
