import { createField } from "hookform-field";
import { lazy } from "react";

const Input = lazy(() => import("@/components/ui/input"));

export const Field = createField({
  text: Input,
  editor: Input,
});
