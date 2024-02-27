import { Drawer } from "antd";
import { CloseIcon, ShareIcon, StarIcon } from "../../assets/icons";
import { CircleButton } from "../common";
import { useState } from "react";
import { useGetDiary } from "../../hooks/getDiary";
import { copyUrlToClipBoard } from "../../utils/copyUrlToClipBoard";

interface FeedShareButton {
  feedId: string;
}

const FeedShareButton = ({ feedId }: FeedShareButton) => {
  const { data: diaryData } = useGetDiary(feedId);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const TEMPLATE_ID = parseInt(import.meta.env.VITE_APP_KAKAO_TEMPLATE_ID, 10);

  const shareKaKao = () => {
    window.Kakao.Share.sendCustom({
      templateId: TEMPLATE_ID,
      templateArgs: {
        title: diaryData?.diary_title,
        contents: diaryData?.diary_contents,
        image: "https://" + diaryData?.diary_imageUrl,
        likeCount: diaryData?.totalCount,
      },
    });
  };

  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Drawer
        id="FeedShareButton"
        open={drawerOpen}
        placement="bottom"
        title="공유하기"
        closeIcon={<CloseIcon />}
        onClose={toggleDrawerOpen}
        height={180}
        style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
      >
        <div className="flex gap-3">
          <div className="flex flex-col items-center border-none">
            <button
              onClick={shareKaKao}
              className="mb-1 rounded-full bg-yellow-400 p-1"
            >
              <StarIcon width={32} height={32} />
            </button>
            <span>카카오톡</span>
          </div>
          <div className="flex flex-col items-center">
            <button
              onClick={copyUrlToClipBoard}
              className="mb-1 rounded-full bg-blue-300 p-1"
            >
              <StarIcon width={32} height={32} />
            </button>
            <span>링크복사</span>
          </div>
        </div>
      </Drawer>
      <CircleButton
        icon={<ShareIcon fillColor="white" />}
        onClick={toggleDrawerOpen}
      />
    </>
  );
};

export default FeedShareButton;
