import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../assets/icons";
import TopLogoIcon from "../../assets/icons/TopLogoIcon";

interface TopAppBarProps {
  title?: string | React.ReactElement;
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 flex ${bgColor ?? "bg-primary-white"} z-10 h-14 w-full items-center justify-between px-4 py-3`}
    >
      <div className="flex">
        {leftGoBack ? (
          <button onClick={goBack}>
            <ArrowIcon />
          </button>
        ) : (
          <button>{leftIcon}</button>
        )}
        {title ? (
          <span className="text-base font-semibold">{title}</span>
        ) : (
          <TopLogoIcon />
        )}
      </div>

      <button onClick={rightOnClick}>{rightIcon}</button>
    </header>
  );
};

export default TopAppBar;
