import IconComponentProps from "./IconComponentProps";

const FillBookmarkIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? "14"}
    height={height ?? "18"}
    viewBox="0 0 14 18"
    fill="none"
  >
    <path
      d="M12 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18L7 15L14 18V2C14 0.9 13.1 0 12 0Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default FillBookmarkIcon;
