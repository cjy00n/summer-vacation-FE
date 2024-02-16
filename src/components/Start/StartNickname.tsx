import { useEffect, useState } from "react";
import { CustomButton } from "../common";
import { Modal } from "antd";
import { usePatchAddUserInfo } from "../../hooks/patchAddUserInfo";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";

const StartNickname = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isNicknameDecisionOpen, setIsNicknameDecisionOpen] = useState(false);
  const [disableNickname, setDisableNickname] = useState<
    "default" | "disabled"
  >("disabled");

  useEffect(() => {
    const regex = /^[가-힣a-zA-Z0-9.\-_]+$/;

    setDisableNickname("disabled");
    if (nickname.length > 10) {
      setErrorMessage("닉네임은 10자까지 가능해요.");
    } else if (nickname.length === 1) {
      setErrorMessage("닉네임은 2글자 이상이어야 해요.");
    } else if (!regex.test(nickname) && nickname.length !== 0) {
      setErrorMessage(
        "한글/영어/숫자와 온점(.), 하이픈(-), 언더바(_)만을 사용하여 닉네임을 작성해주세요",
      );
    } else if (nickname.length !== 0) {
      setErrorMessage("");
      setDisableNickname("default");
    }
  }, [nickname]);

  const toggleNicknameDecision = () => {
    setIsNicknameDecisionOpen(!isNicknameDecisionOpen);
  };
  const { mutate: patchAddUserInfo } = usePatchAddUserInfo();

  const handleNicknameAgree = () => {
    patchAddUserInfo({ nickname });
    console.log(nickname);
    scrollTo(0, 0);
    navigate(ROUTE.HOME_PAGE.link);
  };

  return (
    <div className="w-[320px]">
      <h1 className="text-xl font-bold">닉네임 결정</h1>
      <p className="text-sm font-normal">
        더 나은 서비스 경험을 위해
        <br />
        저희에게 알려주세요.
      </p>

      <div className="pt-[15vh]">
        <h2 className="py-[2vh] text-lg font-semibold">닉네임</h2>
        <div className="flex flex-col  px-8">
          <input
            className="border-b-2 border-solid border-primary-orange bg-transparent p-1 text-center"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력해주세요."
          />
          <p className="h-36 py-2 text-center text-sm text-error-red">
            {errorMessage}
          </p>
        </div>
      </div>

      <div className="fixed bottom-[3vh] pb-[5vh] pt-[10vh] ">
        <CustomButton
          size="long"
          type={disableNickname}
          content={"닉네임 사용하기"}
          onClick={toggleNicknameDecision}
        />
      </div>

      <Modal
        open={isNicknameDecisionOpen}
        centered
        title={
          <div className="mb-2 mt-4 text-center text-lg font-semibold">
            닉네임 결정
            <p className="text-sm font-normal">
              <b className="text-sm text-primary-orange">{nickname}</b>(으)로
              결정할까요?
              <br />
              닉네임은 프로필 메뉴에서 변경 가능해요.
            </p>
          </div>
        }
        footer={null}
        closeIcon={null}
      >
        <div className="mt-6 flex items-end justify-center">
          <CustomButton
            onClick={toggleNicknameDecision}
            size="half"
            type="white"
            content={"다시 고를래요"}
          />
          <CustomButton
            onClick={handleNicknameAgree}
            size="half"
            content={"결정할래요"}
          />
        </div>
      </Modal>
    </div>
  );
};

export default StartNickname;
