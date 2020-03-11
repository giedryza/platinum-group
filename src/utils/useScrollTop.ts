import { useState, useEffect } from 'react';

const THROTTLE_DELAY = 150;

const isBrowser = typeof window !== 'undefined';

const getScrollPosition = () => {
  if (!isBrowser) return 0;
  const { top } = document.body.getBoundingClientRect();
  return 0 - top;
};

export const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(getScrollPosition());

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const scrollListener = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(
        () => setScrollTop(getScrollPosition()),
        THROTTLE_DELAY
      );
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return scrollTop;
};
