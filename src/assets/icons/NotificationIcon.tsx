import IconComponentProps from "./IconComponentProps";

const NotificationIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? "17"}
    height={height ?? "19"}
    viewBox="0 0 11 17"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4431 14.5858C10.4431 14.1039 10.4431 13.6199 10.4431 13.1379C10.5114 13.1379 10.5817 13.1379 10.6499 13.1379C10.6499 12.8628 10.6499 12.5857 10.6499 12.3106C10.5114 12.3106 10.3748 12.3106 10.2363 12.3106C10.4472 11.5866 10.4307 11.8969 10.0294 11.2763C9.96115 11.2763 9.89083 11.2763 9.82257 11.2763C9.82257 11.0695 9.82257 10.8627 9.82257 10.6558C10.2735 10.4076 10.5052 10.2008 10.6499 9.6216C10.5817 9.6216 10.5114 9.6216 10.4431 9.6216C10.4431 9.41476 10.4431 9.20792 10.4431 9.00107C10.2363 8.86249 10.0294 8.72597 9.82257 8.58739C9.75431 8.31229 9.68398 8.03512 9.61573 7.76002C9.54747 7.76002 9.47714 7.76002 9.40888 7.76002C9.1524 7.12501 9.4337 6.5686 8.9952 6.10527C8.9952 6.03701 8.9952 5.96669 8.9952 5.89843C8.22781 5.47233 7.95891 6.35348 7.34045 5.48474C7.54729 5.553 7.75414 5.62333 7.96098 5.69158C7.96098 5.62333 7.96098 5.553 7.96098 5.48474C8.02924 5.48474 8.09957 5.48474 8.16782 5.48474C8.16782 5.41648 8.16782 5.34616 8.16782 5.2779C7.96098 5.20964 7.75414 5.13931 7.54729 5.07106C7.54729 5.0028 7.54729 4.93247 7.54729 4.86421C7.40871 4.93247 7.27219 5.0028 7.13361 5.07106C7.13361 5.0028 7.13361 4.93247 7.13361 4.86421C7.06535 4.86421 6.99502 4.86421 6.92677 4.86421C6.92677 4.79595 6.92677 4.72563 6.92677 4.65737C6.99502 4.65737 7.06535 4.65737 7.13361 4.65737C7.13361 4.58911 7.13361 4.51878 7.13361 4.45053C7.34045 4.45053 7.54729 4.45053 7.75414 4.45053C7.75414 4.58911 7.75414 4.72563 7.75414 4.86421C7.8224 4.86421 7.89272 4.86421 7.96098 4.86421C7.96098 4.58911 7.96098 4.31194 7.96098 4.03684C7.89272 4.03684 7.8224 4.03684 7.75414 4.03684C7.8224 3.83 7.89272 3.62315 7.96098 3.41631C7.8224 3.34805 7.68588 3.27773 7.54729 3.20947C7.54729 3.07088 7.54729 2.93437 7.54729 2.79578C7.47904 2.79578 7.40871 2.79578 7.34045 2.79578C7.34045 2.45035 7.34045 2.10699 7.34045 1.76157C7.27219 1.76157 7.20187 1.76157 7.13361 1.76157C7.13361 1.62298 7.13361 1.48646 7.13361 1.34788C7.07776 1.2548 6.84403 1.16586 6.71992 0.934194C6.51308 1.00245 6.30624 1.07278 6.09939 1.14104C6.03114 1.00245 5.96081 0.865936 5.89255 0.727351C5.61745 0.865936 5.34028 1.00245 5.06518 1.14104C5.06518 0.934194 5.06518 0.727351 5.06518 0.520508C4.65149 0.588766 4.23781 0.659093 3.82412 0.727351C3.82412 0.865936 3.82412 1.00245 3.82412 1.14104C3.68553 1.14104 3.54902 1.14104 3.41043 1.14104C3.41043 1.34788 3.41043 1.55472 3.41043 1.76157C3.54902 1.76157 3.68553 1.76157 3.82412 1.76157C3.82412 1.82982 3.82412 1.90015 3.82412 1.96841C3.54902 1.96841 3.27185 1.96841 2.99675 1.96841C2.76095 2.20421 2.99675 2.05115 2.58306 2.17525C2.41759 3.12053 2.18799 3.92721 2.16938 5.07106C2.23763 5.07106 2.30796 5.07106 2.37622 5.07106C2.37622 5.0028 2.37622 4.93247 2.37622 4.86421C2.70303 4.62841 2.56858 5.37305 2.58306 5.48474C2.5148 5.48474 2.44448 5.48474 2.37622 5.48474C2.37622 5.69158 2.37622 5.89843 2.37622 6.10527C2.23763 6.10527 2.10112 6.10527 1.96253 6.10527C1.96253 6.17353 1.96253 6.24386 1.96253 6.31211C1.82395 6.24386 1.68743 6.17353 1.54885 6.10527C1.54885 6.17353 1.54885 6.24386 1.54885 6.31211C1.00899 6.67202 1.10413 7.47457 1.13516 8.38054C0.928317 8.38054 0.721474 8.38054 0.514631 8.38054C0.514631 8.4488 0.514631 8.51913 0.514631 8.58739C0.446372 8.58739 0.376046 8.58739 0.307788 8.58739C0.307788 8.93282 0.307788 9.27617 0.307788 9.6216C0.446372 9.68986 0.582889 9.76019 0.721474 9.82845C0.721474 9.96703 0.721474 10.1035 0.721474 10.2421C0.582889 10.3104 0.446372 10.3807 0.307788 10.449C0.307788 10.9309 0.307788 11.4149 0.307788 11.8969C0.297445 11.9465 0.026481 11.9631 0.100945 12.3106C0.169203 12.3106 0.239529 12.3106 0.307788 12.3106C0.307788 12.4491 0.307788 12.5857 0.307788 12.7242C0.376046 12.7242 0.446372 12.7242 0.514631 12.7242C0.446372 13.1379 0.376046 13.5516 0.307788 13.9653C0.376046 13.9653 0.446372 13.9653 0.514631 13.9653C0.582889 14.5176 0.653216 15.0678 0.721474 15.6201C0.789732 15.6201 0.860059 15.6201 0.928317 15.6201C0.928317 15.7586 0.928317 15.8952 0.928317 16.0337C0.984164 16.1247 1.2179 16.2158 1.342 16.4474C1.6171 16.3088 1.89427 16.1723 2.16938 16.0337C2.16938 16.102 2.16938 16.1723 2.16938 16.2406C2.40518 16.4764 2.25211 16.2406 2.37622 16.6543C2.5148 16.6543 2.65132 16.6543 2.7899 16.6543C2.7899 16.4474 2.7899 16.2406 2.7899 16.0337C3.41043 16.2406 4.03096 16.4474 4.65149 16.6543C4.78387 15.9903 5.49541 15.3367 5.89255 15.6201C6.1056 15.8 6.17799 15.9758 6.30624 16.2406C6.49446 16.162 6.97641 16.1123 7.13361 16.0337C7.20187 15.8952 7.27219 15.7586 7.34045 15.6201C7.68588 15.6201 8.02924 15.6201 8.37467 15.6201C8.37467 15.8269 8.37467 16.0337 8.37467 16.2406C8.58151 16.2406 8.78835 16.2406 8.9952 16.2406C8.9952 16.102 8.9952 15.9655 8.9952 15.8269C9.2703 15.8269 9.54747 15.8269 9.82257 15.8269C9.82257 15.6883 9.82257 15.5518 9.82257 15.4132C9.96115 15.4132 10.0977 15.4132 10.2363 15.4132C10.2363 15.2064 10.2363 14.9995 10.2363 14.7927C10.7306 14.6665 10.621 14.7265 10.8568 14.379C10.7203 14.4473 10.5817 14.5176 10.4431 14.5858ZM3.61728 3.62108C3.68553 3.62108 3.75586 3.62108 3.82412 3.62108C4.10749 3.14121 4.34123 3.3253 4.65149 3.00056C4.65149 2.86197 4.65149 2.72545 4.65149 2.58687C4.71975 2.58687 4.79008 2.58687 4.85834 2.58687C4.85834 2.65513 4.85834 2.72545 4.85834 2.79371C5.06518 2.72545 5.27202 2.65513 5.47886 2.58687C5.54712 2.86197 5.61745 3.13914 5.68571 3.41424C5.82429 3.41424 5.96081 3.41424 6.09939 3.41424C6.09939 3.55283 6.09939 3.68934 6.09939 3.82793C5.96081 3.82793 5.82429 3.82793 5.68571 3.82793C5.68571 4.17336 5.68571 4.51672 5.68571 4.86214C5.47886 4.79389 5.27202 4.72356 5.06518 4.6553C5.06518 4.72356 5.06518 4.79389 5.06518 4.86214C4.64736 4.94902 4.87488 4.8849 4.65149 5.06899C4.11991 5.03589 3.74966 4.54567 3.61728 4.03477C3.68553 4.03477 3.75586 4.03477 3.82412 4.03477C3.75379 3.89619 3.68553 3.7576 3.61728 3.62108ZM8.9952 13.1379C8.85661 13.1379 8.72009 13.1379 8.58151 13.1379C8.58151 13.3448 8.58151 13.5516 8.58151 13.7585C8.09957 13.8267 7.61555 13.897 7.13361 13.9653C7.13361 14.0336 7.13361 14.1039 7.13361 14.1721C6.51308 14.0336 5.89255 13.897 5.27202 13.7585C5.20376 13.897 5.13344 14.0336 5.06518 14.1721C4.66597 14.3149 4.44465 13.9653 4.44465 13.9653C4.09922 14.0336 3.75586 14.1039 3.41043 14.1721C3.41043 14.3107 3.41043 14.4473 3.41043 14.5858C3.20359 14.5858 2.99675 14.5858 2.7899 14.5858C2.69889 14.4142 2.37829 14.1742 2.37622 14.1721C2.37622 13.897 2.37622 13.6199 2.37622 13.3448C2.30796 13.3448 2.23763 13.3448 2.16938 13.3448C2.07216 13.049 2.37622 12.1037 2.37622 12.1037C2.17144 11.9279 1.91082 12.3561 1.96253 11.8969C2.03079 11.8969 2.10112 11.8969 2.16938 11.8969C2.10112 11.69 2.03079 11.4832 1.96253 11.2763C2.16938 11.2081 2.37622 11.1378 2.58306 11.0695C2.75681 10.7489 2.32244 10.2856 2.37622 10.2421C2.5148 10.2421 2.65132 10.2421 2.7899 10.2421C2.7899 10.1035 2.7899 9.96703 2.7899 9.82845C2.72165 9.82845 2.65132 9.82845 2.58306 9.82845C2.53135 9.54093 2.73406 9.90911 2.7899 9.6216C2.88092 9.15207 2.68028 9.06313 2.58306 8.79423C3.16843 8.75079 3.34011 8.70115 3.61728 8.38054C3.12292 7.92342 3.36907 7.68141 3.41043 6.7258C3.82412 6.79406 4.23781 6.86438 4.65149 6.93264C4.65149 6.86438 4.65149 6.79406 4.65149 6.7258C4.99692 6.7258 5.34028 6.7258 5.68571 6.7258C5.68571 6.79406 5.68571 6.86438 5.68571 6.93264C6.09939 7.0009 6.51308 7.07123 6.92677 7.13949C7.20187 7.48491 7.47904 7.82827 7.75414 8.1737C7.8224 8.1737 7.89272 8.1737 7.96098 8.1737C7.96098 8.38054 7.96098 8.58739 7.96098 8.79423C8.09957 8.86249 8.23608 8.93282 8.37467 9.00107C8.30641 9.20792 8.23608 9.41476 8.16782 9.6216C8.30641 9.6216 8.44293 9.6216 8.58151 9.6216C8.47602 10.2173 8.5298 11.1336 8.37467 11.8969C8.30641 11.8969 8.23608 11.8969 8.16782 11.8969C8.15955 11.9734 8.35191 12.3623 8.37467 12.7242C8.58151 12.7242 8.78835 12.7242 8.9952 12.7242C8.9952 12.8608 8.9952 12.9993 8.9952 13.1379Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default NotificationIcon;
