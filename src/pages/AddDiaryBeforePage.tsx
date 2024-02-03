import { useState } from "react";
import { FullScreenIcon } from "../assets/icons";
import { TopAppBar, CustomButton } from "../components/common";
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

  const [drawingRecord, setDrawingRecord] = useRecoilState(drawingRecordState);
  const { beforeImages } = drawingRecord;

  const toggleShowModal = () => {
    setIsShowModal(!isshowModal);
  };

  const handlePreviewImg = (img: string) => {
    setPreviewImg(img);
  };

  /* 전에 그린 그림 아이템 각각 클릭 시 */
  const onClickItem = (img: string) => {
    handlePreviewImg(img);
    toggleShowModal();
  };

  const handleSelectDrawing = (idx: number) => {
    const selectedImage = drawingRecord.beforeImages.slice(idx + 1, 1)[0];
    updateDrawingRecord(setDrawingRecord, {
      ...drawingRecord,
      beforeImages: [...drawingRecord.beforeImages, selectedImage],
    });

    navigate(ROUTE.ADD_DIARY_CONFIRM_PAGE.link);
  };

  return (
    <div className="">
      <TopAppBar title="전에 그린 그림 보기" leftGoBack />
      <div className="grid w-full grid-cols-2">
        {beforeImages.slice(0, -1).map((img, idx) => (
          <div key={img + idx}>
            <div
              onClick={() => onClickItem(img)}
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
                    onClick={() => handleSelectDrawing(idx)}
                    size="half"
                  />
                </div>
              </div>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddDiaryBeforePage;
