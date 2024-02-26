import { RefObject, useEffect, useState } from 'react';

export function useElementRect(ref: RefObject<HTMLElement>) {
  const [rect, setRect] = useState<DOMRect | null>(getRect());

  function getRect() {
    if (ref?.current) {
      const elemRect = ref.current.getBoundingClientRect();
      return elemRect;
    }
    return null;
  }

  useEffect(() => {
    function handleResize() {
      setRect(getRect());
    }
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, []);
  useEffect(() => {
    setRect(getRect());
  }, [ref]);

  return rect;
}
