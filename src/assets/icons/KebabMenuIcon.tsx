import IconComponentProps from "./IconComponentProps";

const KebabMenuIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "23"}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_763_65085)">
      <circle
        cx="12"
        cy="6"
        r="2"
        transform="rotate(90 12 6)"
        fill={fillColor ?? "#120603"}
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        transform="rotate(90 12 12)"
        fill={fillColor ?? "#120603"}
      />
      <circle
        cx="12"
        cy="18"
        r="2"
        transform="rotate(90 12 18)"
        fill={fillColor ?? "#120603"}
      />
    </g>
    <defs>
      <clipPath id="clip0_763_65085">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default KebabMenuIcon;
