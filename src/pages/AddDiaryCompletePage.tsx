import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components/AddDiary";
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
    <div className="flex flex-col items-center h-[100vh] justify-center">
      <img src="/image/complete.webp" className="w-32" />
      <h1 className="mt-1 mb-24 font-semibold">일기 쓰기를 완료했어요!</h1>
      <CustomButton text="참 잘했어요!" onClick={linkHomePage} size="long" />
    </div>
  );
};

export default AddDiaryCompletePage;
