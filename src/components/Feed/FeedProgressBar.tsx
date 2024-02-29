import { useState, useEffect } from "react";
import { Progress } from "antd";

const ProgressBar = () => {
  const SEC = 15; // 15초 후 다음 피드로 지나감

  const [percent, setPercent] = useState(0);
  useEffect(() => {
    // 프로그레스 바의 증가량을 계산합니다. 1000ms = 1초
    const totalMilliseconds = SEC * 1000; // 전체 시간을 밀리초로 변환
    const intervalMilliseconds = 150; // 인터벌 시간을 밀리초로 설정
    const progressIncrement = 100 / (totalMilliseconds / intervalMilliseconds); // 진행률 증가량 계산

    const interval = setInterval(() => {
      setPercent((prevPercent) => {
        if (prevPercent >= 100) {
          clearInterval(interval); // 진행률이 100%에 도달하면 인터벌 정리
          return 100;
        }
        return prevPercent + progressIncrement;
      });
    }, intervalMilliseconds);

    // 컴포넌트가 언마운트되거나, 재렌더링 되기 전에 인터벌을 정리합니다.
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-[56px] left-[50%] z-20 flex w-full -translate-x-1/2 transform align-bottom custom-breakpoint:w-[480px]">
      <Progress
        percent={percent}
        strokeColor={"#FF6D3C"}
        showInfo={false}
        strokeLinecap="square"
        size={"small"}
        style={{ margin: 0 }}
      />
    </div>
  );
};

export default ProgressBar;
