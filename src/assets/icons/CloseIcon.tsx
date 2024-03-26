import IconComponentProps from "./IconComponentProps";

const CloseIcon = ({ width, height, fillColor }: IconComponentProps) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "23"}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_763_62852)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.6578 18.4722C18.3635 18.7637 17.8864 18.7637 17.5921 18.4722L5.53281 6.52782C5.23852 6.23633 5.23852 5.76373 5.53281 5.47224C5.8271 5.18076 6.30424 5.18076 6.59853 5.47224L18.6578 17.4167C18.9521 17.7082 18.9521 18.1808 18.6578 18.4722Z"
          fill={fillColor ?? "black"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.34219 18.4722C5.63648 18.7637 6.11362 18.7637 6.40791 18.4722L18.4672 6.52782C18.7615 6.23633 18.7615 5.76373 18.4672 5.47224C18.1729 5.18076 17.6958 5.18076 17.4015 5.47224L5.34219 17.4167C5.0479 17.7082 5.0479 18.1808 5.34219 18.4722Z"
          fill={fillColor ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_763_62852">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseIcon;
