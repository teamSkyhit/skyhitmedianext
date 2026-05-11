export const isBrowser = typeof window !== "undefined";

export const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
};
