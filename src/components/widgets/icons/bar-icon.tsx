import { ComponentProps } from "react";

const BarIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="vuesax/linear/menu">
        <g id="menu">
          <path
            id="Vector"
            d="M3 7H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            id="Vector_2"
            d="M3 12H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            id="Vector_3"
            d="M3 17H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
};
export default BarIcon;
