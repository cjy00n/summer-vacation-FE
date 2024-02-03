import { useState } from "react";
import { GenderBirthYear, Nickname } from "../components/Start";
import { Gender } from "../types";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { usePatchAddUserInfo } from "../hooks/patchAddUserInfo";

const StartPage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<"first" | "second">("first");

  const { mutate: patchAddUserInfo } = usePatchAddUserInfo();

  const handleGenderAndBirtYearAgree = (gender: Gender, birthYear: number) => {
    // 성별, 태어난 해 저장 api
    patchAddUserInfo({ gender, birth: birthYear.toString() });
    console.log(gender, birthYear);
    setCurrentPage("second");
  };

  const handleNicknameAgree = (nickname: string) => {
    // 닉네임 저장 api

    console.log(nickname);
    navigate(ROUTE.HOME_PAGE.link);
  };
  return (
    <div className="flex h-[100vh] flex-col  items-center bg-gray-90 py-[10vh]">
      {currentPage === "first" && (
        <GenderBirthYear
          handleAgree={(gender: "남자" | "여자", birthYear: number) =>
            handleGenderAndBirtYearAgree(gender, birthYear)
          }
        />
      )}
      {currentPage === "second" && (
        <Nickname
          handleAgree={(nickname: string) => handleNicknameAgree(nickname)}
        />
      )}
    </div>
  );
};

export default StartPage;
