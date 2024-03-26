import IconComponentProps from "./IconComponentProps";

const PersonIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2_971)">
      <g clipPath="url(#clip1_2_971)">
        <circle cx="12" cy="9" r="4" fill={fillColor ?? "#120603"} />
        <path
          d="M19 22C20.1046 22 21.0285 21.0778 20.6412 20.0433C20.5497 19.7986 20.4408 19.5576 20.3149 19.3212C19.8626 18.4719 19.1997 17.7003 18.364 17.0503C17.5282 16.4002 16.5361 15.8846 15.4442 15.5328C14.3522 15.1811 13.1819 15 12 15C10.8181 15 9.64778 15.1811 8.55585 15.5328C7.46392 15.8846 6.47177 16.4002 5.63604 17.0503C4.80031 17.7003 4.13738 18.4719 3.68508 19.3212C3.55921 19.5576 3.45034 19.7986 3.35875 20.0433C2.97154 21.0778 3.89543 22 5 22L12 22H19Z"
          fill={fillColor ?? "#120603"}
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2_971">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_2_971">
        <rect width="24" height="24" fill="white" transform="translate(0 1)" />
      </clipPath>
    </defs>
  </svg>
);

export default PersonIcon;
