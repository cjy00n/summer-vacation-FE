import IconComponentProps from "./IconComponentProps";

const AddIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "23"}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_763_63095)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 19C11.5858 19 11.25 18.6642 11.25 18.25V5.75C11.25 5.33579 11.5858 5 12 5C12.4142 5 12.75 5.33579 12.75 5.75V18.25C12.75 18.6642 12.4142 19 12 19Z"
        fill={fillColor ?? "black"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 12C5 11.5858 5.33578 11.25 5.75 11.25L18.25 11.25C18.6642 11.25 19 11.5858 19 12C19 12.4142 18.6642 12.75 18.25 12.75L5.75 12.75C5.33579 12.75 5 12.4142 5 12Z"
        fill={fillColor ?? "black"}
      />
    </g>
    <defs>
      <clipPath id="clip0_763_63095">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default AddIcon;
