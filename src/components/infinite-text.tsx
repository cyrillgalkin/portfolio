'use client';

import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Регистрируем ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const InfiniteText = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    const textContainer = textContainerRef.current;

    if (!text || !textContainer) return;

    const clone = text.cloneNode(true);
    textContainer.appendChild(clone);

    const animation = gsap.to(textContainer, {
      xPercent: -50,
      duration: 30,
      ease: 'none',
      repeat: -1, //повторять анимацию бесконечно
      scrollTrigger: {
        trigger: textContainer,
        start: 'top 75%',
        end: 'bottom top',
        toggleActions: 'play pause play pause',
        markers: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className='overflow-hidden whitespace-nowrap text-[100px] font-medium text-white md:text-[200px]'>
      <div ref={textContainerRef} className='inline-block'>
        <div
          ref={textRef}
          className='inline-block space-x-6 pr-6 md:space-x-10 md:pr-10'>
          <span>Fullstack Developer &bull;</span>
          <span>Fullstack Developer &bull;</span>
        </div>
      </div>
    </div>
  );
};

export default InfiniteText;
