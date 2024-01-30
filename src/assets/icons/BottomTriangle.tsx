import IconComponentProps from "./IconComponentProps";

const BottomTriangle = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? "16"}
    height={height ?? "12"}
    viewBox="0 0 16 12"
    fill="none"
  >
    <g filter="url(#filter0_d_157_4882)">
      <path d="M12 2H4L8 6L12 2Z" fill={fillColor ?? "#F7F7F7"} />
    </g>
    <defs>
      <filter
        id="filter0_d_157_4882"
        x="0"
        y="0"
        width="16"
        height="12"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_157_4882"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_157_4882"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default BottomTriangle;
