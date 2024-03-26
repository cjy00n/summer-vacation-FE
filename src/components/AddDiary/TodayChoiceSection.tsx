import { EmotionData, WeatherData } from "../../assets/data";
import { EmotionIcon } from "../../assets/icons/emotions";
import { WeatherIcon } from "../../assets/icons/weather";
import { Emotion, Weather } from "../../types";

interface TodayChoiceSection {
  emotion: Emotion;
  weather: Weather;
  setWeather: (weather: Weather) => void;
  setEmotion: (choice: Emotion) => void;
}

const TodayChoiceSection = ({
  emotion,
  weather,
  setEmotion,
  setWeather,
}: TodayChoiceSection) => {
  return (
    <>
      <div className="mx-2 flex flex-col border-b p-4">
        <span className="w-full pb-2 text-sm font-medium">{"오늘의 기분"}</span>
        <div className="flex w-full items-center justify-around rounded-lg bg-white py-2">
          {EmotionData.map((item) => (
            <button
              key={"emotion-choice" + item}
              onClick={() => setEmotion(item)}
              className={`${emotion === item ? "bg-primary-orange" : ""} flex  h-10 w-10 items-center justify-center rounded-full`}
            >
              <EmotionIcon
                emotion={item as Emotion}
                width={32}
                height={32}
                fillColor={`${emotion === item ? "white" : "#BAB6B4"}`}
              />
            </button>
          ))}
        </div>
        <div className="flex w-full items-center justify-around">
          {EmotionData.map((item) => (
            <span
              className="w-12 pt-2 text-center text-xs"
              key={"emotion-text" + item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-2 flex flex-col border-b p-4">
        <span className="w-full pb-2 text-sm font-medium">{"오늘의 날씨"}</span>
        <div className="flex w-full items-center justify-around rounded-lg bg-white py-2">
          {WeatherData.map((item) => (
            <button
              key={"emotion-choice" + item}
              onClick={() => setWeather(item)}
              className={`${weather === item ? "bg-primary-orange" : ""} flex  h-10 w-10 items-center justify-center rounded-full`}
            >
              <WeatherIcon
                weather={item}
                width={24}
                height={24}
                fillColor={`${weather === item ? "white" : "#BAB6B4"}`}
              />
            </button>
          ))}
        </div>
        <div className="flex w-full items-center justify-around">
          {WeatherData.map((item) => (
            <span
              className="w-12 pt-2 text-center text-xs"
              key={"weather-text" + item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodayChoiceSection;
