import { useState } from "react";
import { GenderBirthYear, Nickname } from "../components/Start";

const StartPage = () => {
  const [currentPage] = useState<"first" | "second">("first");

  const handleNicknameAgree = (nickname: string) => {
    // 닉네임 저장 api

    console.log(nickname);
  };
  return (
    <div className="scrollbar-hide flex h-[100vh] flex-col items-center overflow-y-scroll bg-gray-90 py-[10vh]">
      {currentPage === "first" && <GenderBirthYear />}
      {currentPage === "second" && (
        <Nickname
          handleAgree={(nickname: string) => handleNicknameAgree(nickname)}
        />
      )}
    </div>
  );
};

export default StartPage;
