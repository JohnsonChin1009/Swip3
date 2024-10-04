"use client";

import { useEffect, useRef, useState } from 'react';

export default function OurTeamHeader() {
  const headerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const [animationState, setAnimationState] = useState<'initial' | 'animated' | 'reversed'>('initial');
  const triggerPointRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          calculateTriggerPoint();
        }
      },
      {
        threshold: 0.9 // Trigger when 10% visible
      }
    );

    if (headerRef.current) {
      intersectionObserver.observe(headerRef.current);
    }

    let animationFrameId: number;

    const calculateTriggerPoint = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        // Calculate the scroll position where the element is 90% visible
        const visibleThreshold = elementHeight * 0.9;
        const visibleAmount = viewportHeight - elementTop;
        const scrollAdjustment = visibleThreshold - visibleAmount;

        triggerPointRef.current = window.scrollY + scrollAdjustment;
      }
    };

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!triggerPointRef.current) return;

        const currentScrollY = window.scrollY;
        const isScrollingUp = currentScrollY < lastScrollY.current;
        const triggerPoint = triggerPointRef.current;

        if (currentScrollY > triggerPoint && !isScrollingUp && animationState !== 'animated') {
          textRef1.current?.classList.remove('animate-in');
          textRef2.current?.classList.remove('animate-in');
          textRef1.current?.classList.add('animate-out');
          textRef2.current?.classList.add('animate-out');
          setAnimationState('animated');
        } else if (currentScrollY <= triggerPoint && isScrollingUp && animationState !== 'reversed') {
          textRef1.current?.classList.remove('animate-out');
          textRef2.current?.classList.remove('animate-out');
          textRef1.current?.classList.add('animate-in');
          textRef2.current?.classList.add('animate-in');
          setAnimationState('reversed');
        }

        lastScrollY.current = currentScrollY;
      });
    };

    const handleResize = () => {
      if (isVisible) {
        calculateTriggerPoint();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      intersectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [animationState, isVisible]);

  return (
    <div ref={headerRef} className="sm:pb-6 md:pb-8 xl:pb-20 w-full overflow-hidden">
      <h1 className="text-6xl sm:text-8xl md:text-9xl xl:text-[200px] font-bold text-center">
        <div
          ref={textRef1}
          className="transform transition-all duration-1000 ease-in-out translate-x-[-32%]"
        >
          <span className="bg-clip-text text-transparent bg-our-team-header-gradient-1">
            Meet The
          </span>
        </div>
        <div
          ref={textRef2}
          className="transform transition-all duration-1000 ease-in-out translate-x-[31%]"
        >
          <span className="bg-clip-text text-transparent bg-our-team-header-gradient-2">
            GMI Team
          </span>
        </div>
      </h1>
    </div>
  );
}
