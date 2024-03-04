import { LoginRequired, TopAppBar } from "../components/common";
import { CloseIcon } from "../assets/icons";
import { useState } from "react";
import { AddDiaryExitModal, AddDiarySection } from "../components/AddDiary";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../recoil/atoms/isLoggedinState";

const AddDiaryPage = () => {
  const [isLoggedIn] = useRecoilState(isLoggedInState); // 로그인 여부

  const [isStopModalOpen, setIsStopModalOpen] = useState(false); // close Modal 창 오픈 여부
  const toggleStopModal = () => {
    setIsStopModalOpen(!isStopModalOpen);
  };

  return (
    <div className="mb-16">
      <TopAppBar
        title="일기쓰기"
        leftGoBack={!isLoggedIn}
        rightIcon={isLoggedIn ? <CloseIcon /> : <></>}
        rightOnClick={toggleStopModal}
      />
      {isLoggedIn ? (
        <>
          <AddDiarySection />
          <AddDiaryExitModal
            isOpen={isStopModalOpen}
            toggleOpen={toggleStopModal}
          />
        </>
      ) : (
        <LoginRequired />
      )}
    </div>
  );
};

export default AddDiaryPage;
