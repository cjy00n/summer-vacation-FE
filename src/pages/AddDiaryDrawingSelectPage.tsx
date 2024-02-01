import { useLocation, useNavigate } from "react-router-dom";
import { TopAppBar } from "../components/common";
import { CustomButton } from "../components/AddDiary";
import { ROUTE } from "../routes/Route";

const AddDiaryDrawingSelectPage = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const { img } = state;

  return (
    <div className="flex flex-col h-[100vh]">
      <TopAppBar title="AI 그림 선택" leftGoBack />
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-lg font-semibold text-left w-[320px] py-2">
          이 그림을 선택할까요?
        </h1>
        <img
          src={img}
          className="w-[320px] h-[320px] object-cover rounded-md"
        />
        <div className="w-[320px] flex justify-between py-2">
          <CustomButton
            text="뒤로"
            buttonStyle=" border-black bg-white"
            textStyle="text-black"
            onClick={() => navigate(-1)}
            size="half"
          />
          <CustomButton
            text="선택"
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
