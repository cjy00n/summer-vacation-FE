import { useNavigate } from "react-router-dom";
import { AlertModal } from "../common";
import { ROUTE } from "../../routes/Route";
import { clearDiaryLocalStorage } from "../../utils/handleDiaryLocalStorage";
import { updateDrawingRecord } from "../../recoil/utils/updateDrawingRecord";
import { useRecoilState } from "recoil";
import { drawingRecordState } from "../../recoil/atoms/drawingRecordState";

interface AddDiaryExitModalProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const AddDiaryExitModal = ({ isOpen, toggleOpen }: AddDiaryExitModalProps) => {
  const navigate = useNavigate();

  const [drawingRecord, setDrawingRecord] = useRecoilState(drawingRecordState);
  /* close 모달 창 - 나가기 선택 시  => 로컬스토리지 비우며 홈 화면으로 이동 */
  const handleStopOk = () => {
    navigate(ROUTE.HOME_PAGE.link);
    clearDiaryLocalStorage();
    updateDrawingRecord(setDrawingRecord, {
      ...drawingRecord,
      beforeImages: [],
    });
  };

  return (
    <AlertModal
      toggle={isOpen}
      title="일기를 그만 쓸까요?"
      okText="그만둘래요"
      handleOk={handleStopOk}
      closeText="닫기"
      handleClose={toggleOpen}
    />
  );
};

export default AddDiaryExitModal;
