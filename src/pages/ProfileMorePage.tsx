import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../assets/icons";
import { TopAppBar } from "../components/common";
import MenuListItem, {
  MenuListItemProps,
} from "../components/common/MenuListItem";
import { ROUTE } from "../routes/Route";
import { usePostUserWithdrawal } from "../hooks/postUserWithdrawal";

const ProfileMorePage = () => {
  const navigate = useNavigate();

  const { mutate: postWithdrawal } = usePostUserWithdrawal();

  const ProfileMoreMenuList: MenuListItemProps[] = [
    {
      title: "알림 설정",
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
        postWithdrawal();
      },
    },
    {
      title: "로그아웃",
      onClick: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        navigate(ROUTE.LOGIN_PAGE.link);
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
      leftContents: "team-crayon@gmail.com",
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
    </div>
  );
};

export default ProfileMorePage;
