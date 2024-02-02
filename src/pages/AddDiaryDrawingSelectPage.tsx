import { useLocation, useNavigate } from "react-router-dom";
import { TopAppBar, CustomButton } from "../components/common";
import { ROUTE } from "../routes/Route";

const AddDiaryDrawingSelectPage = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const { img } = state;

  return (
    <div className="flex h-[100vh] flex-col">
      <TopAppBar title="AI 그림 선택" leftGoBack />
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="w-[320px] py-2 text-left text-lg font-semibold">
          이 그림을 선택할까요?
        </h1>
        <img
          src={img}
          className="h-[320px] w-[320px] rounded-md object-cover"
        />
        <div className="flex w-[320px] justify-between py-2">
          <CustomButton
            content="뒤로"
            type="white"
            onClick={() => navigate(-1)}
            size="half"
          />
          <CustomButton
            content="선택"
            onClick={() =>
              navigate(ROUTE.ADD_DIARY_PAGE.link, { state: { img: img } })
            }
            size="half"
          />
        </div>
      </div>
    </div>
  );
};

export default AddDiaryDrawingSelectPage;
