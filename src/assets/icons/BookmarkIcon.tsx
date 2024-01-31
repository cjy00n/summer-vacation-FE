import IconComponentProps from "./IconComponentProps";

const BookmarkIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.4862 17.8232C19.6454 17.7448 19.8022 17.664 19.9614 17.5856C20.1847 18.0679 20.1538 17.4455 20.199 17.1105C19.6383 16.507 19.883 14.7561 19.9614 14.022C19.3983 14.0695 19.3746 14.1194 19.0111 14.2596C19.0111 13.6252 19.0111 12.9933 19.0111 12.359C19.2819 12.0881 19.1061 12.359 19.2487 11.8838C19.4078 11.8838 19.5647 11.8838 19.7238 11.8838C19.6454 11.6462 19.5647 11.4086 19.4862 11.1711C19.3271 11.0927 19.1703 11.0119 19.0111 10.9335C19.0895 10.3799 19.1703 9.82401 19.2487 9.27046C19.1703 9.27046 19.0895 9.27046 19.0111 9.27046C18.9327 8.87371 19.2368 8.84995 19.2487 8.79531C19.2487 8.71691 19.2487 8.63613 19.2487 8.55773C19.1703 8.55773 19.0895 8.55773 19.0111 8.55773C19.0111 8.55773 19.2249 7.92102 19.2487 7.60742C19.0895 7.60742 18.9327 7.60742 18.7735 7.60742C18.8519 7.29144 18.9327 6.97309 19.0111 6.65711C18.8519 6.57871 18.6951 6.49794 18.5359 6.41954C18.5359 6.26036 18.5359 6.10356 18.5359 5.94438C18.6951 5.94438 18.8519 5.94438 19.0111 5.94438C19.0111 5.78521 19.0111 5.62841 19.0111 5.46923C19.0895 5.46923 19.1703 5.46923 19.2487 5.46923C19.3817 5.60465 19.2819 6.39816 19.7238 6.18196C19.7238 6.10356 19.7238 6.02279 19.7238 5.94438C19.8022 5.94438 19.883 5.94438 19.9614 5.94438C19.9614 5.70681 19.9614 5.46923 19.9614 5.23165C19.8022 5.23165 19.6454 5.23165 19.4862 5.23165C19.4387 4.6686 19.3888 4.64484 19.2487 4.28135C17.5856 4.93231 17.7044 3.47121 15.4474 4.04377C15.4474 4.12217 15.4474 4.20295 15.4474 4.28135C15.0507 4.20295 14.6563 4.12217 14.2596 4.04377C14.2596 4.12217 14.2596 4.20295 14.2596 4.28135C14.022 4.28135 13.7844 4.28135 13.5468 4.28135C13.5468 4.28135 13.3093 3.91786 12.8341 4.04377C12.8341 4.12217 12.8341 4.20295 12.8341 4.28135C12.5965 4.28135 12.3589 4.28135 12.1214 4.28135C12.1214 4.35975 12.1214 4.44052 12.1214 4.51892C11.7816 4.72086 11.7127 4.6876 11.1711 4.7565C11.1711 4.59732 11.1711 4.44052 11.1711 4.28135C10.8551 4.28135 10.5367 4.28135 10.2208 4.28135C10.2208 4.51892 10.2208 4.7565 10.2208 4.99408C10.1424 4.99408 10.0616 4.99408 9.98318 4.99408C9.20155 3.5995 8.65038 4.69236 7.60741 4.99408C7.60741 5.15325 7.60741 5.31005 7.60741 5.46923C6.85667 5.49536 7.16315 5.93488 6.89468 5.23165C7.05386 5.23165 7.21066 5.23165 7.36984 5.23165C7.36984 4.99408 7.36984 4.7565 7.36984 4.51892C7.13226 4.59732 6.89468 4.6781 6.65711 4.7565C6.65711 4.8349 6.65711 4.91568 6.65711 4.99408C6.41953 4.91568 6.18195 4.8349 5.94438 4.7565C5.94438 4.8349 5.94438 4.91568 5.94438 4.99408C5.56663 5.31481 5.53099 5.50962 5.46922 6.18196C5.7068 6.18196 5.94438 6.18196 6.18195 6.18196C6.18195 6.26036 6.18195 6.34114 6.18195 6.41954C5.49298 6.83292 5.96576 6.85906 5.7068 7.13227C5.47635 7.37697 5.46922 6.89469 5.46922 6.89469C5.09148 6.63098 5.26016 7.26294 5.23165 7.36985C5.70918 8.01605 4.92042 8.97586 5.23165 10.4583C5.31005 10.4583 5.39082 10.4583 5.46922 10.4583C5.46922 10.5367 5.46922 10.6175 5.46922 10.6959C5.39082 10.6959 5.31005 10.6959 5.23165 10.6959C5.13662 11.2162 5.48823 11.7911 5.46922 11.8838C5.39082 11.8838 5.31005 11.8838 5.23165 11.8838C5.23165 12.043 5.23165 12.1998 5.23165 12.359C5.15325 12.359 5.07247 12.359 4.99407 12.359C4.81114 12.9268 5.26491 13.276 5.23165 13.5468C5.15325 13.5468 5.07247 13.5468 4.99407 13.5468C4.99407 14.022 4.99407 14.4971 4.99407 14.9723C4.97506 15.0459 4.69235 15.0412 4.75649 15.4475C4.83489 15.4475 4.91567 15.4475 4.99407 15.4475C4.91567 15.6066 4.83489 15.7634 4.75649 15.9226C4.91567 16.001 5.07247 16.0818 5.23165 16.1602C5.52149 17.0321 4.63295 16.8468 4.75649 17.5856C4.83489 17.5856 4.91567 17.5856 4.99407 17.5856C4.99407 17.7448 4.99407 17.9016 4.99407 18.0608C5.07247 18.0608 5.15325 18.0608 5.23165 18.0608C5.19601 18.5336 4.7755 18.429 4.75649 18.536C4.75649 18.6144 4.75649 18.6951 4.75649 18.7735C4.83489 18.7735 4.91567 18.7735 4.99407 18.7735C5.03446 19.1109 4.75649 19.2487 4.75649 19.2487C4.83489 19.4863 4.91567 19.7238 4.99407 19.9614C5.15325 19.9614 5.31005 19.9614 5.46922 19.9614C5.54762 20.1206 5.6284 20.2774 5.7068 20.4366C6.10355 20.3582 6.49793 20.2774 6.89468 20.199C6.89468 19.9614 6.89468 19.7238 6.89468 19.4863C7.7262 19.3556 7.3342 19.2534 8.08257 19.4863C8.05643 18.7355 7.61692 19.042 8.32014 18.7735C8.32014 18.8519 8.32014 18.9327 8.32014 19.0111C8.39855 19.0111 8.47932 19.0111 8.55772 19.0111C8.69789 17.7947 9.06376 18.2414 9.50803 17.5856C9.58643 17.3481 9.6672 17.1105 9.7456 16.8729C9.98318 16.9513 10.2208 17.0321 10.4583 17.1105C10.4583 17.0321 10.4583 16.9513 10.4583 16.8729C10.3799 16.8729 10.2992 16.8729 10.2208 16.8729C9.94992 16.4975 10.8052 16.652 10.9335 16.6353C10.9335 16.4762 10.9335 16.3194 10.9335 16.1602C11.6462 16.3194 12.3589 16.4762 13.0717 16.6353C13.0717 17.0321 13.0717 17.4265 13.0717 17.8232C13.5468 17.9824 14.022 18.1392 14.4971 18.2984C14.4187 18.4576 14.338 18.6144 14.2596 18.7735C14.5755 18.8519 14.8939 18.9327 15.2099 19.0111C15.2099 19.1703 15.2099 19.3271 15.2099 19.4863C15.5258 19.4863 15.8442 19.4863 16.1602 19.4863C16.1602 19.6454 16.1602 19.8022 16.1602 19.9614C16.9846 20.0588 17.9159 20.8998 19.0111 20.4366C19.0895 20.2774 19.1703 20.1206 19.2487 19.9614C19.4078 19.9614 19.5647 19.9614 19.7238 19.9614C19.8592 19.3817 19.9733 19.4364 20.199 19.0111C19.826 18.7094 19.6217 18.3792 19.4862 17.8232ZM14.9699 4.51417C14.9699 4.59257 14.9699 4.67335 14.9699 4.75175C14.4924 4.61633 14.7632 4.78026 14.4948 4.51417C14.6539 4.51417 14.8131 4.51417 14.9699 4.51417ZM8.31777 5.46686C8.31777 5.54526 8.31777 5.62603 8.31777 5.70443C7.84024 5.56901 8.11108 5.73294 7.84262 5.46686C7.99942 5.46686 8.15859 5.46686 8.31777 5.46686ZM17.8232 14.7323C17.8232 14.9699 17.8232 15.2075 17.8232 15.4451C17.7448 15.4451 17.664 15.4451 17.5856 15.4451C17.5049 15.8513 17.8066 15.8513 17.8232 15.9202C17.8232 16.3954 17.8232 16.8705 17.8232 17.3457C17.4051 17.3576 16.1602 17.5833 16.1602 17.5833C16.0818 17.4241 16.001 17.2673 15.9226 17.1081C15.7634 17.1081 15.6066 17.1081 15.4474 17.1081C15.4474 16.9489 15.4474 16.7921 15.4474 16.633C15.5258 16.633 15.6066 16.633 15.685 16.633C15.7397 16.3004 15.5971 16.6971 15.4474 16.3954C15.179 15.9868 15.2978 16.0723 14.7347 15.9202C14.7347 15.7611 14.7347 15.6043 14.7347 15.4451C14.2596 15.1291 13.7844 14.8107 13.3093 14.4948C13.3877 14.3356 13.4684 14.1788 13.5468 14.0196C13.3877 14.0196 13.2309 14.0196 13.0717 14.0196C13.0717 13.9412 13.0717 13.8604 13.0717 13.782C12.7343 13.5397 12.4754 13.5825 11.8838 13.5445C11.8838 13.3853 11.8838 13.2285 11.8838 13.0693C11.5132 13.352 11.4585 14.0648 10.9335 13.5445C10.9335 13.7036 10.9335 13.8604 10.9335 14.0196C10.2136 14.8321 11.2091 15.1244 9.50803 15.2075C9.35598 15.8585 9.1968 15.7492 9.03288 16.3954C8.55772 16.3954 8.08257 16.3954 7.60741 16.3954C7.68581 16.7114 7.76659 17.0297 7.84499 17.3457C7.76659 17.3457 7.68581 17.3457 7.60741 17.3457C7.60741 17.4241 7.60741 17.5049 7.60741 17.5833C7.29144 17.5833 6.97308 17.5833 6.65711 17.5833C6.80441 16.8872 7.20116 16.1032 6.89468 15.6827C6.81628 15.4451 6.73551 15.2075 6.65711 14.9699C6.57871 14.9699 6.49793 14.9699 6.41953 14.9699C6.47417 14.5993 6.89468 14.4948 6.89468 14.4948C7.00635 13.9697 6.57871 13.8699 6.41953 13.5445C6.57871 13.4661 6.73551 13.3853 6.89468 13.3069C7.11801 13.7892 7.08712 13.1667 7.13226 12.8317C7.05386 12.8317 6.97308 12.8317 6.89468 12.8317C6.62385 13.1026 6.89468 12.9268 6.41953 13.0693C6.64048 12.2497 6.72838 12.625 7.13226 12.119C6.97308 12.119 6.81628 12.119 6.65711 12.119C6.23422 11.8695 7.13226 11.8814 7.13226 11.8814C6.98259 11.2091 6.71413 11.3207 6.65711 10.9311C6.73551 10.9311 6.81628 10.9311 6.89468 10.9311C6.97308 10.6935 7.05386 10.456 7.13226 10.2184C7.21066 10.2184 7.29144 10.2184 7.36984 10.2184C7.28906 9.84539 6.93745 9.83827 6.89468 9.74324C6.89468 9.50566 6.89468 9.26808 6.89468 9.03051C6.73551 8.95211 6.57871 8.87133 6.41953 8.79293C6.27698 8.4033 6.95883 6.59059 7.13226 6.41716C8.07544 7.1394 8.43656 5.50724 9.27045 5.70443C9.34885 5.86361 9.42963 6.02041 9.50803 6.17959C9.7456 6.17959 9.98318 6.17959 10.2208 6.17959C10.2208 6.25799 10.2208 6.33876 10.2208 6.41716C10.3015 6.43379 11.8173 6.19146 12.3589 6.17959C12.3589 6.02041 12.3589 5.86361 12.3589 5.70443C12.7913 5.71394 13.5468 5.94201 13.5468 5.94201C13.5468 5.86361 13.5468 5.78283 13.5468 5.70443C13.7844 5.70443 14.022 5.70443 14.2596 5.70443C14.2596 5.78283 14.2596 5.86361 14.2596 5.94201C14.6326 6.14157 14.8321 6.13682 15.4474 6.17959C15.4474 6.02041 15.4474 5.86361 15.4474 5.70443C15.5258 5.70443 15.6066 5.70443 15.685 5.70443C15.7634 5.94201 15.8442 6.17959 15.9226 6.41716C16.001 6.41716 16.0818 6.41716 16.1602 6.41716C16.1602 6.25799 16.1602 6.10119 16.1602 5.94201C16.6353 5.94201 17.1105 5.94201 17.5856 5.94201C17.5856 6.41716 17.5856 6.89232 17.5856 7.36747C17.664 7.36747 17.7448 7.36747 17.8232 7.36747C17.8232 7.44587 17.8232 7.52665 17.8232 7.60505C17.7448 7.60505 17.664 7.60505 17.5856 7.60505C17.5856 8.0018 17.5856 8.39618 17.5856 8.79293C17.5072 8.79293 17.4265 8.79293 17.3481 8.79293C17.3481 8.87133 17.3481 8.95211 17.3481 9.03051C17.531 9.29184 17.6617 8.94023 17.5856 9.26808C17.5072 9.26808 17.4265 9.26808 17.3481 9.26808C17.4265 10.8527 17.5072 12.4374 17.5856 14.0196C17.664 14.0196 17.7448 14.0196 17.8232 14.0196C17.8232 14.1788 17.8232 14.3356 17.8232 14.4948C17.9016 14.4948 17.9824 14.4948 18.0608 14.4948C18.1036 14.8298 17.8969 14.4045 17.8232 14.7323ZM18.7735 9.26808C18.5359 9.26808 18.2984 9.26808 18.0608 9.26808C18.0608 9.18968 18.0608 9.10891 18.0608 9.03051C18.2984 9.03051 18.5359 9.03051 18.7735 9.03051C18.7735 9.10891 18.7735 9.18968 18.7735 9.26808Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default BookmarkIcon;
