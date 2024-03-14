import { useState } from "react";
import { GenderBirthYear, Nickname } from "../components/Start";

const StartPage = () => {
  const [currentPage, setCurrentPage] = useState<"first" | "second">("first");

  return (
    <div className="scrollbar-hide flex min-h-dvh w-full flex-col items-center overflow-y-scroll bg-gray-90 py-[10dvh] custom-breakpoint:w-[480px]">
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
