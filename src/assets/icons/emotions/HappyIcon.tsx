import IconComponentProps from "../IconComponentProps";

const HappyIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
      fill={fillColor ?? "#120603"}
    />
    <path
      d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z"
      fill={fillColor ?? "black"}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z"
      fill={fillColor ?? "black"}
    />
    <path
      d="M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10Z"
      fill={fillColor ?? "black"}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z"
      fill={fillColor ?? "black"}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.3544 16.0152C10.4328 15.8652 9.63186 15.4551 9.03894 15.0172C8.70575 14.7711 8.707 14.2929 8.9999 14C9.29279 13.7071 9.76764 13.7111 10.1136 13.9388C10.5196 14.206 11.0327 14.4431 11.5954 14.5347C12.2795 14.6461 13.0743 14.5509 13.9005 13.9571C14.2368 13.7153 14.707 13.7071 14.9999 14C15.2928 14.2929 15.2958 14.773 14.9701 15.0289C13.7588 15.981 12.488 16.1998 11.3544 16.0152Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default HappyIcon;
