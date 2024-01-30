import IconComponentProps from "./IconComponentProps";

const BookmarkIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0_65_11795)">
      <path
        d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_65_11795">
        <rect width="24" height="24" fill={fillColor ?? "white"} />
      </clipPath>
    </defs>
  </svg>
);

export default BookmarkIcon;
