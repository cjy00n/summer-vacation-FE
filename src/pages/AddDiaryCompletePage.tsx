import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components/common";
import { ROUTE } from "../routes/Route";
import { useRecoilState } from "recoil";
import { bottomTabState } from "../recoil/atoms/bottomTabState";

const AddDiaryCompletePage = () => {
  const navigate = useNavigate();
  const [, setBottomTabState] = useRecoilState(bottomTabState);

  const linkHomePage = () => {
    navigate(ROUTE.HOME_PAGE.link);
    setBottomTabState("HOME");
  };

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <img src="/image/complete.webp" className="w-32" />
      <h1 className="mb-24 mt-1 font-semibold">일기 쓰기를 완료했어요!</h1>
      <CustomButton content="참 잘했어요!" onClick={linkHomePage} />
    </div>
  );
};

export default AddDiaryCompletePage;
