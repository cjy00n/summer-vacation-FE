import { Banner } from "../../components/Home";
import { TopAppBar } from "../../components/common";

const HomePage = () => {
  return (
    <div>
      <TopAppBar />
      <Banner />
      <h2>내 일기</h2>
      <p>최근 7일 간 받은 공감 순</p>
    </div>
  );
};

export default HomePage;
