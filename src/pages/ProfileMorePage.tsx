import { ArrowIcon } from "../assets/icons";
import { TopAppBar } from "../components/common";
import MenuListItem, {
  MenuListItemProps,
} from "../components/common/MenuListItem";

const ProfileMorePage = () => {
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
    <div>
      <TopAppBar leftGoBack title={"더 보기"} />
      {ProfileMoreMenuList.map((menu) => (
        <MenuListItem
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
