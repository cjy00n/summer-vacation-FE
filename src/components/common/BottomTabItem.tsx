import React from "react";
import { Link } from "react-router-dom";

export interface BottomTabItemProps {
  text: string;
  link: string;
  icon: React.ReactElement;
  isActive: boolean;
  onClick: () => void;
}

const BottomTabItem = ({
  text,
  link,
  icon,
  isActive,
  onClick,
}: BottomTabItemProps) => {
  return (
    <Link
      to={link}
      className="flex flex-col justify-center items-center w-1/5"
      onClick={onClick}
    >
      <span>
        {React.cloneElement(icon, {
          fillColor: isActive ? "#FF6D3C" : "#A3A09D",
        })}
      </span>
      <span
        className={`text-sm font-semibold ${isActive ? `text-primary-orange` : `text-gray-50`}`}
      >
        {text}
      </span>
    </Link>
  );
};

export default BottomTabItem;
