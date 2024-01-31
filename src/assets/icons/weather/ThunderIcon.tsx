import IconComponentProps from "../IconComponentProps";

const ThunderIcon = ({ width, height, fillColor }: IconComponentProps) => (
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
      d="M16.3635 9.59954C15.9993 9.59954 15.6372 9.59954 15.2729 9.59954C15.2729 9.59954 15.2925 9.88528 14.8367 9.81766C14.8367 9.81766 14.6447 9.48612 14.1823 9.59954C14.1823 9.67152 14.1823 9.74568 14.1823 9.81766C13.818 9.81766 13.456 9.81766 13.0917 9.81766C13.0917 9.88964 13.0917 9.96381 13.0917 10.0358C13.0197 10.0358 12.9455 10.0358 12.8736 10.0358C12.8736 9.96381 12.8736 9.88964 12.8736 9.81766C12.7274 9.81766 12.5835 9.81766 12.4373 9.81766C12.4373 9.81766 12.4679 8.96917 12.6554 9.38142C12.6554 9.4534 12.6554 9.52756 12.6554 9.59954C12.7274 9.59954 12.8016 9.59954 12.8736 9.59954C12.8736 9.52756 12.8736 9.4534 12.8736 9.38142C12.9455 9.38142 13.0197 9.38142 13.0917 9.38142C13.0197 8.94517 12.9455 8.50893 12.8736 8.07269C13.0197 8.07269 13.1637 8.07269 13.3098 8.07269C13.3098 7.70842 13.3098 7.34634 13.3098 6.98207C13.456 6.98207 13.5999 6.98207 13.7461 6.98207C13.7984 6.4673 13.8377 6.44331 13.9642 6.10958C13.8922 6.10958 13.818 6.10958 13.7461 6.10958C13.7461 6.0376 13.7461 5.96344 13.7461 5.89146C13.6741 5.89146 13.5999 5.89146 13.5279 5.89146C13.5279 6.0376 13.5279 6.18156 13.5279 6.32771C13.456 6.32771 13.3818 6.32771 13.3098 6.32771C13.3098 6.10958 13.3098 5.89146 13.3098 5.67334C12.8736 5.67334 12.4373 5.67334 12.0011 5.67334C11.9247 6.25791 12.1363 6.01579 11.783 6.32771C11.783 6.25573 11.783 6.18156 11.783 6.10958C11.6368 6.18156 11.4929 6.25573 11.3467 6.32771C11.3467 6.61781 11.3467 6.91009 11.3467 7.2002C10.9105 7.33107 11.1591 7.16966 10.9105 7.41832C10.8385 7.41832 10.7643 7.41832 10.6923 7.41832C10.6204 7.85456 10.5462 8.29081 10.4742 8.72705C10.4022 8.72705 10.3281 8.72705 10.2561 8.72705C10.2561 8.94517 10.2561 9.1633 10.2561 9.38142C10.11 9.4534 9.966 9.52756 9.81986 9.59954C9.74788 10.1819 9.67371 10.7621 9.60173 11.3445C9.38361 11.3445 9.16549 11.3445 8.94737 11.3445C8.87539 11.7808 8.80122 12.217 8.72924 12.6533C8.5831 12.6533 8.43914 12.6533 8.293 12.6533C8.293 13.0895 8.293 13.5257 8.293 13.962C8.43914 13.962 8.5831 13.962 8.72924 13.962C8.72924 14.1081 8.72924 14.2521 8.72924 14.3982C9.42287 14.3241 9.55593 14.1757 10.038 13.962C10.038 14.034 10.038 14.1081 10.038 14.1801C10.11 14.1801 10.1841 14.1801 10.2561 14.1801C10.1841 14.4702 10.11 14.7625 10.038 15.0526C9.966 15.0526 9.89184 15.0526 9.81986 15.0526C9.89184 15.5608 9.966 16.0712 10.038 16.5795C9.89184 16.5795 9.74788 16.5795 9.60173 16.5795C9.67371 16.7976 9.74788 17.0157 9.81986 17.2338C9.74788 17.2338 9.67371 17.2338 9.60173 17.2338C9.52975 17.5981 9.45559 17.9602 9.38361 18.3244C9.52975 18.3244 9.67371 18.3244 9.81986 18.3244C9.81986 18.4706 9.81986 18.6145 9.81986 18.7607C10.3848 18.8697 10.784 18.9832 11.5648 18.9788C11.6499 18.3223 11.7001 18.2721 12.0011 17.8882C12.0731 17.8882 12.1472 17.8882 12.2192 17.8882C12.2192 17.742 12.2192 17.5981 12.2192 17.4519C12.3653 17.38 12.5093 17.3058 12.6554 17.2338C12.7274 17.0157 12.8016 16.7976 12.8736 16.5795C12.8627 16.5402 12.457 16.5969 12.6554 16.3613C12.8016 16.3613 12.9455 16.3613 13.0917 16.3613C13.3251 16.1279 13.2553 15.9338 13.3098 15.4888C13.456 15.4888 13.5999 15.4888 13.7461 15.4888C13.7461 15.1987 13.7461 14.9065 13.7461 14.6164C14.9065 14.3197 14.3481 13.9075 14.8367 13.0895C14.9086 13.0895 14.9828 13.0895 15.0548 13.0895C15.1268 12.8714 15.2009 12.6533 15.2729 12.4351C15.8662 12.2694 15.7702 12.3828 15.9273 11.7808C16.1454 11.7088 16.3635 11.6346 16.5816 11.5626C16.5882 10.7861 16.5467 10.086 16.3635 9.59954Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default ThunderIcon;
