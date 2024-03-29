import IconComponentProps from "../IconComponentProps";

const SnowIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 8.5C12.8283 8.5 13.4999 7.82843 13.4999 7C13.4999 6.17157 12.8283 5.5 11.9999 5.5C11.1715 5.5 10.4999 6.17157 10.4999 7C10.4999 7.82843 11.1715 8.5 11.9999 8.5ZM11.9999 10C13.6567 10 14.9999 8.65685 14.9999 7C14.9999 5.34315 13.6567 4 11.9999 4C10.343 4 8.99989 5.34315 8.99989 7C8.99989 8.65685 10.343 10 11.9999 10Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 19.5C14.4852 19.5 16.4999 17.4853 16.4999 15C16.4999 12.5147 14.4852 10.5 11.9999 10.5C9.51461 10.5 7.49989 12.5147 7.49989 15C7.49989 17.4853 9.51461 19.5 11.9999 19.5ZM11.9999 21C15.3136 21 17.9999 18.3137 17.9999 15C17.9999 11.6863 15.3136 9 11.9999 9C8.68618 9 5.99989 11.6863 5.99989 15C5.99989 18.3137 8.68618 21 11.9999 21Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.9999 10.0001C20.2928 10.293 20.2928 10.7678 19.9999 11.0607L16.0606 15.0001C15.7677 15.293 15.2928 15.293 14.9999 15.0001C14.7071 14.7072 14.707 14.2323 14.9999 13.9394L18.9393 10.0001C19.2322 9.70716 19.7071 9.70716 19.9999 10.0001Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.99994 11.0001C5.29284 10.7072 5.76771 10.7072 6.0606 11.0001L6.99994 11.9394C7.29284 12.2323 7.29284 12.7072 6.99994 13.0001C6.70705 13.2929 6.23218 13.293 5.93928 13.0001L4.99994 12.0607C4.70705 11.7678 4.70705 11.2929 4.99994 11.0001Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default SnowIcon;
