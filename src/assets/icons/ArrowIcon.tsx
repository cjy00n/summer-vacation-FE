import IconComponentProps from "./IconComponentProps";

const ArrowIcon = ({
  width,
  height,
  fillColor,
  direction,
}: IconComponentProps & { direction?: "right" | "bottom" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
    className={direction === "right" ? "rotate-180" : ""}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.61643 10.6072L14.3825 4.53703C14.7107 4.24261 15.217 4.27635 15.5032 4.61171C15.7795 4.93553 15.7472 5.42066 15.4303 5.70494L8.63529 11.801C8.51787 11.9064 8.51787 12.0936 8.63529 12.199L15.4303 18.2951C15.7472 18.5793 15.7795 19.0645 15.5032 19.3883C15.217 19.7236 14.7107 19.7574 14.3825 19.463L7.61643 13.3928C6.79452 12.6555 6.79452 11.3445 7.61643 10.6072Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default ArrowIcon;
