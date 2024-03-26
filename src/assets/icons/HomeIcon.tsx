import IconComponentProps from "./IconComponentProps";

const HomeIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2_990)">
      <g clip-path="url(#clip1_2_990)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2928 4.70696L3.70701 12.2927C3.07704 12.9227 3.52321 13.9998 4.41411 13.9998H5.9999C6.55219 13.9998 6.9999 14.4476 6.9999 14.9998V20.9998C6.9999 21.5521 7.44762 21.9998 7.9999 21.9998H15.9999C16.5522 21.9998 16.9999 21.5521 16.9999 20.9998V14.9998C16.9999 14.4476 17.4476 13.9998 17.9999 13.9998H19.5857C20.4766 13.9998 20.9228 12.9227 20.2928 12.2927L12.707 4.70696C12.3165 4.31643 11.6833 4.31643 11.2928 4.70696ZM8.99991 15.5C8.99991 14.6716 9.67148 14 10.4999 14H13.4999C14.3283 14 14.9999 14.6716 14.9999 15.5V18.5C14.9999 19.3284 14.3283 20 13.4999 20H10.4999C9.67148 20 8.99991 19.3284 8.99991 18.5V15.5ZM10.4999 15C10.2238 15 9.99991 15.2239 9.99991 15.5V16.5H11.4999V15H10.4999ZM9.99991 18.5V17.5H11.4999V19H10.4999C10.2238 19 9.99991 18.7761 9.99991 18.5ZM13.4999 19H12.4999V17.5H13.9999V18.5C13.9999 18.7761 13.7761 19 13.4999 19ZM13.9999 15.5V16.5H12.4999V15H13.4999C13.7761 15 13.9999 15.2239 13.9999 15.5Z"
          fill={fillColor ?? "#120603"}
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2_990">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_2_990">
        <rect width="24" height="24" fill="white" transform="translate(0 1)" />
      </clipPath>
    </defs>
  </svg>
);

export default HomeIcon;
