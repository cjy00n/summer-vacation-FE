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
      className="mx-auto flex w-[95%] items-center justify-between border-b-[1px] border-solid border-gray-70 px-2 py-4 "
      onClick={onClick}
    >
      <span className="flex">
        <span className=" w-32 text-left text-base font-medium">{title}</span>
        <span>{leftContents}</span>
      </span>
      <span className="text-sm font-bold">{rightContents}</span>
    </button>
  );
};

export default MenuListItem;
