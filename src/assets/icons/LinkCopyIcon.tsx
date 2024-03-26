import IconComponentProps from "./IconComponentProps";

const LinkCopyIcon = ({
  width = 24,
  height = 24,
  fillColor,
}: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="path-1-inside-1_763_44236" fill="white">
      <rect x="7" y="4" width="13" height="13" rx="1" />
    </mask>
    <rect
      x="7"
      y="4"
      width="13"
      height="13"
      rx="1"
      fill={fillColor ?? "black"}
      stroke={fillColor ?? "black"}
      stroke-width="3"
      mask="url(#path-1-inside-1_763_44236)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.25 18V6.75024C4.25 6.33603 4.58579 6.00024 5 6.00024C5.41421 6.00024 5.75 6.33603 5.75 6.75024V18C5.75 18.1381 5.86193 18.25 6 18.25H17.25C17.6642 18.25 18 18.5858 18 19C18 19.4143 17.6642 19.75 17.25 19.75H6C5.0335 19.75 4.25 18.9665 4.25 18Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default LinkCopyIcon;
