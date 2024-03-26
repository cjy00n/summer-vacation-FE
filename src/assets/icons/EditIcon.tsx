import IconComponentProps from "./IconComponentProps";

const EditIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "24"}
    height={height ?? "23"}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.7071 3.64653C15.3166 3.25601 14.6834 3.25601 14.2929 3.64653L3.54289 14.3965C3.35536 14.5841 3.25 14.8384 3.25 15.1036V19.7501C3.25 20.3024 3.69772 20.7501 4.25 20.7501H8.89645C9.16166 20.7501 9.41602 20.6447 9.60355 20.4572L20.3536 9.70719C20.7441 9.31667 20.7441 8.6835 20.3536 8.29298L15.7071 3.64653ZM4.75 19.2501V15.3107L5.03039 15.0304L8.96973 18.9697L8.68934 19.2501H4.75ZM16.4697 11.4697L18.9393 9.00008L15 5.06074L12.5304 7.53036L16.4697 11.4697Z"
      fill={fillColor ?? "white"}
    />
  </svg>
);

export default EditIcon;
