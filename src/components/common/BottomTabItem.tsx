import { Link } from "react-router-dom";

export interface BottomTabItemProps {
  text: string;
  link: string;
}

const BottomTabItem = ({ text, link }: BottomTabItemProps) => {
  return (
    <Link to={link} className="flex justify-center w-1/5">
      <span>{text}</span>
    </Link>
  );
};

export default BottomTabItem;
