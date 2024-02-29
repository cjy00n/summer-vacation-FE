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
      className="flex w-1/5 flex-col items-center justify-center"
      onClick={onClick}
    >
      <span>
        {React.cloneElement(icon, {
          fillColor: isActive ? "#FF6D3C" : "#A3A09D",
          height: "24",
        })}
      </span>
      <span
        className={`text-xs font-semibold ${isActive ? `text-primary-orange` : `text-gray-50`}`}
      >
        {text}
      </span>
    </Link>
  );
};

export default BottomTabItem;
