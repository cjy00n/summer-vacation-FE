import { Emotion, Weather } from "../../types";

interface ChoiceItemProps {
  choice: Emotion | Weather; // state
  setChoice: React.Dispatch<Emotion | Weather>;
  text: Emotion | Weather;
  icon: React.ReactElement;
}

const ChoiceItem = ({ choice, setChoice, text, icon }: ChoiceItemProps) => (
  <div
    onClick={() => setChoice(text)}
    className={`${choice === text ? "bg-primary-orange" : ""} rounded-full  w-10 h-10 flex items-center justify-center`}
  >
    {icon}
  </div>
);

export default ChoiceItem;
