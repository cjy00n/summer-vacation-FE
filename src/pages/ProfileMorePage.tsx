import { useRecoilState } from "recoil";
import { ArrowIcon } from "../assets/icons";
import { AlertModal, TopAppBar } from "../components/common";
import MenuListItem, {
  MenuListItemProps,
} from "../components/common/MenuListItem";
import { usePostLogout } from "../hooks/postLogout";
import { usePostUserWithdrawal } from "../hooks/postUserWithdrawal";
import { useState } from "react";
import { isLoggedInState } from "../recoil/atoms/isLoggedinState";
import { message } from "antd";

const ProfileMorePage = () => {
  const [openWithdrawModal, setOpenWithdrawModal] = useState(false);

  const [, setIsLoggedIn] = useRecoilState(isLoggedInState); // 로그인 여부
  const { mutate: postWithdrawal } = usePostUserWithdrawal();
  const { mutate: postLogout } = usePostLogout();

  const toggleOpenWithdrawModal = () => {
    setOpenWithdrawModal(!openWithdrawModal);
  };

  const withDrawal = () => {
    postWithdrawal();
    setIsLoggedIn(false);
  };

  const ProfileMoreMenuList: MenuListItemProps[] = [
    {
      title: "알림 설정",
      onClick: () => {
        message.warning("알림 기능은 현재 준비중이에요.");
      },
    },
    {
      title: "이용 안내",
    },
    {
      title: "이용 약관",
    },
    {
      title: "개인정보 처리방침",
    },
    {
      title: "회원탈퇴",
      onClick: () => {
        toggleOpenWithdrawModal();
      },
    },
    {
      title: "로그아웃",
      onClick: () => {
        postLogout();
        setIsLoggedIn(false);
      },
    },
    {
      title: "오픈 라이선스",
      rightContents: <ArrowIcon direction="right" />,
    },
    {
      title: "현재 버전",
      leftContents: "0.0.1",
      rightContents: "최신 버전",
    },
    {
      title: "문의",
      leftContents: "crayon@gmail.com",
    },
  ];

  return (
    <div className="h-real-screen">
      <TopAppBar leftGoBack title={"더 보기"} />
      {ProfileMoreMenuList.map((menu) => (
        <MenuListItem
          onClick={menu.onClick}
          title={menu.title}
          key={menu.title}
          leftContents={menu.leftContents}
          rightContents={menu.rightContents}
        />
      ))}
      <AlertModal
        title={"회원탈퇴 시 모든 데이터가 삭제됩니다. 정말 탈퇴하시겠습니까?"}
        okText="회원탈퇴하기"
        toggle={openWithdrawModal}
        handleClose={toggleOpenWithdrawModal}
        handleOk={withDrawal}
      />
    </div>
  );
};

export default ProfileMorePage;
