import IconComponentProps from "./IconComponentProps";

const FillStarIcon = ({
  width = 24,
  height = 24,
  fillColor = "#FF6D3C",
}: IconComponentProps) => (
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
      d="M11.0027 16.6428C11.1021 16.3644 11.1393 16.082 11.1642 15.8152C11.2276 16.1026 11.3077 16.4079 11.4479 16.6823C11.695 17.1659 12.0756 17.5459 12.4861 17.8515C12.7998 18.0851 13.1283 18.279 13.4992 18.4262C13.7074 18.5088 13.955 18.6049 14.2435 18.5931C14.5454 18.5806 14.8493 18.5364 15.1499 18.3962C15.7944 18.0954 16.1583 17.5627 16.4635 17.0169L16.4648 17.0145L16.4773 16.9922C16.6088 16.7576 16.7863 16.4407 16.7407 16.0628C16.7078 15.7903 16.6437 15.5475 16.521 15.293C16.3869 15.0149 16.2313 14.7471 16.0514 14.4932C15.9449 14.343 15.825 14.2084 15.697 14.0858L15.7502 14.0889L15.8009 14.0918C16.1222 14.1107 16.4597 14.1194 16.8069 14.0475C17.2 13.966 17.6031 13.8092 17.9494 13.6228C18.2267 13.4736 18.5302 13.2648 18.701 12.9204C18.845 12.6301 18.8293 12.2779 18.8 12.0324C18.7584 11.683 18.6221 11.3421 18.485 11.0553C18.3627 10.7994 18.1659 10.5699 18.0017 10.3785L18.0017 10.3784C17.9651 10.3358 17.9302 10.295 17.898 10.2563C17.3229 9.56318 16.4038 9.38097 15.6432 9.32699C15.3675 9.30743 15.0709 9.28723 14.7692 9.30815C14.8005 9.2583 14.8291 9.20783 14.8556 9.15749C14.8682 9.13351 14.882 9.10809 14.8965 9.08135L14.8966 9.08117C14.9875 8.91361 15.1066 8.69401 15.1382 8.45028C15.2798 7.35823 14.5395 6.3163 13.5484 5.9711C12.8905 5.74193 12.1627 5.67521 11.4681 5.84571C11.0849 5.93978 10.7514 6.18778 10.4953 6.41104C10.0747 6.77775 9.89535 7.39875 9.86505 7.87593C9.84355 8.21463 9.85964 8.5466 9.88748 8.87154C9.80298 8.80125 9.71671 8.7399 9.63747 8.68607C9.60995 8.66737 9.58186 8.64793 9.55315 8.62806C9.34451 8.48366 9.10238 8.31607 8.79751 8.23942C8.34611 8.12593 7.8305 8.14117 7.3979 8.21088C7.19154 8.24413 6.94782 8.28673 6.716 8.36759C6.48317 8.4488 6.24601 8.57395 6.06282 8.78307C5.80675 9.07538 5.7535 9.4754 5.75034 9.77593C5.74637 10.153 5.77664 10.5242 5.8684 10.9014C5.94967 11.2355 6.09567 11.6508 6.34277 11.954C6.42783 12.0584 6.5352 12.1351 6.63002 12.1932C6.69374 12.2322 6.76598 12.2709 6.82627 12.3032C6.85165 12.3167 6.87492 12.3292 6.89454 12.3401C7.1817 12.4992 7.48386 12.6466 7.79981 12.7626C8.09953 12.8727 8.39568 12.9471 8.70117 12.9864C8.67791 12.9971 8.6597 13.0052 8.64897 13.0098L8.62305 13.0213L7.83673 13.3786C7.792 13.3989 7.74567 13.4231 7.69996 13.4527C7.60999 13.5109 7.41813 13.6406 7.23174 13.804C7.05565 13.9583 6.84176 14.1785 6.76228 14.4226C6.70773 14.5902 6.70809 14.8211 6.71585 15.0064C6.72074 15.1233 6.73122 15.2581 6.73961 15.3659C6.74432 15.4265 6.74837 15.4785 6.7504 15.5142C6.75258 15.5523 6.75455 15.5911 6.75656 15.6305C6.78278 16.1442 6.81383 16.7527 7.33976 17.1919C7.4033 17.245 7.49414 17.2983 7.58133 17.3453C7.67315 17.3948 7.77868 17.4465 7.88241 17.4953C8.02089 17.5604 8.16726 17.6254 8.27508 17.6733L8.2751 17.6733C8.3254 17.6956 8.36731 17.7142 8.39611 17.7274C8.47277 17.7624 8.57053 17.7859 8.65945 17.8032C8.75346 17.8214 8.85862 17.8364 8.96078 17.8488C9.11066 17.867 9.26498 17.8809 9.37521 17.8908H9.37522C9.41378 17.8943 9.44695 17.8973 9.47264 17.8998C9.92448 17.944 10.3372 17.815 10.5892 17.4325C10.7483 17.191 10.8978 16.9365 11.0027 16.6428Z"
      fill={fillColor ?? "#120603"}
    />
  </svg>
);

export default FillStarIcon;
