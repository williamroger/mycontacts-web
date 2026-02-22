import { useEffect, useRef, useState } from "react";

export function useAnimatedUnmount(visible) {
  const animatedElementRef = useRef(null);
    const [shouldRender, setShouldRender] = useState(visible);

    useEffect(() => {
      if (visible) {
        setShouldRender(true);
      }

      function handleAnimationEnd() {
        setShouldRender(false);
      }

      const elementRef = animatedElementRef.current;
      if (!visible && elementRef) {
        elementRef.addEventListener('animationend', handleAnimationEnd)
      }

      return () => {
        if (elementRef) {
          elementRef.removeEventListener('animationend', handleAnimationEnd);
        }
      }
    }, [visible]);

    return {
      shouldRender,
      animatedElementRef,
    }
}
