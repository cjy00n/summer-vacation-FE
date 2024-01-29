import IconComponentProps from "./IconComponentProps";

const CalendarIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0_120_914)">
      <path
        d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z"
        fill={fillColor ?? "#A3A09D"}
      />
    </g>
    <defs>
      <clipPath id="clip0_120_914">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default CalendarIcon;
