import IconComponentProps from "./IconComponentProps";

const ProfileIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0_173_2695)">
      <circle cx="12" cy="12" r="10" fill={fillColor ?? "#BAB6B4"} />
    </g>
    <defs>
      <clipPath id="clip0_173_2695">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ProfileIcon;
