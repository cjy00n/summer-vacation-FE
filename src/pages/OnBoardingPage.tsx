import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { Carousel } from "antd";
import { useState } from "react";

const OnBoardingPage = () => {
  const navigate = useNavigate();
  const [showStartButton, setShowStartButton] = useState(false);

  const finishOnBoarding = (current: number) => {
    if (current === 2) setShowStartButton(true);
  };

  return (
    <div className="scrollbar-hide flex h-[100vh] flex-col overflow-y-scroll bg-gray-90">
      <Carousel
        autoplay
        autoplaySpeed={3000}
        fade
        infinite={false}
        afterChange={finishOnBoarding}
      >
        <div>
          <p className="px-10 py-16 text-xl font-bold">
            괜히 설레이던 여름방학
          </p>
          <img
            className="mx-auto w-60 object-cover"
            src="/image/onBoarding1.webp"
          />
          <div className="mb-10 py-8 text-center text-base font-semibold">
            <p>그림일기를 통해, </p>
            <p>일상을 가장 꾸준히 남겼던 때를 추억해요</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="absolute top-0 w-full"
            src="https://cdn.pixabay.com/animation/2023/12/20/04/49/04-49-40-378_512.gif"
          />
          <p className="absolute z-10 px-10 py-16 text-xl font-bold">
            대신, 이제는 AI가 <br />
            당신의 일상을 그려줄게요
          </p>
          <div>
            <p className="z-10 mb-10 mt-[450px] py-8 text-center text-base font-semibold">
              오늘 하루를 어떻게 표현할지
              <br />
              궁금하지 않나요?
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <p className="px-10 py-16 text-xl font-bold">
              나만 보기엔 아까운 <br /> AI 그림일기
            </p>
          </div>
          <img className="mx-auto h-56 w-52 object-cover" src="/rabbit.webp" />
          <div>
            <p className="mb-10 py-8 text-center text-base font-semibold">
              다른 사람들에게 자랑할 수 있어요!
            </p>
          </div>
        </div>
      </Carousel>

      {showStartButton && (
        <button
          onClick={() => navigate(ROUTE.START_PAGE.link)}
          className="fixed bottom-[15vh] left-[50%] z-10 flex h-12 w-60 -translate-x-1/2 transform items-center justify-center rounded-[81px] bg-primary-orange text-base font-medium text-white"
        >
          시작하기
        </button>
      )}
    </div>
  );
};

export default OnBoardingPage;
