interface ProfileTopTabProp {
  currentTab: "My-Diary" | "Bookmark";
  setCurretTab: React.Dispatch<"My-Diary" | "Bookmark">;
}

const ProfileTopTab = ({ currentTab, setCurretTab }: ProfileTopTabProp) => {
  const ToggleTopTab = () => {
    if (currentTab === "Bookmark") setCurretTab("My-Diary");
    if (currentTab === "My-Diary") setCurretTab("Bookmark");
  };

  return (
    <div className="flex w-full bg-primary-white text-center">
      <div
        onClick={ToggleTopTab}
        className={` w-1/2 px-3 py-2 text-base font-bold
      ${
        currentTab === "My-Diary"
          ? "rounded-t-3xl bg-primary-orange text-primary-white"
          : "bg-primary-white text-gray-50"
      }`}
      >
        내 일기
      </div>
      <div
        onClick={ToggleTopTab}
        className={`w-1/2 px-3 py-2 text-base font-bold ${
          currentTab === "Bookmark"
            ? "rounded-t-3xl bg-primary-orange text-primary-white"
            : "bg-primary-white text-gray-50"
        }`}
      >
        북마크
      </div>
    </div>
  );
};

export default ProfileTopTab;
