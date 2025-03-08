import { ComponentProps } from "react";

export interface IconButtonProps extends ComponentProps<"span"> {}

const IconButton = (props: IconButtonProps) => {
  return (
    <span
      {...props}
      className="inline-flex size-8 rounded-full bg-card justify-center items-center"
    />
  );
};

export default IconButton;
