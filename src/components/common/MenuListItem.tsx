import { ReactElement } from "react";

export interface MenuListItemProps {
  title: string;
  leftContents?: string;
  rightContents?: ReactElement | string;
  onClick?: () => void;
}

const MenuListItem = ({
  title,
  leftContents,
  rightContents,
  onClick,
}: MenuListItemProps) => {
  return (
    <button
      className="mx-auto flex w-[95%] justify-between border-b-[1px] border-solid border-gray-70 px-2 py-5 text-sm"
      onClick={onClick}
    >
      <span className="flex">
        <span className="w-32 text-left font-medium">{title}</span>
        <span>{leftContents}</span>
      </span>
      <span className="font-bold">{rightContents}</span>
    </button>
  );
};

export default MenuListItem;
