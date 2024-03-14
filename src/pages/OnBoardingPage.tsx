import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { Carousel } from "antd";
import { useState } from "react";
import { CustomButton } from "../components/common";

const OnBoardingPage = () => {
  const navigate = useNavigate();
  const [showStartButton, setShowStartButton] = useState(false);

  const finishOnBoarding = (current: number) => {
    if (current === 2) setShowStartButton(true);
  };

  return (
    <div id="onBoarding" className="scrollbar-hide flex h-[100dvh] flex-col ">
      <Carousel
        autoplay
        autoplaySpeed={3000}
        fade
        infinite={false}
        afterChange={finishOnBoarding}
      >
        <div className="relative h-[100dvh]">
          <p className="px-10 py-16 text-xl font-bold">
            괜히 설레이던 여름방학
          </p>
          <img
            className="mx-auto h-[45dvh] object-cover"
            src="/image/onBoarding1.webp"
          />
          <div className="absolute bottom-[22dvh] text-center text-base font-semibold left-center">
            <p>그림일기를 통해, </p>
            <p>일상을 가장 꾸준히 남겼던 때를 추억해요</p>
          </div>
        </div>
        <div className="relative h-[100dvh]">
          <img
            className="absolute top-0 w-full"
            src="/image/onBoarding2.webp"
          />
          <img
            className="absolute top-0 w-full"
            src="/image/onBoarding2-back.webp"
          />
          <p className="absolute z-10 px-10 py-16 text-xl font-bold">
            대신, 이제는 AI가 <br />
            당신의 일상을 그려줄게요
          </p>
          <div>
            <p className="absolute bottom-[22dvh] z-10 text-center text-base font-semibold left-center">
              오늘 하루를 어떻게 표현할지
              <br />
              궁금하지 않나요?
            </p>
          </div>
        </div>
        <div className="relative h-[100dvh]">
          <div className="flex flex-col">
            <p className="px-10 py-16 text-xl font-bold">
              나만 보기엔 아까운 <br /> AI 그림일기
            </p>
          </div>
          <div>
            <p className="text-center text-base font-semibold">
              다른 사람들에게 자랑할 수 있어요!
            </p>
          </div>
          <img className="mx-auto object-cover" src="/image/onBoarding3.webp" />
        </div>
      </Carousel>

      {showStartButton && (
        <div className="fixed bottom-[7dvh] left-[50%] z-10 flex -translate-x-1/2 transform">
          <CustomButton
            size="middleLong"
            content={"시작하기"}
            onClick={() => navigate(ROUTE.START_PAGE.link)}
          />
        </div>
      )}
    </div>
  );
};

export default OnBoardingPage;
