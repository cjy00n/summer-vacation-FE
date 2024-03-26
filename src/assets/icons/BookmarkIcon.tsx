import IconComponentProps from "./IconComponentProps";

const BookmarkIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "23"}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_763_66945)">
      <path
        d="M18 5H6C5.44772 5 5 5.44772 5 6V17.5858C5 18.4767 6.07714 18.9229 6.70711 18.2929L11.2929 13.7071C11.6834 13.3166 12.3166 13.3166 12.7071 13.7071L17.2929 18.2929C17.9229 18.9229 19 18.4767 19 17.5858V6C19 5.44772 18.5523 5 18 5Z"
        stroke="black"
        stroke-width="1.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_763_66945">
        <rect width="24" height="24" fill={fillColor ?? "white"} />
      </clipPath>
    </defs>
  </svg>
);

export default BookmarkIcon;
