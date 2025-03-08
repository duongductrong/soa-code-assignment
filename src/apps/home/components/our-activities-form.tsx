import Button from "@/components/ui/button";
import Label from "@/components/ui/label";
import { Field } from "@/components/widgets/form/field";
import Send2Icon from "@/components/widgets/icons/send-2-icon";
import { cn } from "@/lib/tw";
import { ComponentProps } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { usePageContext } from "../hooks";

export interface OurActivitiesFormProps extends ComponentProps<"form"> {}

const OurActivitiesForm = (props: OurActivitiesFormProps) => {
  const { page } = usePageContext();

  const { t } = useTranslation();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      file: null,
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  const handleReset = () => {
    form.reset({
      name: "",
      email: "",
      message: "",
      file: null,
    });
  };

  const content = page?.bloc_2_2;

  return (
    <FormProvider {...form}>
      <form
        {...props}
        onSubmit={handleSubmit}
        onReset={handleReset}
        className={cn("flex flex-col gap-5", props.className)}
      >
        <div className="flex items-center gap-4">
          <Label className="shrink-0 w-[5rem] lg:w-[6.25rem] lg:w-[7.5rem]">
            {content?.btn_1?.[0] || t("Name")}:
          </Label>
          <Field
            name="name"
            component="text"
            type="text"
            placeholder={content?.btn_1?.[1] || t("Enter your name")}
            corner="full"
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <Label className="shrink-0 w-[5rem] lg:w-[6.25rem] lg:w-[7.5rem]">
            {content?.btn_2?.[0] || t("Email")}:
          </Label>
          <Field
            name="email"
            type="email"
            component="text"
            placeholder={content?.btn_2?.[1] || t("Enter your email")}
            corner="full"
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <Label className="shrink-0 w-[5rem] lg:w-[6.25rem] lg:w-[7.5rem]">
            {content?.btn_3 || t("Message")}:{" "}
          </Label>
          <Field
            name="message"
            component="text"
            placeholder={content?.btn_3 || t("Enter your message")}
            corner="full"
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <Label className="shrink-0 w-[5rem] lg:w-[6.25rem] lg:w-[7.5rem]">
            {content?.btn_4?.[0] || t("File")}:{" "}
          </Label>
          <Field
            name="file"
            component="file"
            placeholder={content?.btn_4?.[1] || t("Enter your file pdf")}
            className="w-full"
            accept="application/pdf"
          />
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button
            size="lg"
            corner="full"
            variant="outline"
            className="w-full sm:w-fit sm:min-w-[160px] xl:min-w-[200px]"
            type="reset"
          >
            {content?.btn_5 || t("Clear All")}
          </Button>
          <Button
            type="submit"
            size="lg"
            corner="full"
            className="w-full sm:w-fit sm:min-w-[160px] xl:min-w-[200px]"
          >
            {content?.btn_6 || t("Send")}
            <Send2Icon className="size-6 ml-2" />
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default OurActivitiesForm;
