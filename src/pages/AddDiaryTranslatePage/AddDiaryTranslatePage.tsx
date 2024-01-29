import { TopAppBar } from "../../components/common";

const AddDiaryTranslatePage = () => {
  return (
    <>
      <TopAppBar title="글 확인하기" leftGoBack />
      <div>
        <div>
          <h2>AI는 이렇게 생각했어요(역번역)</h2>
          <p>부탁한 그림을 영어로 번역해 그리고 있어요.</p>
          <p>번역된 단어가 어울리지 않을 경우 수정해 주세요.</p>
        </div>
      </div>
    </>
  );
};

export default AddDiaryTranslatePage;
