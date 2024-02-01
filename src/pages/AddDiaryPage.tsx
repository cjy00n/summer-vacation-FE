import { Switch, message } from "antd";
import { AlertModal, TopAppBar } from "../components/common";
import { CloseIcon, AddIcon, EditIcon } from "../assets/icons";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { EmotionIcon } from "../assets/icons/emotions";
import { format } from "date-fns";
import {
  ChoiceItem,
  CustomButton,
  SelectDateModal,
} from "../components/AddDiary";
import { WeatherIcon } from "../assets/icons/weather";
import { DateType } from "../types";
import { useRecoilState } from "recoil";
import { bottomTabState } from "../recoil/atoms/bottomTabState";
import { EmotionData, WeatherData } from "../assets/data";

const AddDiaryPage = () => {
  const navigate = useNavigate();
  const [, contextHolder] = message.useMessage();
  const [, setActiveBottomTab] = useRecoilState(bottomTabState);

  const { state } = useLocation(); // 이미지 그린 후 다시 돌아올 경우 이미지를 state에 저장

  const existingContent = localStorage.getItem("diary-content"); // 기존 일기 내용 로컬스토리지에서 가져오기
  const existingTitle = localStorage.getItem("diary-title"); // 기존 일기 제목 로컬스토리지에서 가져오기
  const existingWeather = localStorage.getItem("diary-weather"); // 기존 일기 날씨 로컬스토리지에서 가져오기
  const existingEmotion = localStorage.getItem("diary-emotion"); // 기존 일기 기분 로컬스토리지에서 가져오기
  const existingDate = localStorage.getItem("diary-date"); // 기존 일기 날짜 로컬스토리지에서 가져오기

  /* state 초기화 (기존 입력중이던 데이터 있으면 가져오기, 아니면 초기화) */
  const [date, setDate] = useState(
    existingDate
      ? new Date(JSON.parse(existingDate))
      : (new Date() as DateType),
  );
  const [title, setTitle] = useState(
    existingTitle ? JSON.parse(existingTitle) : "",
  );
  const [content, setContent] = useState(
    existingContent ? JSON.parse(existingContent) : "",
  );
  const [emotion, setEmotion] = useState(
    existingEmotion ? JSON.parse(existingEmotion) : EmotionData[0],
  );
  const [weather, setWeather] = useState(
    existingWeather ? JSON.parse(existingWeather) : WeatherData[0],
  );

  const [isChangeDateOpen, setIsChangeDateOpen] = useState(false); // 날짜 선택 모달 창 오픈 여부
  const [isStopModalOpen, setIsStopModalOpen] = useState(false); // close 모달 창 오픈 여부

  /* 날짜 선택 모달 창 토글 함수 */
  const toggleChangeDateModal = () => {
    setIsChangeDateOpen(!isChangeDateOpen);
  };

  /* close 모달 창 토글 함수 */
  const showStopModal = () => {
    setIsStopModalOpen(true);
  };

  /* close 모달 창 - 나가기 선택 시  => 로컬스토리지 비우며 홈 화면으로 이동 */
  const handleStopOk = () => {
    setIsStopModalOpen(false);
    navigate(ROUTE.HOME_PAGE.link);
    setActiveBottomTab("HOME");
    localStorage.removeItem("diary-content");
    localStorage.removeItem("diary-title");
    localStorage.removeItem("diary-emotion");
    localStorage.removeItem("diary-weather");
    localStorage.removeItem("diary-date");
  };

  /* close 모달 창 - 닫기 선택 시 => close 모달 닫기 */
  const handleStopCancel = () => {
    setIsStopModalOpen(false);
  };

  /* 번역 페이지로 이동 (제목, 내용 길이 0 아닐때만) */
  const linkTransferPage = () => {
    if (title.length === 0) {
      message.open({ type: "error", content: "제목을 입력해주세요." });
    } else if (content.length === 0) {
      message.open({ type: "error", content: "내용을 입력해주세요." });
    } else {
      navigate(ROUTE.ADD_DIARY_TRANSLATE_PAGE.link);
      localStorage.setItem("diary-content", JSON.stringify(content));
      localStorage.setItem("diary-title", JSON.stringify(title));
      localStorage.setItem("diary-emotion", JSON.stringify(emotion));
      localStorage.setItem("diary-weather", JSON.stringify(weather));
      localStorage.setItem("diary-date", JSON.stringify(date));
    }
  };

  /* 미리보기 페이지로 이동 (state에 데이터 담아 넘겨줌) */
  const linkPreviewPage = () => {
    navigate(ROUTE.ADD_DIARY_PREVIEW_PAGE.link, {
      state: {
        content: content,
        title: title,
        img: state.img,
        emotion: emotion,
        weather: weather,
        date: date,
      },
    });
  };

  return (
    <div className="mb-4">
      <TopAppBar
        title="일기쓰기"
        rightIcon={<CloseIcon />}
        rightOnClick={showStopModal}
      />
      <div className="flex h-14 items-center px-6 py-2 border-b justify-between">
        <span className="font-medium text-sm mr-8">날짜</span>
        <div className="flex w-4/5 justify-between">
          <span className="text-sm font-medium">
            {format(date!.toString(), "yyy년 MM월 dd일")}
          </span>
          <button
            className="text-primary-orange text-sm font-normal"
            onClick={toggleChangeDateModal}
          >
            변경
          </button>
        </div>
      </div>
      <SelectDateModal
        date={date}
        setDate={setDate}
        toggle={isChangeDateOpen}
        setToggle={toggleChangeDateModal}
      />
      <div className="flex h-14 items-center px-6 py-2 justify-between">
        <span className="font-medium text-sm mr-8">제목</span>
        <div className="flex w-4/5 justify-between">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            className="text-sm bg-transparent"
          />
          <span className=" text-gray-30 text-xs">{title.length + "/18"}</span>
        </div>
      </div>
      <div className="flex flex-col border-y-2 px-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용 쓰기"
          className="h-28 pt-3 text-xs bg-transparent outline-none "
        />
        <span className="w-full pb-2 text-right text-gray-30 text-xs">
          {content.length + "/80"}
        </span>
      </div>
      <div className="flex flex-col p-4 mx-2 border-b">
        <span className="py-1 text-sm w-full font-medium">오늘의 기분</span>
        <div className="flex bg-white w-full py-2 rounded-lg items-center justify-around">
          {EmotionData.map((item) => (
            <ChoiceItem
              key={"choice-" + item}
              icon={
                <EmotionIcon
                  emotion={item}
                  width={24}
                  height={24}
                  fillColor={`${emotion === item ? "white" : "#BAB6B4"}`}
                />
              }
              choice={emotion}
              setChoice={setEmotion}
              text={item}
            />
          ))}
        </div>
        <div className="flex py-2 rounded-lg items-center justify-around">
          {EmotionData.map((item) => (
            <span
              key={"emotion-text-" + item}
              className="w-12 text-xs font-normal text-center"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-4 mx-2 border-b">
        <span className="py-1 text-sm w-full font-medium">오늘의 날씨</span>
        <div className="flex bg-white w-full py-2 rounded-lg items-center justify-around">
          {WeatherData.map((item) => (
            <ChoiceItem
              key={"choice-" + item}
              icon={
                <WeatherIcon
                  weather={item}
                  width={24}
                  height={24}
                  fillColor={`${weather === item ? "white" : "#BAB6B4"}`}
                />
              }
              choice={weather}
              setChoice={setWeather}
              text={item}
            />
          ))}
        </div>
        <div className="flex py-2 rounded-lg items-center justify-around">
          {WeatherData.map((item) => (
            <span
              key={"emotion-text-" + item}
              className="w-12 text-xs font-normal text-center"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center h-14 p-4 mx-2 mb-3 border-b">
        <span className="py-1 text-sm w-full font-medium">나만 보기</span>
        <Switch className="bg-gray-200" />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        {state?.img ? (
          <div className="relative ">
            <button className="absolute right-2 top-2 p-1 rounded-full bg-black bg-opacity-20">
              <EditIcon width={32} height={32} />
            </button>
            <img
              src={state?.img}
              className="w-[320px] h-[320px] object-cover"
            />
          </div>
        ) : (
          <button
            onClick={linkTransferPage}
            className="flex flex-col items-center justify-center w-[320px] h-[320px] bg-gray-70 rounded"
          >
            <AddIcon fillColor="black" />
            <span className="font-semibold text-sm">
              선택해서 AI로 그림 그리기
            </span>
          </button>
        )}
        <CustomButton
          onClick={linkPreviewPage}
          text="일기 미리보기"
          size="long"
          buttonStyle={
            state?.img ? `bg-primary-orange` : "bg-gray-70 opacity-40"
          }
          disabled={state?.img === null}
        />
      </div>
      <AlertModal
        toggle={isStopModalOpen}
        title="일기를 그만 쓸까요?"
        okText="그만둘래요"
        handleOk={handleStopOk}
        closeText="닫기"
        handleClose={handleStopCancel}
      />
      {contextHolder}
    </div>
  );
};

export default AddDiaryPage;
