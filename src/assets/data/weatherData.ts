import { Weather } from "../../types";

const WeatherData: Weather[] = ["맑음", "흐림", "비", "눈", "천둥"];

export const getEnglishWeather = (weather: Weather) => {
  switch (weather) {
    case "눈":
      return "snow";
    case "맑음":
      return "sunny";
    case "비":
      return "rainy";
    case "천둥":
      return "thunder";
    case "흐림":
      return "little cloudy";
  }
};
export default WeatherData;
