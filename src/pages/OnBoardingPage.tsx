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
    <div className="flex flex-col bg-gray-90 h-[100vh]">
      <Carousel
        autoplay
        autoplaySpeed={5000}
        fade
        infinite={false}
        afterChange={finishOnBoarding}
      >
        <div>
          <p className="text-xl font-bold px-10 py-16">
            괜히 설레이던 여름방학
          </p>
          <img
            className="w-60 object-cover mx-auto"
            src="/image/onBoarding1.svg"
          />
          <div className="py-8 text-center text-base font-semibold mb-10">
            <p>그림일기를 통해, </p>
            <p>일상을 가장 꾸준히 남겼던 때를 추억해요</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="absolute top-0 w-full"
            src="https://cdn.pixabay.com/animation/2023/12/20/04/49/04-49-40-378_512.gif"
          />
          <p className="absolute z-10 px-10 text-xl font-bold py-16">
            대신, 이제는 AI가 <br />
            당신의 일상을 그려줄게요
          </p>
          <div>
            <p className="z-10 mt-[450px] py-8 text-center text-base font-semibold mb-10">
              오늘 하루를 어떻게 표현할지
              <br />
              궁금하지 않나요?
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <p className="px-10 text-xl font-bold py-16">
              나만 보기엔 아까운 <br /> AI 그림일기
            </p>
          </div>
          <img className="w-52 h-56 object-cover mx-auto" src="/rabbit.webp" />
          <div>
            <p className="py-8 text-center text-base font-semibold mb-10">
              다른 사람들에게 자랑할 수 있어요!
            </p>
          </div>
        </div>
      </Carousel>

      {showStartButton && (
        <button
          onClick={() => navigate(ROUTE.HOME_PAGE.link)}
          className="mx-auto my-10 w-60 h-12 rounded-[81px] text-base font-medium bg-primary-orange text-white"
        >
          시작하기
        </button>
      )}
    </div>
  );
};

export default OnBoardingPage;
