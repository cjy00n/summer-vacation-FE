interface LongButtonProps {
  onClick: (param?: unknown) => void;
  text: string;
  textColor?: string;
  bgColor?: string;
  border?: string;
  size?: "long" | "middle" | "short";
}

const LongButton = ({
  onClick,
  text,
  textColor,
  bgColor,
  border,
  size,
}: LongButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-12 mx-auto ${bgColor ?? "bg-primary-orange"} ${
        size === "long"
          ? "w-[320px]"
          : size === "middle"
            ? "w-52"
            : size === "short"
              ? "w-28"
              : "w-36"
      } rounded-[81px] ${border ? "border-[1px] border-solid " + border : ""}`}
    >
      <span
        className={`text-base font-medium text-${textColor ?? "primary-white"}`}
      >
        {text}
      </span>
    </button>
  );
};

export default LongButton;
