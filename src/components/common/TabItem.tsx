import { Link } from "react-router-dom";

export interface TabItemProps {
  text: string;
  link: string;
}

const TabItem = ({ text, link }: TabItemProps) => {
  return (
    <Link to={link} className="flex justify-center w-1/5">
      <span>{text}</span>
    </Link>
  );
};

export default TabItem;
