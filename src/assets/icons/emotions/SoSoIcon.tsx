import IconComponentProps from "../IconComponentProps";

const SoSoIcon = ({ width, height, fillColor }: IconComponentProps) => (
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
      d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
      fill={fillColor ?? "#120603"}
    />
    <path
      d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z"
      fill={fillColor ?? "black"}
    />
    <path
      d="M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 14C15.1852 14.3705 15.0351 14.821 14.6646 15.0062L13.7826 15.4472C13.2899 15.6936 12.71 15.6936 12.2174 15.4472L11.1118 14.8944C11.0414 14.8592 10.9586 14.8592 10.8882 14.8944L10.0062 15.3354C9.63574 15.5207 9.18524 15.3705 9 15C8.81476 14.6295 8.96492 14.179 9.33541 13.9938L10.2174 13.5528C10.71 13.3065 11.2899 13.3065 11.7826 13.5528L12.8882 14.1056C12.9586 14.1408 13.0414 14.1408 13.1118 14.1056L13.9938 13.6646C14.3643 13.4794 14.8148 13.6295 15 14Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default SoSoIcon;
