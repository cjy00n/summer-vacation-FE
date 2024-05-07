import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import { useRef, useState } from "react";
import { CustomButton } from "../components/common";
import { CarouselRef } from "antd/es/carousel";
import { ROUTE } from "../routes/Route";

const IntroPage = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);

  const goToSlide = (slideIndex: number) => {
    carouselRef.current?.goTo(slideIndex);
  };

  return (
    <div id="intro" className="scrollbar-hide flex h-[100dvh] flex-col ">
      {!showLogin ? (
        <Carousel
          autoplay
          autoplaySpeed={3000}
          fade
          infinite={false}
          ref={carouselRef}
        >
          <div className="relative flex h-[100dvh] items-center">
            <p className="px-10 py-16 text-xl font-bold">
              괜히 설레이던 여름방학
            </p>
            <img
              className="mx-auto h-[45dvh] object-cover"
              src="/image/intro1.webp"
            />
            <div className="absolute bottom-[22dvh] text-center text-base font-semibold left-center">
              <p>그림일기를 통해, </p>
              <p>일상을 가장 꾸준히 남겼던 때를 추억해요</p>
            </div>
            <div className="absolute bottom-[7dvh] left-[50%] z-10 flex -translate-x-1/2 transform">
              <CustomButton
                content={"다음"}
                size="middleLong"
                onClick={() => goToSlide(1)}
                haveShadow
              />
            </div>
          </div>
          <div className="relative h-[100dvh]">
            <img className="absolute top-0 w-full" src="/image/intro2.webp" />
            <img
              className="absolute top-0 w-full"
              src="/image/intro2-back.webp"
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
            <div className="absolute bottom-[7dvh] left-[50%] z-10 flex -translate-x-1/2 transform">
              <CustomButton
                content={"다음"}
                size="middleLong"
                onClick={() => setShowLogin(true)}
                haveShadow
              />
            </div>
          </div>
        </Carousel>
      ) : (
        <div className="relative h-[100dvh]">
          <div className="flex flex-col">
            <p className="fixed top-[20dvh] px-10 py-16 text-xl font-bold">
              이제 일기를 <br /> 직접 쓰러 가 볼까요?
            </p>
          </div>
          <div className="absolute bottom-[22dvh] left-[50%] z-10 flex -translate-x-1/2 transform ">
            <CustomButton content={"카카오 로그인"} type="login" haveShadow />
          </div>
          <div
            onClick={() => navigate(ROUTE.HOME_PAGE.link)}
            className="absolute bottom-[15dvh] left-[50%] z-10 flex -translate-x-1/2 transform"
          >
            <CustomButton
              content={"비회원으로 서비스 둘러보기"}
              type="gray"
              haveShadow
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroPage;
