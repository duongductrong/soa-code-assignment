import { createField } from "hookform-field";
import { lazy } from "react";

const Input = lazy(() => import("@/components/ui/input"));
const File = lazy(() => import("@/components/ui/file"));
export const Field = createField({
  text: Input,
  editor: Input,
  file: File,
});
