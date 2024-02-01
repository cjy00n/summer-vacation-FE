import { Carousel } from "antd";

const Banner = () => {
  return (
    <div id="main-banner" className="bg-primary-orange">
      <Carousel>
        <div className="relative flex h-[300px] ">
          <img src="/image/main.webp" className="w-[210px] h-[210px] mx-auto" />
          <div className="absolute bottom-5 left-5 ">
            <p className="text-white text-lg font-bold">
              AI가 그려주는 그림일기,
              <br />
              여름방학 베타테스트
            </p>
          </div>
        </div>
        <div className="relative flex h-[300px] ">
          <img src="/image/main.webp" className="w-[210px] h-[210px] mx-auto" />
          <div className="absolute bottom-5 left-5 ">
            <p className="text-white text-lg font-bold">
              그림일기를 그려 자랑해봐요!
            </p>
            <p className="text-white text-sm font-light">
              현재 이미지 다운로드, 공유 기능을 준비중이에요.
            </p>
          </div>
        </div>
        <div className="relative flex h-[300px] ">
          <img src="/image/main.webp" className="w-[210px] h-[210px] mx-auto" />
          <div className="absolute bottom-5 left-5 ">
            <p className="text-white text-lg font-bold">
              다른 사람의 그림일기를
              <br />
              피드에서 탐색해보세요!
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
