import { AngryIcon, HappyIcon, PleasureIcon, SadIcon, SoSoIcon } from ".";
import { Emotion, IconComponentProps } from "../../../types";

interface GetEmotionIcon extends IconComponentProps {
  emotion: Emotion;
}

const GetEmotionIcon = ({
  width,
  height,
  fillColor,
  emotion,
}: GetEmotionIcon) => {
  switch (emotion) {
    case "괜찮아요":
      return <SoSoIcon width={width} height={height} fillColor={fillColor} />;
    case "좋아요":
      return (
        <PleasureIcon width={width} height={height} fillColor={fillColor} />
      );
    case "기뻐요":
      return <HappyIcon width={width} height={height} fillColor={fillColor} />;
    case "화나요":
      return <AngryIcon width={width} height={height} fillColor={fillColor} />;
    case "슬퍼요":
      return <SadIcon width={width} height={height} fillColor={fillColor} />;
  }
};
export default GetEmotionIcon;
