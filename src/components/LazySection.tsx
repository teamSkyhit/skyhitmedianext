"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  minHeight?: string;
}

export default function LazySection({ children, minHeight = "300px" }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    let initialized = false;

    const startObserving = () => {
      if (initialized || visible) return;
      initialized = true;

      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: "200px" }
      );

      if (ref.current) observer.observe(ref.current);
    };

    const events = ['scroll', 'mousemove', 'touchstart', 'keydown'];

    const onInteract = () => {
      startObserving();
      events.forEach(ev => window.removeEventListener(ev, onInteract));
    };

    events.forEach(ev => window.addEventListener(ev, onInteract, { passive: true, once: true }));

    // Fallback: load after 8 seconds anyway if no interaction
    const fallbackTimer = setTimeout(onInteract, 8000);

    return () => {
      clearTimeout(fallbackTimer);
      events.forEach(ev => window.removeEventListener(ev, onInteract));
      if (observer) observer.disconnect();
    };
  }, [visible]);

  return (
    <div ref={ref}>
      {visible ? children : <div style={{ minHeight }} />}
    </div>
  );
}
