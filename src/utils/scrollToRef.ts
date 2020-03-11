export const scrollToRef = (ref: React.RefObject<HTMLElement>, offset = 0) => {
  if (ref.current) {
    window.scrollTo(0, ref.current.offsetTop - offset);
  }
};
