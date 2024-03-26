import { IconComponentProps } from "../../types";

const FileDownloadIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "23"}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 13.4395V5.75C11.25 5.33579 11.5858 5 12 5C12.4142 5 12.75 5.33579 12.75 5.75V13.4395L15.9458 10.8829C16.2693 10.6241 16.7413 10.6766 17 11C17.2588 11.3234 17.2063 11.7954 16.8829 12.0542L12.6247 15.4607C12.2595 15.7529 11.7405 15.7529 11.3753 15.4607L7.11715 12.0542C6.7937 11.7954 6.74126 11.3234 7.00002 11C7.25877 10.6766 7.73074 10.6241 8.05419 10.8829L11.25 13.4395Z"
      fill={fillColor ?? "white"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 18C18 18.4142 17.6642 18.75 17.25 18.75H6.75C6.33579 18.75 6 18.4142 6 18C6 17.5858 6.33579 17.25 6.75 17.25H17.25C17.6642 17.25 18 17.5858 18 18Z"
      fill={fillColor ?? "white"}
    />
  </svg>
);

export default FileDownloadIcon;
