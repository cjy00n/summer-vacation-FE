import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useGetMyDiaries } from "../../hooks/getMyDiaries";
import { format } from "date-fns";
import { DateType, DiaryLocalstorageType, Emotion, Weather } from "../../types";
import { ko } from "date-fns/locale";
import { AddDiaryExitModal, SelectDateModal, TodayChoiceSection } from ".";
import { EmotionData, WeatherData } from "../../assets/data";
import { Drawer, Switch, message } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import {
  getDiaryLocalStorage,
  setDiaryLocalStorage,
} from "../../utils/handleDiaryLocalStorage";
import { AddIcon, CloseIcon, EditIcon } from "../../assets/icons";
import { useRecoilState } from "recoil";
import { drawingRecordState } from "../../recoil/atoms/drawingRecordState";
import { CustomButton } from "../common";
import { usePatchDiary } from "../../hooks/patchDiary";
import { useGetDiary } from "../../hooks/getDiary";
import {
  DEFAULT_TRIES,
  MAX_CONTENT_LENGTH,
  MAX_TITLE_LENGTH,
} from "../../constant/constant";

const AddDiarySection = () => {
  const navigate = useNavigate();

  const { diary_id } = useParams<{ diary_id: string }>(); // 일기 수정 시 쿼리파라미터로 해당 아이디 받아옴
  const { state } = useLocation(); // 캘린더페이지에서 일기쓰기로 넘어오면 해당 날짜를 state로 받아옴
  const [drawingRecord] = useRecoilState(drawingRecordState);

  const existingData = getDiaryLocalStorage(); // 페이지 전환 시 기존의 작성하던 다이어리 데이터 불러오기

  const [todayIsAlready, setTodayIsAlready] = useState(false); // 새 일기 작성 시, 이미 오늘 일기를 작성했는지 여부
  const [isEditDrawingOpen, setIsEditDrawingOpen] = useState(false); // 사진 수정 Drawer 오픈 여부
  const [isStopModalOpen, setIsStopModalOpen] = useState(false); // close Modal 창 오픈 여부
  const [isChangeDateOpen, setIsChangeDateOpen] = useState(false); // 날짜 선택 Modal 오픈 여부

  const { data: myDiaryData } = useGetMyDiaries();
  const { data: originalData, isSuccess: getDiarySuccess } = useGetDiary(
    diary_id!,
  ); // 일기 수정 시 기존 내용 불러오기

  const [diaryData, setDiaryData] = useState<DiaryLocalstorageType>({
    contents: existingData?.contents ?? "",
    emotion: existingData?.emotion ?? EmotionData[0],
    weather: existingData?.weather ?? WeatherData[0],
    title: existingData?.title ?? "",
    englishContents: existingData?.englishContents ?? "",
    isPublic: existingData?.isPublic != undefined ? existingData.isPublic : 1,
    date:
      state && state.date
        ? state.date
        : existingData?.date
          ? existingData.date
          : new Date(),
  }); // 현재 사용자에게 보여지는 다이어리 데이터(state)

  const diaryDataRef = useRef<{
    title: HTMLInputElement | null;
    contents: HTMLTextAreaElement | null;
    date: HTMLSpanElement | null;
  }>({
    title: null,
    contents: null,
    date: null,
  });

  useEffect(() => {
    // 일기 수정 시 기존 내용 불러오고 나면 화면에 적용하기
    if (getDiarySuccess && originalData) {
      setDiaryData({
        contents: originalData.diary_contents,
        title: originalData.diary_title,
        emotion: originalData.diary_emotion,
        weather: originalData.diary_weather,
        date: originalData.diary_date,
      });
    }
  }, [getDiarySuccess, originalData]);

  /* 다이어리 데이터 state 업데이트 함수 */
  const updateField = <K extends keyof DiaryLocalstorageType>(
    field: K,
    value: DiaryLocalstorageType[K],
  ) => {
    setDiaryData({ ...diaryData, [field]: value });
  };

  /* 일기 내용 MAX_CONTENT_LENGTH 보다 넘으면 slice 후 업데이트 */
  const handleContentValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > MAX_CONTENT_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_CONTENT_LENGTH);
    }
    updateField("contents", e.target.value);
  };

  /* 일기 제목 MAX_TITLE_LENGTH 보다 넘으면 slice 후 업데이트 */
  const handleTitleValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_TITLE_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_TITLE_LENGTH);
    }
    updateField("title", e.target.value);
  };

  useEffect(() => {
    // 현재 선택된 날짜에 일기를 작성했는지 여부 저장
    if (myDiaryData && !diary_id) {
      setTodayIsAlready(
        myDiaryData!.some(
          (diary) =>
            format(diaryData.date as Date, "yyyyMMdd", {
              locale: ko,
            }) === format(diary.diary.date as Date, "yyyyMMdd", { locale: ko }),
        ),
      );
    }
  }, [myDiaryData, diary_id, diaryData.date]);

  /* 날짜 선택 모달 창 토글 함수 */
  const toggleChangeDateModal = () => {
    setIsChangeDateOpen(!isChangeDateOpen);
  };

  /* 번역 페이지로 이동 (제목, 내용 길이 0 아닐때만) */
  const linkTransferPage = () => {
    if (todayIsAlready && diaryDataRef.current.date) {
      message.open({ type: "error", content: "날짜를 선택해주세요." });
      diaryDataRef.current.date.focus();
      diaryDataRef.current.date.scrollIntoView({ behavior: "smooth" });
    } else if (diaryData.title?.length === 0 && diaryDataRef.current.title) {
      message.open({ type: "error", content: "제목을 입력해주세요." });
      diaryDataRef.current.title.focus();
      diaryDataRef.current.title.scrollIntoView({ behavior: "smooth" });
    } else if (
      diaryData.contents?.length < 10 &&
      diaryDataRef.current.contents
    ) {
      message.open({
        type: "error",
        content: "내용을 10자 이상 입력해주세요.",
      });
      diaryDataRef.current.contents.focus();
      diaryDataRef.current.contents.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(ROUTE.ADD_DIARY_TRANSLATE_PAGE.link);
      setDiaryLocalStorage(diaryData);
    }
  };

  /* 사진 수정 Drawer 토글 함수 */
  const toggleEditDrawing = () => {
    setIsEditDrawingOpen(!isEditDrawingOpen);
  };

  /* close 모달 창 토글 함수 */
  const toggleStopModal = () => {
    setIsStopModalOpen(!isStopModalOpen);
  };

  /* 일기 수정하기 */
  const { mutate: patchDiary, isSuccess: patchDiarySuccess } = usePatchDiary({
    id: diary_id!,
    ...diaryData,
  });

  const handleEditDiary = () => {
    patchDiary();
  };

  useEffect(() => {
    if (patchDiarySuccess) {
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patchDiarySuccess]);

  /* 미리보기 페이지로 이동 */
  const linkPreviewPage = () => {
    navigate(ROUTE.ADD_DIARY_PREVIEW_PAGE.link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* 전에 그린 그림 보기 => 전에 그린 그림 페이지로 이동 */
  const linkBeforePage = () => {
    navigate(ROUTE.ADD_DIARY_BEFORE_PAGE.link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* 제목 입력칸에서 엔터 키 클릭 시 내용 입력 칸으로 이동 */
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextInputRef: HTMLTextAreaElement | null,
  ) => {
    if (e.key === "Enter" && nextInputRef) {
      e.preventDefault();
      nextInputRef.focus();
    }
  };

  return (
    <div>
      {/* ↓ 날짜 선택 컨테이너 */}
      <div className="flex h-14 items-center justify-between border-b px-6 py-2">
        <span className="mr-8 text-sm font-medium">날짜</span>
        <div
          className="flex w-4/5 justify-between"
          ref={(ref) => (diaryDataRef.current.date = ref)}
        >
          {todayIsAlready ? (
            <span className="text-sm text-gray-50">날짜를 선택해주세요.</span>
          ) : (
            <span className={"text-sm font-medium "}>
              {format(diaryData.date!.toString(), "yyy년 MM월 dd일 eeee", {
                locale: ko,
              })}
            </span>
          )}
          {!diary_id && (
            <button
              className="text-sm font-normal text-primary-orange"
              onClick={toggleChangeDateModal}
            >
              {todayIsAlready ? "선택" : "변경"}
            </button>
          )}
        </div>
        <SelectDateModal
          date={diaryData.date}
          setDate={(date: DateType) => updateField("date", date)}
          toggle={isChangeDateOpen}
          setToggle={toggleChangeDateModal}
        />
      </div>
      {/* ↓ 제목 입력 컨테이너 */}
      <div className="flex h-14 items-center justify-between px-6 py-2">
        <span className="mr-8 text-sm font-medium">제목</span>
        <div className="flex w-4/5 justify-between">
          <input
            ref={(ref) => (diaryDataRef.current.title = ref)}
            value={diaryData.title}
            onChange={handleTitleValue}
            placeholder="제목을 입력하세요"
            className="bg-transparent text-sm placeholder-gray-50"
            onKeyDown={(e) => handleKeyDown(e, diaryDataRef.current.contents)}
          />
          <span className=" text-xs text-gray-30">
            {diaryData.title?.length + "/" + MAX_TITLE_LENGTH}
          </span>
        </div>
      </div>
      {/* ↓ 일기 내용 컨테이너 */}
      <div className="flex flex-col border-y-2 px-6">
        <textarea
          ref={(ref) => (diaryDataRef.current.contents = ref)}
          value={diaryData.contents}
          onChange={handleContentValue}
          placeholder="내용 쓰기"
          className="h-28 resize-none bg-transparent pt-3 text-sm placeholder-gray-50 outline-none"
          maxLength={80}
        />
        <span className="w-full pb-2 text-right text-xs text-gray-30">
          {diaryData.contents.length + "/" + MAX_CONTENT_LENGTH}
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
        {drawingRecord.beforeImages.length || diary_id ? (
          <div className="relative ">
            {!diary_id && (
              <button
                onClick={toggleEditDrawing}
                className="absolute right-2 top-2 rounded-full bg-black bg-opacity-20 p-1"
              >
                <EditIcon width={32} height={32} />
              </button>
            )}
            <img
              src={
                diary_id
                  ? "https://" + originalData?.diary_imageUrl
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
      </div>
      <div className="mx-auto w-[320px] py-4">
        {diary_id ? (
          <div className="flex w-[320px] justify-between">
            <CustomButton
              content={"취소"}
              type="white"
              size="half"
              onClick={toggleStopModal}
            />
            <CustomButton
              content={"수정 완료하기"}
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
              drawingRecord.beforeImages.length || diary_id
                ? "default"
                : "disabled"
            }
          />
        )}
      </div>

      <AddDiaryExitModal
        isOpen={isStopModalOpen}
        toggleOpen={toggleStopModal}
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
          onClick={linkTransferPage}
        >
          <span>
            다시 그리기({drawingRecord.remainingTries}/{DEFAULT_TRIES})
          </span>
          {drawingRecord.remainingTries < 1 && (
            <span>그릴 수 있는 횟수가 끝났어요</span>
          )}
        </button>
      </Drawer>
    </div>
  );
};

export default AddDiarySection;
