import { Drawer, Switch, message } from "antd";
import { CloseIcon } from "../../assets/icons";
import { usePatchDiary } from "../../api/patchDiary";
import { useGetDiary } from "../../api/getDiary";

interface FeedDetailMoreDrawerProps {
  toggle: () => void;
  open: boolean;
  id: string;
  isPublic?: 0 | 1 | null;
}

const FeedDetailMoreDrawer = ({
  open,
  toggle,
  id,
  isPublic,
}: FeedDetailMoreDrawerProps) => {
  const { data: diaryData } = useGetDiary(id);

  const { mutate: patchDiary } = usePatchDiary({
    id,
    isPublic: diaryData?.diary_isPublic === 0 ? 1 : 0,
  });

  const handleIsPublic = () => {
    patchDiary();
  };

  /* 신고하기 버튼 클릭 시 */
  const handleRepost = () => {
    message.warning("신고 기능은 현재 준비 중이에요.");
  };

  return (
    <Drawer
      open={open}
      placement="bottom"
      title="더 보기"
      closeIcon={<CloseIcon />}
      onClose={toggle}
      height={230}
      style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
    >
      {isPublic === null ? (
        <button onClick={handleRepost}>신고하기</button>
      ) : (
        <div className="flex justify-between">
          <span>나만보기</span>
          <Switch
            checked={diaryData?.diary_isPublic === 0}
            className="bg-gray-200"
            onChange={handleIsPublic}
          />
        </div>
      )}
    </Drawer>
  );
};

export default FeedDetailMoreDrawer;
