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
            className="w-72 h-72 object-cover mx-auto"
            src="https://s3-alpha-sig.figma.com/img/b871/75c8/9ceac944df8f0cf72bc0c61216017e7c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iG3v1c0aM-MIGTYl8-B~MQf1v-LoykNqCaQAOBrWBN87SPtdpUX0YhFA~TNizUX6xxQJb3iMHqlp3O5xIXNSHJbRDgeUDLEEQRnl-zMoiEfizO5Ly2E26UetWnoKf7O48TYWi4EmuOU3K5x055vVJDg5Uj4GT9XxZMvJRy~rc8fRli1e0EJ1NrvtPogTgrwNwuUH5pOgdXueSfN1Dhx-Uw2s~c4GGpdZsd76ZJMurWQKpBP1hXoElbWgbE2Syfyi-EZxFTsAYXV5ATC89T7NYTBCYcJ-~rgWSWIvSG4DsD80ig5WKM5YsYllbIuyMPf7sRsoKLF9nr~1t1bz7nOUDA__"
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
