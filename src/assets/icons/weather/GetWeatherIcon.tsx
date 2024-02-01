import { CloudyIcon, RainyIcon, SnowIcon, SunnyIcon, ThunderIcon } from ".";
import { Weather, IconComponentProps } from "../../../types";

interface GetWeatherIcon extends IconComponentProps {
  weather: Weather;
}

const GetWeatherIcon = ({
  width,
  height,
  fillColor,
  weather,
}: GetWeatherIcon) => {
  switch (weather) {
    case "맑음":
      return <SunnyIcon width={width} height={height} fillColor={fillColor} />;
    case "비":
      return <RainyIcon width={width} height={height} fillColor={fillColor} />;
    case "눈":
      return <SnowIcon width={width} height={height} fillColor={fillColor} />;
    case "흐림":
      return <CloudyIcon width={width} height={height} fillColor={fillColor} />;
    case "천둥":
      return (
        <ThunderIcon width={width} height={height} fillColor={fillColor} />
      );
  }
};
export default GetWeatherIcon;
