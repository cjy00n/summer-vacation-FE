import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../../assets/icons";

interface TopAppBarProps {
  title: string;
  leftGoBack?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  rightOnClick?: () => void;
  rightClose?: boolean;
}

const TopAppBar = ({
  title,
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
    <header className="flex items-center px-4 py-3 w-full h-14 justify-between shadow-custom ">
      <div className="flex">
        {leftGoBack ? (
          <button onClick={goBack}>
            <ArrowLeftIcon />
          </button>
        ) : (
          <button>{leftIcon}</button>
        )}
        <span className="text-base font-semibold">{title}</span>
      </div>

      <button onClick={rightOnClick}>{rightIcon}</button>
    </header>
  );
};

export default TopAppBar;
