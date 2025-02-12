'use client';

import { useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
}

export default function LocomotiveScrollProvider({
  children,
}: LocomotiveScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: containerRef.current,
      },
    });

    // Очистка при размонтировании
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
