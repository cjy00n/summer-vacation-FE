interface LongButtonProps {
  onclick: () => void;
  text: string;
  textColor?: string;
  bgColor?: string;
  border?: boolean;
}

const LongButton = ({
  onclick,
  text,
  textColor,
  bgColor,
  border,
}: LongButtonProps) => {
  return (
    <button
      onClick={onclick}
      className={`h-12 bg-${bgColor ?? "primary-orange"} w-[320px] rounded-[81px] gap-2 ${border ? "border" : ""}`}
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
