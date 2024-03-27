import IconComponentProps from "../IconComponentProps";

const HappyIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "16"}
    height={height ?? "16"}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
      fill={fillColor ?? "#120603"}
    />
    <path
      d="M6 6C6 6.55228 5.55228 7 5 7C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5C5.55228 5 6 5.44772 6 6Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 7C5.55228 7 6 6.55228 6 6C6 5.44772 5.55228 5 5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7Z"
      fill={fillColor ?? "black"}
    />
    <path
      d="M12 6C12 6.55228 11.5523 7 11 7C10.4477 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5C11.5523 5 12 5.44772 12 6Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.35439 12.0152C6.43279 11.8652 5.63186 11.4551 5.03894 11.0172C4.70575 10.7711 4.707 10.2929 4.9999 9.99997C5.29279 9.70708 5.76764 9.71106 6.11364 9.93879C6.51956 10.206 7.03266 10.4431 7.5954 10.5347C8.27955 10.6461 9.07428 10.5509 9.90049 9.95706C10.2368 9.7153 10.707 9.70708 10.9999 9.99997C11.2928 10.2929 11.2958 10.773 10.9701 11.0289C9.75878 11.981 8.48797 12.1998 7.35439 12.0152Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default HappyIcon;
