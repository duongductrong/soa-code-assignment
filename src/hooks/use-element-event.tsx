import { useEffect, useRef } from "react";

export const useElementEvent = <T extends HTMLElement, E extends Event>(
  event: keyof HTMLElementEventMap,
  handler: (e: E) => void
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    element.addEventListener(event, handler as any);

    return () => {
      element.removeEventListener(event, handler as any);
    };
  }, [event]);

  return [ref];
};
