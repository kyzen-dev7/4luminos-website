"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const OBSERVER_OPTIONS: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" };

export function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, OBSERVER_OPTIONS);

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return { ref, isVisible } as const;
}

type RevealProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
};

export default function Reveal({ children, delayMs = 0, className = "" }: RevealProps) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
