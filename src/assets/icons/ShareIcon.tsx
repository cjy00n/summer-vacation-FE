import IconComponentProps from "./IconComponentProps";

const ShareIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "23"}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_763_63502)">
      <g clipPath="url(#clip1_763_63502)">
        <circle cx="18" cy="6" r="3" fill={fillColor ?? "#120603"} />
        <circle cx="18" cy="18" r="3" fill={fillColor ?? "#120603"} />
        <circle cx="6" cy="12" r="3" fill={fillColor ?? "#120603"} />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.45346 10.4348L17.6646 5.32922L18.3354 6.67086L8.12428 11.7764C7.94002 11.8686 7.94002 12.1315 8.12428 12.2237L18.3354 17.3292L17.6646 18.6709L7.45346 13.5653C6.16363 12.9204 6.16362 11.0797 7.45346 10.4348Z"
          fill={fillColor ?? "black"}
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_763_63502">
        <rect width={width ?? "24"} height={height ?? "24"} fill="white" />
      </clipPath>
      <clipPath id="clip1_763_63502">
        <rect width={width ?? "24"} height={height ?? "24"} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ShareIcon;
