import { useState } from "react";
import { FullScreenIcon } from "../assets/icons";
import { TopAppBar } from "../components/common";
import { Modal } from "antd";
import { CustomButton } from "../components/AddDiary";

const AddDiaryBeforePage = () => {
  const [isshowModal, setIsShowModal] = useState(false);

  const before = [
    "/rabbit.webp",
    "/sample.webp",
    "/sample.webp",
    "/rabbit.webp",
    "/sample.webp",
  ];

  return (
    <div className="">
      <TopAppBar title="전에 그린 그림 보기" leftGoBack />
      <div className="w-full grid grid-cols-2">
        {before.map((img) => (
          <>
            <div
              onClick={() => setIsShowModal(true)}
              className="relative border-[2px_solid_white] p-[1px]"
              key={img}
            >
              <span className="absolute top-1 right-1">
                <FullScreenIcon />
              </span>
              <img
                src={img}
                className="row-span-1 w-[50vw] h-[50vw] object-cover "
              />
            </div>

            <Modal title={null} footer={null} centered open={isshowModal}>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={img}
                  className="w-[300px] h-[300px] object-cover mb-2"
                />
                <div className="flex justify-around w-full">
                  <CustomButton
                    text="닫기"
                    buttonStyle=" border-black bg-white"
                    textStyle="text-black"
                    onClick={() => setIsShowModal(false)}
                    size="half"
                  />
                  <CustomButton
                    text="선택"
                    onClick={() => setIsShowModal(false)}
                    size="half"
                  />
                </div>
              </div>
            </Modal>
          </>
        ))}
      </div>
    </div>
  );
};

export default AddDiaryBeforePage;
