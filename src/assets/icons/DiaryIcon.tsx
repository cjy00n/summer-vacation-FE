import IconComponentProps from "./IconComponentProps";

const AddIcon = ({
  width = 24,
  height = 24,
  fillColor,
}: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "23"}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 7.5L16.0633 6.21616C16.5865 6.09542 17.1117 6.40941 17.2529 6.92743L19.7263 15.9964C19.8757 16.5442 19.5396 17.1062 18.9864 17.2339L13.5 18.5M10.5 7.5L5.01361 8.76609C4.4604 8.89375 4.12432 9.45585 4.27371 10.0036L6.74706 19.0726C6.88834 19.5906 7.4135 19.9046 7.93669 19.7838L13.5 18.5M10.5 7.5L13.5 18.5"
      stroke={fillColor ?? "black"}
      stroke-width="1.5"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.225 5.01088C19.5988 5.1603 19.7878 5.57835 19.653 5.95769L16.9574 13.5443C16.815 13.945 16.368 14.1471 15.9731 13.9892C15.5993 13.8398 15.4103 13.4218 15.5451 13.0424L18.2407 5.45586C18.3831 5.05508 18.8301 4.85301 19.225 5.01088Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default AddIcon;
