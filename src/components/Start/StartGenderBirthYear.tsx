import { useState } from "react";
import { CustomButton } from "../common";
import { Select } from "antd";
import { Gender } from "../../types";
import { usePatchAddUserInfo } from "../../hooks/patchAddUserInfo";
const { Option } = Select;

interface StartGenderBirtYearProps {
  setCurrentPage: (next: "first" | "second") => void;
}

const StartGenderBirthYear = ({ setCurrentPage }: StartGenderBirtYearProps) => {
  const [gender, setGender] = useState<Gender>("남자");
  const [birthYear, setBirthYear] = useState(2000);

  const { mutate: patchAddUserInfo } = usePatchAddUserInfo();

  const handleGenderAndBirtYearAgree = () => {
    patchAddUserInfo({ gender, birth: birthYear.toString() });
    setCurrentPage("second");
    scrollTo(0, 0);
  };

  return (
    <div className="w-[320px]">
      <h1 className="text-xl font-bold">시작하기</h1>
      <p className="text-sm font-normal">
        더 나은 서비스 경험을 위해
        <br />
        저희에게 알려주세요.
      </p>

      <div className="pt-[8dvh]">
        <h2 className="py-[2dvh] text-lg font-semibold">성별</h2>
        <div className="flex content-between px-6">
          <CustomButton
            content={"남자"}
            onClick={() => setGender("남자")}
            type={gender === "남자" ? "default" : "white"}
            size="short"
          />

          <CustomButton
            content={"여자"}
            onClick={() => setGender("여자")}
            type={gender === "여자" ? "default" : "white"}
            size="short"
          />
        </div>
      </div>

      <div className="pt-[5dvh]">
        <h2 className="py-[2dvh] text-lg font-semibold">태어난 해</h2>
        <div className="flex items-center justify-center">
          <Select
            defaultValue={birthYear}
            onChange={(value) => setBirthYear(value)}
            suffixIcon={null}
            style={{
              width: 100,
              marginRight: "5px",
              borderBottom: "2px solid #FF6D3C",
              textAlign: "center",
            }}
          >
            {Array.from(
              new Array(100),
              (_, index) => new Date().getFullYear() - index,
            ).map((year) => (
              <Option key={year} value={year}>
                {year}
              </Option>
            ))}
          </Select>
          <span>년에 태어났어요</span>
        </div>
      </div>
      <div className="fixed bottom-[3dvh] pb-[2dvh]">
        <p className="py-5 text-center text-sm font-normal opacity-70">
          동의해요 버튼을 누를 경우, <br />
          작성한 개인 정보 수집/이용에 <br />
          동의하는 것으로 간주합니다. <br />
        </p>
        <CustomButton
          size="long"
          content={"동의해요"}
          onClick={handleGenderAndBirtYearAgree}
        />
      </div>
    </div>
  );
};

export default StartGenderBirthYear;
