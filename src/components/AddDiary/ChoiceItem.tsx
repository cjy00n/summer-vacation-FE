interface ChoiceItemProps {
  choice: string; // state
  setChoice: (text: string) => void;
  text: string;
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
