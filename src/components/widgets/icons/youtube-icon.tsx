import { ComponentProps } from "react";

const YoutubeIcon = (props: ComponentProps<"svg">) => {
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
        d="M17.0015 4H7.00146C4.00146 4 2.00146 6 2.00146 9V15C2.00146 18 4.00146 20 7.00146 20H17.0015C20.0015 20 22.0015 18 22.0015 15V9C22.0015 6 20.0015 4 17.0015 4ZM13.8915 13.03L11.4214 14.51C10.4214 15.11 9.60144 14.65 9.60144 13.48V10.51C9.60144 9.34001 10.4214 8.88001 11.4214 9.48001L13.8915 10.96C14.8415 11.54 14.8415 12.46 13.8915 13.03Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default YoutubeIcon;
