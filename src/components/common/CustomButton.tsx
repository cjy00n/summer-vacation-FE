interface LongButtonProps {
  onClick?: (param?: unknown) => void;
  content: string | React.ReactElement;
  type?: "default" | "dangerous" | "black" | "white" | "disabled";
  size?: "long" | "middle" | "short" | "half" | "middleLong";
}

const LongButton = ({
  onClick,
  content,
  type = "default",
  size = "long",
}: LongButtonProps) => {
  interface style {
    buttonStyle: string;
    textStyle: string;
  }

  const getStyle = (): style => {
    switch (type) {
      case "default":
        return { buttonStyle: "bg-primary-orange", textStyle: "text-white" };
      case "dangerous":
        return { buttonStyle: "bg-error-red", textStyle: "text-white" };
      case "black":
        return { buttonStyle: "bg-black", textStyle: "text-white" };
      case "white":
        return {
          buttonStyle: "bg-white border-[1px] border-black border-solid",
          textStyle: "text-black",
        };
      case "disabled":
        return {
          buttonStyle:
            "bg-white opacity-30 border-[1px] border-black border-solid ",
          textStyle: "text-black",
        };
    }
  };

  const getSize = (): string => {
    switch (size) {
      case "long":
        return "w-[320px]";
      case "middleLong":
        return "w-[260px]";
      case "half":
        return "w-36";
      case "middle":
        return "w-52";
      case "short":
        return "w-28";
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={type === "disabled"}
      className={`mx-auto my-1 h-11 rounded-[81px] ${getStyle().buttonStyle} ${getSize()}`}
    >
      <span className={`text-sm font-medium ${getStyle().textStyle}`}>
        {content}
      </span>
    </button>
  );
};

export default LongButton;
