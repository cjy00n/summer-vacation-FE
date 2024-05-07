import { useState } from "react";

const OnBoardingPage = () => {
  const [count] = useState(4);

  const contents = [
    "일기를 쓰러 가요.",
    "내용을 작성해요.",
    "번역을 확인해요.",
    "그림을 확인해요.",
    "일기 작성이 완료되었어요!",
  ];

  return (
    <div>
      <div
        className={`h-1 w-10 bg-primary-orange`}
        style={{ width: (480 / 5) * count }}
      />
      {count}.{contents[count - 1]}
      <div className="relative flex h-[476px] w-60 items-center justify-center">
        <img src="/image/phone_frame.svg" className="absolute -z-0 w-60" />
        <img
          src="/image/onBoarding1.png"
          className="z-1 absolute mx-auto w-[220px]"
        />
      </div>
    </div>
  );
};

export default OnBoardingPage;
