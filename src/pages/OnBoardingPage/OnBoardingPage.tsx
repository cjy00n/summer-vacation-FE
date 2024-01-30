import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";

const OnBoardingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col  bg-gray-90">
      <div>
        <p>괜히 설레이던 여름방학</p>
        <div>
          <p>그림일기를 통해, </p>
          <p>일상을 가장 꾸준히 남겼던 때를 추억해요</p>
        </div>
      </div>
      <div>
        <div>
          <p>대신, 이제는 AI가</p>
          <p>당신의 일상을 그려줄게요</p>
        </div>
        <div>
          <p>오늘 하루를 어떻게 표현할지</p>
          <p>궁금하지 않나요?</p>
        </div>
      </div>
      <div>
        <div>
          <p>나만 보기엔 아까운</p>
          <p>AI 그림일기</p>
        </div>
        <div>
          <p>다른 사람들에게 자랑할 수 있어요!</p>
        </div>
      </div>
      <button
        onClick={() => navigate(ROUTE.HOME_PAGE.link)}
        className="w-60 h-12 mx-auto rounded-[81px] text-base font-medium bg-primary-orange text-white"
      >
        시작하기
      </button>
    </div>
  );
};

export default OnBoardingPage;
