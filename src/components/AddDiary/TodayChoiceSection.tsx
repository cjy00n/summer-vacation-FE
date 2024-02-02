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
      <div className="flex flex-col p-4 mx-2 border-b">
        <span className="py-1 text-sm w-full font-medium">{"오늘의 기분"}</span>
        <div className="flex bg-white w-full py-2 rounded-lg items-center justify-around">
          {EmotionData.map((item) => (
            <button
              key={"emotion-choice" + item}
              onClick={() => setEmotion(item)}
              className={`${emotion === item ? "bg-primary-orange" : ""} rounded-full  w-10 h-10 flex items-center justify-center`}
            >
              <EmotionIcon
                emotion={item as Emotion}
                width={24}
                height={24}
                fillColor={`${emotion === item ? "white" : "#BAB6B4"}`}
              />
            </button>
          ))}
        </div>
        <div className="flex w-full items-center justify-around">
          {EmotionData.map((item) => (
            <span
              className="text-xs w-12 text-center"
              key={"emotion-text" + item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-4 mx-2 border-b">
        <span className="py-1 text-sm w-full font-medium">{"오늘의 기분"}</span>
        <div className="flex bg-white w-full py-2 rounded-lg items-center justify-around">
          {WeatherData.map((item) => (
            <button
              key={"emotion-choice" + item}
              onClick={() => setWeather(item)}
              className={`${weather === item ? "bg-primary-orange" : ""} rounded-full  w-10 h-10 flex items-center justify-center`}
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
              className="text-xs w-12 text-center"
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
