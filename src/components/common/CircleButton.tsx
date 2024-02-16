interface CircleButtonProps {
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
}: CircleButtonProps) => {
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
      className={`mx-auto flex h-12 w-12 items-center justify-center rounded-[81px] shadow-lg ${getButtonStyle()}`}
    >
      {icon}
    </button>
  );
};
export default CircleButton;
