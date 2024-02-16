import { Drawer, Switch, message } from "antd";
import { AlertModal, CustomButton, TopAppBar } from "../components/common";
import { CloseIcon, AddIcon, EditIcon } from "../assets/icons";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { format } from "date-fns";
import { SelectDateModal, TodayChoiceSection } from "../components/AddDiary";
import {
  DateType,
  Diary,
  DiaryLocalstorageType,
  Emotion,
  Weather,
} from "../types";
import { useRecoilState } from "recoil";
import { bottomTabState } from "../recoil/atoms/bottomTabState";
import { EmotionData, WeatherData } from "../assets/data";
import {
  clearDiaryLocalStorage,
  getDiaryLocalStorage,
  setDiaryLocalStorage,
} from "../utils/handleDiaryLocalStorage";
import { drawingRecordState } from "../recoil/atoms/drawingRecordState";
import { updateDrawingRecord } from "../recoil/utils/updateDrawingRecord";
import { defaultTries } from "../recoil/utils/loadDrawingRecord";
import { usePatchDiary } from "../hooks/patchDiary";

const AddDiaryPage = () => {
  const navigate = useNavigate();
  const { state: originalData } = useLocation(); // 수정 시 기존 데이터
  const [, setActiveBottomTab] = useRecoilState(bottomTabState);
  const [drawingRecord, setDrawingRecord] = useRecoilState(drawingRecordState);

  const existingData = getDiaryLocalStorage();
  const [diaryData, setDiaryData] = useState<DiaryLocalstorageType>(
    originalData && originalData.existingDiary
      ? originalData.existingDiary
      : existingData ?? {
          contents: "",
          emotion: EmotionData[0],
          weather: WeatherData[0],
          title: "",
          englishContents: "",
          isPublic: 1,
          date:
            originalData && originalData.date ? originalData.date : new Date(),
        },
  );

  const [isChangeDateOpen, setIsChangeDateOpen] = useState(false); // 날짜 선택 Modal 오픈 여부
  const [isStopModalOpen, setIsStopModalOpen] = useState(false); // close Modal 창 오픈 여부
  const [isEditDrawingOpen, setIsEditDrawingOpen] = useState(false); // 사진 수정 Drawer 오픈 여부

  const updateField = <K extends keyof Diary>(field: K, value: Diary[K]) => {
    setDiaryData((prevData) => ({ ...prevData, [field]: value }));
  };

  /* 날짜 선택 모달 창 토글 함수 */
  const toggleChangeDateModal = () => {
    setIsChangeDateOpen(!isChangeDateOpen);
  };

  /* close 모달 창 토글 함수 */
  const toggleStopModal = () => {
    setIsStopModalOpen(!isStopModalOpen);
  };

  /* 사진 수정 Drawer 토글 함수 */
  const toggleEditDrawing = () => {
    setIsEditDrawingOpen(!isEditDrawingOpen);
  };

  /* close 모달 창 - 나가기 선택 시  => 로컬스토리지 비우며 홈 화면으로 이동 */
  const handleStopOk = () => {
    setIsStopModalOpen(false);
    navigate(ROUTE.HOME_PAGE.link);
    setActiveBottomTab("HOME");
    clearDiaryLocalStorage();
    updateDrawingRecord(setDrawingRecord, {
      ...drawingRecord,
      beforeImages: [],
    });
  };

  /* close 모달 창 - 닫기 선택 시 => close 모달 닫기 */
  const handleStopCancel = () => {
    setIsStopModalOpen(false);
  };

  /* 번역 페이지로 이동 (제목, 내용 길이 0 아닐때만) */
  const linkTransferPage = () => {
    if (diaryData.title?.length === 0) {
      message.open({ type: "error", content: "제목을 입력해주세요." });
    } else if (diaryData.contents?.length < 10) {
      message.open({
        type: "error",
        content: "내용을 10자 이상 입력해주세요.",
      });
    } else {
      navigate(ROUTE.ADD_DIARY_TRANSLATE_PAGE.link);
      setDiaryLocalStorage(diaryData);
    }
  };

  /* 미리보기 페이지로 이동 (state에 데이터 담아 넘겨줌) */
  const linkPreviewPage = () => {
    navigate(ROUTE.ADD_DIARY_PREVIEW_PAGE.link);
  };

  /* 전에 그린 그림 보기 => 전에 그린 그림 페이지로 이동 */
  const linkBeforePage = () => {
    navigate(ROUTE.ADD_DIARY_BEFORE_PAGE.link);
  };

  /* 일기 수정하기 */
  const { mutate: patchDiary } = usePatchDiary(
    originalData && originalData.existingDiary
      ? {
          ...originalData.existingDiary!,
          ...diaryData,
        }
      : { ...diaryData },
  );

  const handleEditDiary = () => {
    patchDiary();
  };

  return (
    <div className="mb-4">
      <TopAppBar
        title="일기쓰기"
        rightIcon={<CloseIcon />}
        rightOnClick={toggleStopModal}
      />
      {/* ↓ 날짜 선택 컨테이너 */}
      <div className="flex h-14 items-center justify-between border-b px-6 py-2">
        <span className="mr-8 text-sm font-medium">날짜</span>
        <div className="flex w-4/5 justify-between">
          <span className="text-sm font-medium">
            {format(diaryData.date!.toString(), "yyy년 MM월 dd일")}
          </span>
          {!originalData && (
            <button
              className="text-sm font-normal text-primary-orange"
              onClick={toggleChangeDateModal}
            >
              변경
            </button>
          )}
        </div>
      </div>
      <SelectDateModal
        date={diaryData.date}
        setDate={(date: DateType) => updateField("date", date)}
        toggle={isChangeDateOpen}
        setToggle={toggleChangeDateModal}
      />
      <div className="flex h-14 items-center justify-between px-6 py-2">
        <span className="mr-8 text-sm font-medium">제목</span>
        <div className="flex w-4/5 justify-between">
          <input
            value={diaryData.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="제목을 입력하세요"
            className="bg-transparent text-sm"
          />
          <span className=" text-xs text-gray-30">
            {diaryData.title?.length + "/18"}
          </span>
        </div>
      </div>
      {/* ↓ 일기 내용 컨테이너 */}
      <div className="flex flex-col border-y-2 px-6">
        <textarea
          value={diaryData.contents}
          onChange={(e) => updateField("contents", e.target.value)}
          placeholder="내용 쓰기"
          className="h-28 resize-none bg-transparent pt-3 text-xs outline-none"
        />
        <span className="w-full pb-2 text-right text-xs text-gray-30">
          {diaryData.contents.length + "/80"}
        </span>
      </div>
      <TodayChoiceSection
        emotion={diaryData.emotion}
        weather={diaryData.weather}
        setWeather={(weather: Weather) => updateField("weather", weather)}
        setEmotion={(emotion: Emotion) => updateField("emotion", emotion)}
      />
      <div className="mx-2 mb-3 flex h-14 items-center border-b p-4">
        <span className="w-full py-1 text-sm font-medium">나만 보기</span>
        <Switch
          checked={diaryData.isPublic === 0}
          className="bg-gray-200"
          onChange={(checked) =>
            updateField("isPublic", checked === true ? 0 : 1)
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        {/* ↓ 일기 수정일 때 or 그린 이미지가 있으면 -> 이미지 미리보기 */}
        {drawingRecord.beforeImages.length || originalData ? (
          <div className="relative ">
            {!originalData && (
              <button
                onClick={toggleEditDrawing}
                className="absolute right-2 top-2 rounded-full bg-black bg-opacity-20 p-1"
              >
                <EditIcon width={32} height={32} />
              </button>
            )}
            <img
              src={
                originalData && originalData.existingDiary
                  ? "https://" + originalData.existingDiary.imageUrl
                  : drawingRecord.beforeImages[
                      drawingRecord.beforeImages.length - 1
                    ]
              }
              className="h-[320px] w-[320px] object-cover"
            />
          </div>
        ) : (
          <>
            {/* ↓ 일기 추가일때면 -> 번역 후 이미지 추가되도록 */}
            <button
              onClick={linkTransferPage}
              className="flex h-[320px] w-[320px] flex-col items-center justify-center rounded bg-primary-orange"
            >
              <AddIcon fillColor="white" />
              <span className="text-sm font-semibold text-white">
                AI로 그림 그리기
              </span>
            </button>
          </>
        )}
        {originalData && originalData.existingDiary ? (
          <div className="flex w-[320px] justify-between">
            <CustomButton
              content={"취소"}
              type="white"
              size="half"
              onClick={toggleStopModal}
            />
            <CustomButton
              content={"일기 수정하기"}
              size="half"
              onClick={handleEditDiary}
            />
          </div>
        ) : (
          <CustomButton
            onClick={linkPreviewPage}
            content="일기 미리보기"
            size="long"
            type={
              drawingRecord.beforeImages.length || originalData
                ? "default"
                : "disabled"
            }
          />
        )}
      </div>
      <AlertModal
        toggle={isStopModalOpen}
        title="일기를 그만 쓸까요?"
        okText="그만둘래요"
        handleOk={handleStopOk}
        closeText="닫기"
        handleClose={handleStopCancel}
      />
      <Drawer
        open={isEditDrawingOpen}
        placement="bottom"
        title="그림 수정"
        closeIcon={<CloseIcon />}
        onClose={toggleEditDrawing}
        height={230}
        style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
      >
        <button
          disabled={drawingRecord.beforeImages.length < 2}
          className={
            drawingRecord.beforeImages.length > 1
              ? "text-black"
              : "text-gray-50"
          }
          onClick={linkBeforePage}
        >
          전에 그린 그림 보기
        </button>
        <button
          disabled={drawingRecord.remainingTries < 1}
          className={`justify-between ${drawingRecord.remainingTries > 1 ? "text-black" : "text-gray-50"}`}
        >
          <span>
            다시 그리기({drawingRecord.remainingTries}/{defaultTries})
          </span>
          {drawingRecord.remainingTries < 1 && (
            <span>그릴 수 있는 횟수가 끝났어요</span>
          )}
        </button>
      </Drawer>
    </div>
  );
};

export default AddDiaryPage;
