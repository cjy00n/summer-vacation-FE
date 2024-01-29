import IconComponentProps from "./IconComponentProps";

const ArrowLeftIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0_120_3498)">
      <path
        d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
        fill={fillColor ?? "black"}
      />
    </g>
    <defs>
      <clipPath id="clip0_120_3498">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowLeftIcon;
