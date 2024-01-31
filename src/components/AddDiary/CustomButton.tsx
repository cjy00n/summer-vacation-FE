interface LongButtonProps {
  onClick: (param?: unknown) => void;
  text: string;
  buttonStyle?: string;
  textStyle?: string;
  size?: "long" | "middle" | "short";
  disabled?: boolean;
}

const LongButton = ({
  onClick,
  text,
  buttonStyle,
  textStyle,
  size,
  disabled,
}: LongButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-12 mx-auto my-1 ${buttonStyle ?? "bg-primary-orange"} border-[1px] border-solid ${
        size === "long"
          ? "w-[320px]"
          : size === "middle"
            ? "w-52"
            : size === "short"
              ? "w-28"
              : "w-36"
      } rounded-[81px]`}
    >
      <span className={`text-base font-medium ${textStyle ?? "text-white"}`}>
        {text}
      </span>
    </button>
  );
};

export default LongButton;
