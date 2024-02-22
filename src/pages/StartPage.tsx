import { useState } from "react";
import { GenderBirthYear, Nickname } from "../components/Start";

const StartPage = () => {
  const [currentPage, setCurrentPage] = useState<"first" | "second">("first");

  return (
    <div className="scrollbar-hide h-real-screen flex flex-col items-center overflow-y-scroll bg-gray-90 py-[10vh]">
      {currentPage === "first" && (
        <GenderBirthYear
          setCurrentPage={(next: "first" | "second") => setCurrentPage(next)}
        />
      )}
      {currentPage === "second" && <Nickname />}
    </div>
  );
};

export default StartPage;
