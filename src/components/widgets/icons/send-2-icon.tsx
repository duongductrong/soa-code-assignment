import { ComponentProps } from "react";

const Send2Icon = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.40018 6.32003L15.8902 3.49003C19.7002 2.22003 21.7702 4.30003 20.5102 8.11003L17.6802 16.6C15.7802 22.31 12.6602 22.31 10.7602 16.6L9.92018 14.08L7.40018 13.24C1.69018 11.34 1.69018 8.23003 7.40018 6.32003Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1099 13.6501L13.6899 10.0601"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Send2Icon;
