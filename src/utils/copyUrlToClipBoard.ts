import { message } from "antd";

export const copyUrlToClipBoard = () => {
  const dummy = document.createElement("input");
  const text = location.href;

  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  message.success("주소가 클립보드에 복사되었어요");
};
