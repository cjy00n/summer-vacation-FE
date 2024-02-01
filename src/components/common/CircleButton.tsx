interface CircleButton {
  onClick: () => void;
  icon: React.ReactElement;
  type?: "dangerous" | "default" | "toggle";
  toggle?: boolean;
}

const CircleButton = ({
  onClick,
  icon,
  type = "default",
  toggle,
}: CircleButton) => {
  const getButtonStyle = () => {
    if (type === "toggle" && toggle) return "bg-black";
    else if (type === "toggle" && !toggle)
      return "bg-white border-[1px] border-solid border-black";

    switch (type) {
      case "dangerous":
        return "bg-error-red";
      case "default":
        return "bg-black";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center shadow-lg w-12 h-12 mx-auto rounded-[81px] ${getButtonStyle()}`}
    >
      {icon}
    </button>
  );
};
export default CircleButton;
