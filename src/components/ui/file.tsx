import { cn } from "@/lib/tw";
import { ChangeEvent, ComponentProps, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { tv, VariantProps } from "tailwind-variants";
import PaperClipIcon from "../widgets/icons/paper-clip-icon";

export const fileStyles = tv(
  {
    base: ["flex items-center"],
    variants: {},
    defaultVariants: {},
  },
  { twMerge: false, responsiveVariants: true }
);

export interface FileProps
  extends ComponentProps<"div">,
    VariantProps<typeof fileStyles>,
    Pick<ComponentProps<"input">, "accept" | "multiple"> {
  placeholder?: string;
  onChange?: (event: any) => void;
}

const File = ({ onChange, ...props }: FileProps) => {
  const { t } = useTranslation();
  const [fileName, setFileName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
    onChange?.(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div {...props} className={cn(fileStyles({ className: props.className }))}>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept="application/pdf"
      />
      <label
        onClick={handleClick}
        className="cursor-pointer text-xl font-normal text-blue font-medium flex items-center gap-1"
      >
        <PaperClipIcon className="size-8 text-blue" />
        {fileName || t("Select a file")}
      </label>

      {props.placeholder ? (
        <p className="text-lg font-normal text-[#999999] font-medium ml-4">
          {props.placeholder}
        </p>
      ) : null}
    </div>
  );
};

export default File;
