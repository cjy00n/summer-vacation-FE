import { useState } from "react";
import { EditIcon, FileDownloadIcon, TrashIcon } from "../../assets/icons";
import { AlertModal, CircleButton } from "../common";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { message } from "antd";
import { useDeleteDiary } from "../../hooks/deleteDiary";
import { Diary } from "../../types";
import { FeedShareButton } from ".";

const FeedBottomMine = ({ diaryData }: { diaryData: Diary }) => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const [isSureDeleteModalOpen, setIsSureDeleteModalOpen] = useState(false);

  /* 삭제 확인 모달 토글 */
  const toggleSureDeleteModal = () => {
    setIsSureDeleteModalOpen(!isSureDeleteModalOpen);
  };

  const { mutate: deleteDiary } = useDeleteDiary(diaryData.id);

  /* 일기 삭제 함수 */
  const handleDeleteDiary = async () => {
    deleteDiary();
  };

  /* 일기 수정 함수 */
  const handleEditDiary = () => {
    navigate(ROUTE.ADD_DIARY_PAGE.link, {
      state: { existingDiary: diaryData },
    });
  };

  /* 파일 다운로드 => 준비중 */
  const handleFileDownload = () => {
    messageApi.warning("다운로드 기능은 준비중이에요.");
  };

  return (
    <div
      id="feed-bottom-mine"
      className="fixed bottom-[80px] left-[50%] z-10 flex w-[320px] -translate-x-1/2 transform justify-between"
    >
      <FeedShareButton feedId={diaryData.id} />
      <CircleButton
        type="dangerous"
        icon={<TrashIcon />}
        onClick={toggleSureDeleteModal}
      />
      <CircleButton icon={<EditIcon />} onClick={handleEditDiary} />
      <CircleButton icon={<FileDownloadIcon />} onClick={handleFileDownload} />
      {contextHolder}
      <AlertModal
        toggle={isSureDeleteModalOpen}
        title="일기를 정말 삭제할까요?"
        closeText="다시 생각할게요"
        okText="삭제할래요"
        handleClose={toggleSureDeleteModal}
        handleOk={handleDeleteDiary}
      />
    </div>
  );
};

export default FeedBottomMine;
