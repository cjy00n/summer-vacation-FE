import { useState } from "react";
import { FullScreenIcon } from "../assets/icons";
import { TopAppBar, CustomButton, NotFound } from "../components/common";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { useRecoilState } from "recoil";
import { drawingRecordState } from "../recoil/atoms/drawingRecordState";
import { updateDrawingRecord } from "../recoil/utils/updateDrawingRecord";

const AddDiaryBeforePage = () => {
  const navigate = useNavigate();

  const [isshowModal, setIsShowModal] = useState(false);
  const [previewImg, setPreviewImg] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);

  const [drawingRecord, setDrawingRecord] = useRecoilState(drawingRecordState);
  const { beforeImages } = drawingRecord;

  const reversedBeforeImages = [...beforeImages].slice(0, -1).reverse();

  const toggleShowModal = () => {
    setIsShowModal(!isshowModal);
  };

  const handlePreviewImg = (img: string, idx: number) => {
    setPreviewImg(img);
    setSelectedIdx(idx);
  };

  /* 전에 그린 그림 아이템 각각 클릭 시 */
  const onClickItem = (img: string, idx: number) => {
    handlePreviewImg(img, idx);
    toggleShowModal();
  };

  const handleSelectDrawing = (idx: number) => {
    const selectedImage = beforeImages[beforeImages.length - 2 - idx];
    updateDrawingRecord(setDrawingRecord, {
      ...drawingRecord,
      beforeImages: [...beforeImages, selectedImage],
    });

    navigate(ROUTE.ADD_DIARY_PREVIEW_PAGE.link);
  };

  return beforeImages.length > 0 ? (
    <div className="">
      <TopAppBar title="전에 그린 그림 보기" leftGoBack />
      <div className="grid w-full grid-cols-2">
        {reversedBeforeImages.map((img, idx) => (
          <div key={img + idx} className="cursor-pointer">
            <div
              onClick={() => onClickItem(img, idx)}
              className="relative border-[2px_solid_white] p-[1px]"
            >
              <span className="absolute right-1 top-1">
                <FullScreenIcon />
              </span>
              <img
                src={img}
                className="row-span-1 h-[50vw] w-[50vw] object-cover custom-breakpoint:h-[240px] custom-breakpoint:w-[240px] "
              />
            </div>
          </div>
        ))}
      </div>
      <Modal
        title={null}
        footer={null}
        centered
        open={isshowModal}
        onCancel={toggleShowModal}
        closeIcon={null}
      >
        <div className="flex flex-col items-center justify-center">
          <img
            src={previewImg}
            className="mb-2 h-[300px] w-[300px] object-cover"
          />
          <div className="flex w-full justify-around">
            <CustomButton
              content="닫기"
              onClick={toggleShowModal}
              size="half"
              type="white"
            />
            <CustomButton
              content="선택"
              onClick={() => handleSelectDrawing(selectedIdx)}
              size="half"
            />
          </div>
        </div>
      </Modal>
    </div>
  ) : (
    <NotFound />
  );
};

export default AddDiaryBeforePage;
