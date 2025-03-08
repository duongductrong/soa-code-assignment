"use client";

// import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/tw";
import { useTranslation } from "react-i18next";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  busyDates?: Record<string, any>;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  locale,
  busyDates,
  ...props
}: CalendarProps) {
  const { t } = useTranslation();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      ISOWeek
      className={cn(
        "border border-brand/30 rounded-3xl px-8 py-6 shadow-calendar",
        className
      )}
      classNames={{
        months: "w-full",
        month: "space-y-4",
        caption:
          "flex relative justify-center max-w-[225px] mx-auto text-brand",
        caption_label:
          "text-center text-xl leading-6 tracking-[-0.7%] font-medium font-sans",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1 gap-3",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem] flex-1",
        row: "flex w-full mt-3 gap-3",
        cell: cn(
          "flex-1",
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(""),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: cn(["day-outside", "text-calendar-disabled"]),
        day_disabled: "text-calendar-disabled opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(className)}
            {...props}
          >
            <path
              d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07999"
              stroke="#F2542D"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        IconRight: ({ className, ...props }) => (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            className={cn(className)}
          >
            <path
              d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999"
              stroke="#F2542D"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        DayContent: (props) => {
          const { outside = false } = props.activeModifiers;
          const localeDateString = props.date.toLocaleDateString();

          const isBusy = busyDates?.[localeDateString];

          return (
            <div
              {...props}
              className={cn(
                "flex flex-col gap-2",
                "rounded-lg border border-calendar-border",
                "h-18 font-normal aria-selected:opacity-100 px-4 py-2 text-brand",
                "font-sans font-semibold text-xl leading-6 tracking-[-0.7%] text-center",
                !isBusy && !outside
                  ? "bg-brand-light border border-calendar-free"
                  : "text-calendar-disabled",
                outside
                  ? "bg-calendar-border-bgDisabled border-calendar-border-disabled"
                  : null
              )}
            >
              <span
                className={cn(
                  isBusy ? "text-calendar-busy" : "",
                  "text-center font-sans"
                )}
              >
                {props.date.getDate()}
              </span>
              {outside ? null : (
                <span
                  className={cn(
                    "text-center font-sans",
                    "text-lg font-normal leading-6 tracking-[-0.126px]",
                    isBusy ? "text-calendar-busy-text" : "text-calendar-free"
                  )}
                >
                  {isBusy ? t("busy") : t("free")}
                </span>
              )}
            </div>
          );
        },
      }}
      formatters={{
        formatWeekdayName: (date) => {
          return date.toLocaleDateString((locale as any) || "en-US", {
            weekday: "short",
          });
        },
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export default Calendar;
