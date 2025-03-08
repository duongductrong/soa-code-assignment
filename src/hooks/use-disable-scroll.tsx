import { useEffect } from "react";

export const useDisableScroll = (prevent: boolean) => {
  useEffect(() => {
    const disableScroll = (e: Event) => e.preventDefault();

    if (prevent) {
      document.addEventListener("wheel", disableScroll, { passive: false });
      document.addEventListener("touchmove", disableScroll, { passive: false });
    } else {
      document.removeEventListener("wheel", disableScroll);
      document.removeEventListener("touchmove", disableScroll);
    }

    return () => {
      document.removeEventListener("wheel", disableScroll);
      document.removeEventListener("touchmove", disableScroll);
    };
  }, [prevent]);
};
