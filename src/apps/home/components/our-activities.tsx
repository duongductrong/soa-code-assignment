import Calendar from "@/components/ui/calendar";
import Container from "@/components/ui/container";
import BlocTitle from "@/components/widgets/bloc-title";
import { ComponentProps } from "react";
import OurActivitiesForm from "./our-activities-form";
import { cn } from "@/lib/tw";
import { usePageContext } from "../hooks";

export interface OurActivitiesProps extends ComponentProps<"section"> {}

const OurActivities = (props: OurActivitiesProps) => {
  const { page } = usePageContext();

  return (
    <section {...props} className={cn("py-8 sm:py-15", props.className)}>
      <Container>
        <BlocTitle title={page?.bloc_2_2.title} className="mb-10" />

        <Calendar
          className="mb-10 w-full"
          busyDates={{
            // "3/7/2025": true,
            // "3/8/2025": true,
            // "3/9/2025": true,

            "1/28/2025": true,
            "1/29/2025": true,
            "2/4/2025": true,
          }}
        />

        <OurActivitiesForm />
      </Container>
    </section>
  );
};

export default OurActivities;
