import IconComponentProps from "./IconComponentProps";

const FeedIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill={fillColor ?? "#A3A09D"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group">
      <path
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3V11H11V3H3ZM9 9H5V5H9V9ZM3 13V21H11V13H3ZM9 19H5V15H9V19ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13 13V21H21V13H13ZM19 19H15V15H19V19Z"
        fill={fillColor ?? "#A3A09D"}
      />
    </g>
  </svg>
);
export default FeedIcon;
