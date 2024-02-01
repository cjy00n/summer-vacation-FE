import { format } from "date-fns";
import { FillStarIcon } from "../../assets/icons";
import { ko } from "date-fns/locale";
import { SunnyIcon } from "../../assets/icons/weather";
import { SoSoIcon } from "../../assets/icons/emotions";

interface FeedDetailItemProp {
  date: Date;
  weather: string;
  emotion: string;
  imgUrl: string;
  title: string;
  content: string;
  like?: number;
  stampIcon?: React.ReactElement | null;
}

const FeedDetailItem = ({
  date,
  weather,
  emotion,
  imgUrl,
  content,
  like,
  title,
  stampIcon,
}: FeedDetailItemProp) => {
  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case "맑음":
        return <SunnyIcon width={24} height={24} />;
    }
  };

  const getEmotionIcon = (emotion: string) => {
    switch (emotion) {
      case "괜찮아요":
        return <SoSoIcon width={24} height={24} />;
    }
  };

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
            {getWeatherIcon(weather)}
            {weather}
          </p>
          <span className="border-[1px] w-16 text-center font-semibold text-sm leading-7 border-primary-orange border-solid">
            날씨
          </span>
          <p className="flex items-center px-1 justify-around font-gamja w-[101px] border-[1px] border-primary-orange border-solid font-normal text-base leading-8">
            {getEmotionIcon(emotion)}
            {emotion}
          </p>
        </div>
        <div className="flex h-[320px] relative ">
          <img
            src={imgUrl}
            className="absolute top-0 w-full h-[320px] object-cover"
          />
          {stampIcon && (
            <div className="absolute bottom-8 left-2 w-18 h-18 rotate-[-10deg] rounded-full bg-[rgba(39,190,105,0.50)] border-[1px] border-primary-green">
              <div className="z-10 flex flex-col items-center justify-center w-20 h-20">
                <span className="scale-150 mb-2">{stampIcon}</span>
                <span className="text-primary-white font-semibold text-xs">
                  참 잘했어요
                </span>
              </div>
            </div>
          )}
          {like && (
            <div
              className="absolute flex bottom-2 left-2 bg-black bg-opacity-50 rounded-lg w-[88px] h-8
          items-center justify-center content-center"
            >
              <FillStarIcon fillColor="white" />
              <span className="text-white mx-1">{like.toLocaleString()}</span>d
            </div>
          )}
        </div>
        <div className="flex h-8">
          <span className="border-[1px] w-16 text-center font-semibold text-sm leading-7 border-primary-orange border-solid">
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
