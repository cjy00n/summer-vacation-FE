import { useState, useEffect } from "react";
import { Progress } from "antd";
import { getRandomDiaryId } from "../../hooks/getRandomDiary";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";

const ProgressBar = () => {
  const SEC = 15; // 15초 후 다음 피드로 지나감
  const navigate = useNavigate();
  const location = useLocation();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(0);
    // 프로그레스 바의 증가량을 계산합니다. 1000ms = 1초
    const totalMilliseconds = SEC * 1000; // 전체 시간을 밀리초로 변환
    const intervalMilliseconds = 150; // 인터벌 시간을 밀리초로 설정
    const progressIncrement = 100 / (totalMilliseconds / intervalMilliseconds); // 진행률 증가량 계산

    const interval = setInterval(() => {
      setPercent((prevPercent) => {
        if (prevPercent >= 100) {
          clearInterval(interval); // 진행률이 100%에 도달하면 인터벌 정리
          fetchNextDiary();
          return 100;
        }
        return prevPercent + progressIncrement;
      });
    }, intervalMilliseconds);

    // 컴포넌트가 언마운트되거나, 재렌더링 되기 전에 인터벌을 정리합니다.
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const fetchNextDiary = async () => {
    try {
      const data = await getRandomDiaryId();
      if (data) {
        navigate(ROUTE.FEED_DETAIL_PAGE.link + `/${data}`, {
          state: { toNext: true },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed bottom-[56px] left-[50%] z-20 flex w-full -translate-x-1/2 transform align-bottom custom-breakpoint:w-[450px] ">
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
