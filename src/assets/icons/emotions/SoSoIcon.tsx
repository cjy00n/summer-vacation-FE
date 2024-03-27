import IconComponentProps from "../IconComponentProps";

const SoSoIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "16"}
    height={height ?? "16"}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
      fill={fillColor ?? "#120603"}
    />
    <path
      d="M6 6C6 6.55228 5.55228 7 5 7C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5C5.55228 5 6 5.44772 6 6Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 7C5.55228 7 6 6.55228 6 6C6 5.44772 5.55228 5 5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7Z"
      fill={fillColor ?? "black"}
    />
    <path
      d="M12 6C12 6.55228 11.5523 7 11 7C10.4477 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5C11.5523 5 12 5.44772 12 6Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10C11.1852 10.3705 11.0351 10.821 10.6646 11.0062L9.78262 11.4472C9.28995 11.6936 8.71005 11.6936 8.21737 11.4472L7.1118 10.8944C7.04142 10.8592 6.95858 10.8592 6.8882 10.8944L6.00623 11.3354C5.63574 11.5207 5.18524 11.3705 5 11C4.81476 10.6295 4.96492 10.179 5.33541 9.99378L6.21737 9.55279C6.71005 9.30646 7.28995 9.30646 7.78262 9.55279L8.8882 10.1056C8.95858 10.1408 9.04142 10.1408 9.1118 10.1056L9.99377 9.6646C10.3643 9.47936 10.8148 9.62952 11 10Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default SoSoIcon;
