import { TopAppBar } from "../components/common";
import { CloseIcon } from "../assets/icons";
import { useState } from "react";
import { AddDiaryExitModal, AddDiarySection } from "../components/AddDiary";

const AddDiaryPage = () => {
  const [isStopModalOpen, setIsStopModalOpen] = useState(false); // close Modal 창 오픈 여부
  const toggleStopModal = () => {
    setIsStopModalOpen(!isStopModalOpen);
  };

  return (
    <div className="mb-16">
      <TopAppBar
        title="일기쓰기"
        rightIcon={<CloseIcon />}
        rightOnClick={toggleStopModal}
      />
      <AddDiarySection />
      <AddDiaryExitModal
        isOpen={isStopModalOpen}
        toggleOpen={toggleStopModal}
      />
    </div>
  );
};

export default AddDiaryPage;
