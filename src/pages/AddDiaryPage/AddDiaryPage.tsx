import { Switch } from "antd";
import { AlertModal, TopAppBar } from "../../components/common";
import { CloseIcon, AddIcon } from "../../assets/icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import {
  AngryIcon,
  HappyIcon,
  PleasureIcon,
  SadIcon,
  SoSoIcon,
} from "../../assets/icons/\bemotions";
import { format } from "date-fns";
import {
  ChoiceItem,
  CustomButton,
  SelectDateModal,
} from "../../components/AddDiary";
import {
  CloudyIcon,
  SnowIcon,
  SunnyIcon,
  ThunderIcon,
  RainyIcon,
} from "../../assets/icons/weather";
import { DateType } from "../../types";

const AddDiaryPage = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date() as DateType);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState("기뻐요");
  const [weather, setWeather] = useState("맑음");

  const [isChangeDateOpen, setIsChangeDateOpen] = useState(false);
  const [isStopModalOpen, setIsStopModalOpen] = useState(false);

  const toggleChangeDateModal = () => {
    setIsChangeDateOpen(!isChangeDateOpen);
  };

  const showStopModal = () => {
    setIsStopModalOpen(true);
  };

  const handleStopOk = () => {
    setIsStopModalOpen(false);
    navigate(ROUTE.HOME_PAGE.link);
  };

  const handleStopCancel = () => {
    setIsStopModalOpen(false);
  };

  const emotionText = ["괜찮아요", "기뻐요", "행복해요", "화나요", "슬퍼요"];
  const emotionIcon = [
    <SoSoIcon
      width={24}
      height={24}
      fillColor={`${emotion === "괜찮아요" ? "white" : "#BAB6B4"}`}
    />,
    <PleasureIcon
      width={24}
      height={24}
      fillColor={`${emotion === "기뻐요" ? "white" : "#BAB6B4"}`}
    />,
    <HappyIcon
      width={24}
      height={24}
      fillColor={`${emotion === "행복해요" ? "white" : "#BAB6B4"}`}
    />,
    <AngryIcon
      width={24}
      height={24}
      fillColor={`${emotion === "화나요" ? "white" : "#BAB6B4"}`}
    />,
    <SadIcon
      width={24}
      height={24}
      fillColor={`${emotion === "슬퍼요" ? "white" : "#BAB6B4"}`}
    />,
  ];

  const weatherText = ["맑음", "비", "눈", "흐림", "천둥"];
  const weatherIcon = [
    <SunnyIcon
      width={28}
      height={28}
      fillColor={`${weather === "맑음" ? "white" : "#BAB6B4"}`}
    />,
    <RainyIcon
      width={28}
      height={28}
      fillColor={`${weather === "비" ? "white" : "#BAB6B4"}`}
    />,
    <SnowIcon
      width={28}
      height={28}
      fillColor={`${weather === "눈" ? "white" : "#BAB6B4"}`}
    />,
    <CloudyIcon
      width={28}
      height={28}
      fillColor={`${weather === "흐림" ? "white" : "#BAB6B4"}`}
    />,
    <ThunderIcon
      width={28}
      height={28}
      fillColor={`${weather === "천둥" ? "white" : "#BAB6B4"}`}
    />,
  ];

  return (
    <div className="mb-4 bg-primary-white">
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
          {emotionIcon.map((item, idx) => (
            <ChoiceItem
              key={"choice" + emotionText[idx]}
              icon={item}
              choice={emotion}
              setChoice={setEmotion}
              text={emotionText[idx]}
            />
          ))}
        </div>
        <div className="flex py-2 rounded-lg items-center justify-around">
          {emotionText.map((item) => (
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
          {weatherIcon.map((item, idx) => (
            <ChoiceItem
              key={"choice" + weatherText[idx]}
              icon={item}
              choice={weather}
              setChoice={setWeather}
              text={weatherText[idx]}
            />
          ))}
        </div>
        <div className="flex py-2 rounded-lg items-center justify-around">
          {weatherText.map((item) => (
            <span
              key={"emotion-text-" + item}
              className="w-12 text-xs font-normal text-center"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center h-14 p-4 mx-2 border-b">
        <span className="py-1 text-sm w-full font-medium">나만 보기</span>
        <Switch className="bg-gray-200" />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <Link
          to={ROUTE.ADD_DIARY_TRANSLATE_PAGE.link}
          className="flex flex-col items-center justify-center w-[320px] h-[320px] my-3 bg-gray-70 rounded"
        >
          <AddIcon fillColor="black" />
          <span className="font-semibold text-sm">
            선택해서 AI로 그림 그리기
          </span>
        </Link>
        <CustomButton
          onClick={() => console.log("미리보기")}
          text="일기 미리보기"
          textColor="white"
          size="long"
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
    </div>
  );
};

export default AddDiaryPage;
