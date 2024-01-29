import IconComponentProps from "./IconComponentProps";

const HomeIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Home" clipPath="url(#clip0_2_990)">
      <path
        id="Vector"
        d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
        fill={fillColor ?? "#A3A09D"}
      />
    </g>
    <defs>
      <clipPath id="clip0_2_990">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default HomeIcon;
