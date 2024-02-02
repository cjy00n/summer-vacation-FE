import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../../assets/icons";

interface TopAppBarProps {
  title?: string;
  bgColor?: string;
  leftGoBack?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  rightOnClick?: () => void;
  rightClose?: boolean;
}

const TopAppBar = ({
  title,
  bgColor,
  leftGoBack,
  leftIcon,
  rightIcon,
  rightOnClick,
}: TopAppBarProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header
      className={`flex ${bgColor ?? "bg-primary-white"} items-center px-4 py-3 w-full h-14 justify-between ${bgColor ? "" : " shadow-custom"}`}
    >
      <div className="flex">
        {leftGoBack ? (
          <button onClick={goBack}>
            <ArrowLeftIcon />
          </button>
        ) : (
          <button>{leftIcon}</button>
        )}
        {title ? (
          <span className="text-base font-semibold">{title}</span>
        ) : (
          <span className="">{<img src="/logo.svg" />}</span>
        )}
      </div>

      <button onClick={rightOnClick}>{rightIcon}</button>
    </header>
  );
};

export default TopAppBar;
