import { ChoiceItem } from ".";
import { EmotionData, WeatherData } from "../../assets/data";
import { EmotionIcon } from "../../assets/icons/emotions";
import { WeatherIcon } from "../../assets/icons/weather";
import { Emotion, Weather } from "../../types";

interface TodayChoiceSection {
  target: "emotion" | "weather";
  choice: Emotion | Weather;
  setChoice: React.Dispatch<Emotion | Weather>;
}

const TodayChoiceSection = ({
  target,
  choice,
  setChoice,
}: TodayChoiceSection) => {
  const targetData =
    target === "emotion"
      ? EmotionData
      : target === "weather"
        ? WeatherData
        : null;

  return (
    targetData && (
      <div className="flex flex-col p-4 mx-2 border-b">
        <span className="py-1 text-sm w-full font-medium">{`오늘의 ${target === "emotion" ? "기분" : "날씨"}`}</span>
        <div className="flex bg-white w-full py-2 rounded-lg items-center justify-around">
          {targetData.map((item) => (
            <ChoiceItem
              key={`${target}-text-${item}`}
              icon={
                target === "emotion" ? (
                  <EmotionIcon
                    emotion={item as Emotion}
                    width={24}
                    height={24}
                    fillColor={`${choice === item ? "white" : "#BAB6B4"}`}
                  />
                ) : (
                  <WeatherIcon
                    weather={item as Weather}
                    width={24}
                    height={24}
                    fillColor={`${choice === item ? "white" : "#BAB6B4"}`}
                  />
                )
              }
              choice={choice}
              setChoice={setChoice}
              text={item}
            />
          ))}
        </div>
        <div className="flex py-2 rounded-lg items-center justify-around">
          {targetData.map((item) => (
            <span
              key={`${target}-text-${item}`}
              className="w-12 text-xs font-normal text-center"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    )
  );
};

export default TodayChoiceSection;
