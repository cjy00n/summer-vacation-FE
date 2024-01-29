import IconComponentProps from "./IconComponentProps";

const AddIcon = ({
  width = 24,
  height = 24,
  fillColor,
}: IconComponentProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Add" clipPath="url(#clip0_118_1930)">
      <path
        id="Vector"
        d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
        fill={fillColor ?? "#A3A09D"}
      />
    </g>
    <defs>
      <clipPath id="clip0_118_1930">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default AddIcon;
