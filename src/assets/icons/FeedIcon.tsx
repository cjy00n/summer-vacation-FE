import IconComponentProps from "./IconComponentProps";

const FeedIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "23"}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="path-1-inside-1_763_68175" fill="white">
      <rect x="5.5" y="6" width="6" height="12" rx="1" />
    </mask>
    <rect
      x="5.5"
      y="6"
      width="6"
      height="12"
      rx="1"
      stroke={fillColor ?? "black"}
      strokeWidth="3"
      mask="url(#path-1-inside-1_763_68175)"
    />
    <mask id="path-2-inside-2_763_68175" fill="white">
      <rect x="12.5" y="6" width="6" height="12" rx="1" />
    </mask>
    <rect
      x="12.5"
      y="6"
      width="6"
      height="12"
      rx="1"
      stroke={fillColor ?? "black"}
      strokeWidth="3"
      mask="url(#path-2-inside-2_763_68175)"
    />
  </svg>
);
export default FeedIcon;
