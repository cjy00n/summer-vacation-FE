import IconComponentProps from "../IconComponentProps";

const CloudyIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    width={width ?? "16"}
    height={height ?? "15"}
    viewBox="0 0 27 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.1321 7.80191C25.6741 6.75261 25.4861 6.21599 25.4485 4.72578C24.3103 4.27119 22.6663 3.90889 21.347 3.7004C21.1419 4.38398 21.3948 3.99434 21.0052 4.38398C20.5608 3.27999 20.2977 2.24778 20.3216 0.624263C19.2962 0.511472 18.2708 0.395262 17.2454 0.282471C17.2454 0.395262 17.2454 0.511472 17.2454 0.624263C17.1327 0.624263 17.0164 0.624263 16.9037 0.624263C16.9037 0.511472 16.9037 0.395262 16.9037 0.282471C16.7909 0.282471 16.6747 0.282471 16.5619 0.282471C16.5619 0.395262 16.5619 0.511472 16.5619 0.624263C15.8783 0.511472 15.1947 0.395262 14.5111 0.282471C14.5111 0.395262 14.5111 0.511472 14.5111 0.624263C14.2821 0.624263 14.0565 0.624263 13.8275 0.624263C13.8275 0.737055 13.8275 0.853265 13.8275 0.966056C13.0311 0.966056 12.2313 0.966056 11.435 0.966056C11.2299 1.64964 11.4828 1.26 11.0932 1.64964C11.0932 1.76243 11.0932 1.87864 11.0932 1.99143C10.9804 1.99143 10.8642 1.99143 10.7514 1.99143C10.7514 1.64964 10.7514 1.30785 10.7514 0.966056C9.69524 0.829339 10.0951 0.637935 9.04242 0.966056C9.04242 1.07885 9.04242 1.19506 9.04242 1.30785C8.47163 1.42064 8.44087 0.983146 8.35884 0.966056C7.41891 0.767816 6.20554 1.06176 5.62449 1.30785C5.62449 1.42064 5.62449 1.53685 5.62449 1.64964C5.0537 1.64964 4.48632 1.64964 3.91553 1.64964C3.91553 1.76243 3.91553 1.87864 3.91553 1.99143C3.37208 2.42551 3.45411 2.176 3.23195 3.01681C3.46095 3.01681 3.68653 3.01681 3.91553 3.01681C3.80274 3.35861 3.68653 3.7004 3.57374 4.04219C2.77736 4.15498 1.97757 4.27119 1.18119 4.38398C1.18119 4.49678 1.18119 4.61298 1.18119 4.72578C1.0684 4.72578 0.952188 4.72578 0.839396 4.72578C0.839396 5.06757 0.839396 5.40936 0.839396 5.75115C0.726605 5.75115 0.610395 5.75115 0.497603 5.75115C0.473678 7.16618 0.360886 7.50113 1.52298 7.80191C0.835978 8.65981 0.682171 7.93863 0.497603 9.51087C1.0684 9.39808 0.555708 9.50062 1.1265 9.38441C1.1265 9.4972 1.1265 9.61341 1.1265 9.7262C0.555708 9.839 1.0684 9.73646 0.497603 9.85267C0.497603 10.0817 0.497603 10.3073 0.497603 10.5363C0.726605 10.5363 0.952188 10.5363 1.18119 10.5363C0.979531 11.0592 0.907755 11.0934 0.839396 11.9034C1.0684 11.9034 1.29398 11.9034 1.52298 11.9034C1.63577 12.358 1.75198 12.816 1.86477 13.2706C1.97757 13.2706 2.09378 13.2706 2.20657 13.2706C2.09378 13.7252 1.97757 14.1832 1.86477 14.6378C2.09378 14.6378 2.31936 14.6378 2.54836 14.6378C2.54836 14.4088 2.54836 14.1832 2.54836 13.9542C2.66115 13.9542 2.77736 13.9542 2.89015 13.9542C2.89015 14.296 2.89015 14.6378 2.89015 14.9796C2.66115 14.9796 2.43557 14.9796 2.20657 14.9796C2.53811 16.3399 3.5088 16.8082 4.94091 17.0303C4.94091 17.2593 4.94091 17.4849 4.94091 17.7139C5.39549 17.7139 5.85349 17.7139 6.30808 17.7139C6.19529 17.3721 6.07908 17.0303 5.96629 16.6885C6.19529 16.6885 6.42087 16.6885 6.64987 16.6885C6.64987 16.9175 6.64987 17.1431 6.64987 17.3721C7.33346 17.5772 6.94381 17.3243 7.33346 17.7139C8.55024 17.7242 9.64739 17.6592 10.4096 17.3721C10.4096 17.1431 10.4096 16.9175 10.4096 16.6885C10.5224 16.6885 10.6386 16.6885 10.7514 16.6885C10.8642 17.0303 10.9804 17.3721 11.0932 17.7139C11.6606 17.9121 11.7152 17.3858 11.7768 17.3721C12.3476 17.3721 12.9149 17.3721 13.4857 17.3721C13.4857 17.2593 13.4857 17.1431 13.4857 17.0303C14.2855 16.8287 14.4188 17.4336 14.8529 17.3721C14.8529 17.1431 14.8529 16.9175 14.8529 16.6885C15.8885 16.9722 17.43 18.3701 18.6126 16.6885C18.7254 16.6885 18.8416 16.6885 18.9544 16.6885C18.9544 17.0303 18.9544 17.3721 18.9544 17.7139C19.2962 17.7139 19.638 17.7139 19.9798 17.7139C19.7747 17.0303 20.0276 17.42 19.638 17.0303C19.638 16.9175 19.638 16.8013 19.638 16.6885C21.576 17.7925 20.3318 17.5396 23.0559 17.3721C23.0559 16.9175 23.0559 16.4595 23.0559 16.0049C23.3977 16.0049 23.7395 16.0049 24.0813 16.0049C24.0813 15.8921 24.0813 15.7759 24.0813 15.6631C24.1941 15.6631 24.3103 15.6631 24.4231 15.6631C24.4231 15.0924 24.4231 14.525 24.4231 13.9542C24.5359 13.9542 24.6521 13.9542 24.7649 13.9542C24.6521 13.6124 24.5359 13.2706 24.4231 12.9288C24.6521 12.9288 24.8777 12.9288 25.1067 12.9288C25.1067 12.816 25.1067 12.6998 25.1067 12.587C25.4485 12.4742 25.7903 12.358 26.1321 12.2452C26.2448 10.7653 26.3611 9.28187 26.4738 7.80191C26.3611 7.80191 26.2483 7.80191 26.1321 7.80191ZM23.3977 11.9068C23.1687 11.9068 22.9431 11.9068 22.7141 11.9068C22.6013 12.4776 22.4851 13.045 22.3723 13.6158C21.347 13.8448 20.3216 14.0704 19.2962 14.2994C19.1834 14.5284 19.0672 14.754 18.9544 14.983C18.6126 14.8702 18.2708 14.754 17.929 14.6412C17.8162 14.8702 17.7 15.0958 17.5872 15.3248C16.9618 15.5572 16.5619 14.983 16.5619 14.983C16.2201 15.0958 15.8783 15.212 15.5365 15.3248C15.5365 15.0958 15.5365 14.8702 15.5365 14.6412C14.9657 14.5284 14.3983 14.4122 13.8275 14.2994C13.8275 14.4122 13.8275 14.5284 13.8275 14.6412C13.3729 14.6412 12.9149 14.6412 12.4603 14.6412C12.4603 14.8702 12.4603 15.0958 12.4603 15.3248C12.3476 15.3248 12.2313 15.3248 12.1186 15.3248C12.1186 14.983 12.1186 14.6412 12.1186 14.2994C11.329 14.4053 11.2572 14.378 10.7514 14.6412C10.7514 14.754 10.7514 14.8702 10.7514 14.983C10.1806 14.8702 9.61321 14.754 9.04242 14.6412C9.04242 14.8702 9.04242 15.0958 9.04242 15.3248C8.15034 14.4908 6.31833 14.9966 4.94091 14.983C4.82812 14.2994 4.71191 13.6158 4.59912 12.9322C4.37011 12.9322 4.14453 12.9322 3.91553 12.9322C4.02832 12.2486 4.14453 11.565 4.25732 10.8815C4.02832 10.8815 3.80274 10.8815 3.57374 10.8815C3.46095 9.96888 3.34474 9.05971 3.23195 8.14712C3.34474 8.14712 3.46095 8.14712 3.57374 8.14712C3.57374 7.91812 3.57374 7.69254 3.57374 7.46354C3.68653 7.46354 3.80274 7.46354 3.91553 7.46354C4.02832 6.77995 4.14453 6.09637 4.25732 5.41278C5.187 5.15302 5.03661 5.33075 5.2827 4.3874C5.70311 4.40107 6.64987 4.7292 6.64987 4.7292C6.76266 4.50019 6.87887 4.27461 6.99166 4.04561C7.74703 4.16865 8.44087 4.26777 9.72601 4.3874C10.0849 5.22821 10.5463 5.87078 10.7514 6.77995C11.5478 6.89274 12.3476 7.00895 13.1439 7.12174C13.3695 6.23992 13.4926 6.1408 14.1693 5.75457C14.1283 4.60615 14.183 4.50361 13.4857 4.04561C13.4857 3.93282 13.4857 3.81661 13.4857 3.70382C14.0565 3.81661 14.6239 3.93282 15.1947 4.04561C15.1947 3.81661 15.1947 3.59103 15.1947 3.36202C15.5365 3.36202 15.8783 3.36202 16.2201 3.36202C16.5824 2.41184 17.2386 2.93478 18.2708 3.36202C17.9461 3.97383 17.7821 3.89522 17.5872 4.7292C17.3582 4.7292 17.1327 4.7292 16.9037 4.7292C17.0164 5.07099 17.1327 5.41278 17.2454 5.75457C17.1327 5.75457 17.0164 5.75457 16.9037 5.75457C16.9037 5.98357 16.9037 6.20916 16.9037 6.43816C16.5619 6.55095 16.2201 6.66716 15.8783 6.77995C16.0594 8.21548 16.3636 7.89078 16.9037 8.83071C17.5872 8.71792 18.2708 8.60171 18.9544 8.48891C19.0672 8.25991 19.1834 8.03433 19.2962 7.80533C19.7508 7.80533 20.2088 7.80533 20.6634 7.80533C20.7762 7.57633 20.8924 7.35075 21.0052 7.12174C21.4597 7.00895 21.9178 6.89274 22.3723 6.77995C22.3723 7.00895 22.3723 7.23454 22.3723 7.46354C22.7141 7.57633 23.0559 7.69254 23.3977 7.80533C23.3977 7.69254 23.3977 7.57633 23.3977 7.46354C24.0403 7.50113 23.596 7.66519 23.7395 8.14712C23.8523 8.14712 23.9685 8.14712 24.0813 8.14712C23.6575 9.15883 23.4797 10.6046 23.3977 11.9068Z"
      fill={fillColor ?? "#BAB6B4"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.3218 15.6667C20.3218 15.8957 20.3218 16.1213 20.3218 16.3503C20.4346 16.3503 20.5508 16.3503 20.6636 16.3503C20.4653 15.6633 20.7046 16.053 20.3218 15.6667Z"
      fill={fillColor ?? "#BAB6B4"}
    />
  </svg>
);

export default CloudyIcon;
