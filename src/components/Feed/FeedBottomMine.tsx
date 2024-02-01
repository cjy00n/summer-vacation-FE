import { useState } from "react";
import {
  EditIcon,
  FileDownloadIcon,
  ShareIcon,
  TrashIcon,
} from "../../assets/icons";
import { AlertModal, CircleButton } from "../common";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { message } from "antd";

const FeedBottomMine = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const [isSureDeleteModalOpen, setIsSureDeleteModalOpen] = useState(false);

  /* 삭제 확인 모달 토글 */
  const toggleSureDeleteModal = () => {
    setIsSureDeleteModalOpen(!isSureDeleteModalOpen);
  };

  /* 클립보드에 현재 주소 복사 */
  const copyUrlToClipBoard = () => {
    const dummy = document.createElement("input");
    const text = location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    messageApi.success("주소가 클립보드에 복사되었어요");
  };

  /* 일기 삭제 함수 */
  const handleDeleteDiary = () => {
    // 백엔드 연결 필요
  };

  /* 일기 수정 함수 */
  const handleEditDiary = () => {
    // 백엔드 연결 필요
    navigate(ROUTE.ADD_DIARY_PAGE.link, { state: { title: "기존일기" } });
  };

  /* 파일 다운로드 => 준비중 */
  const handleFileDownload = () => {
    messageApi.warning("다운로드 기능은 준비중이에요.");
  };

  return (
    <div
      id="feed-bottom-mine"
      className="fixed z-10 bottom-[100px] left-[50%] transform -translate-x-1/2 flex w-[320px] justify-between"
    >
      <CircleButton
        type="dangerous"
        icon={<TrashIcon />}
        onClick={toggleSureDeleteModal}
      />
      <CircleButton icon={<ShareIcon />} onClick={copyUrlToClipBoard} />
      <CircleButton icon={<EditIcon />} onClick={handleEditDiary} />
      <CircleButton icon={<FileDownloadIcon />} onClick={handleFileDownload} />
      {contextHolder}
      <AlertModal
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
