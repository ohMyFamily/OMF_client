import { useEffect, useRef, useState } from 'react';
import $ from './animateCardSample.module.scss';
import ResultCard from '@/components/common/Card/ResultCard';

export default function AnimateCardSample() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollIntervalRef = useRef<number>();
  const scrollSpeed = 15;
  const [isScrollingRight, setIsScrollingRight] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const preventDefault = (e: Event) => {
      e.preventDefault();
    };

    const scroll = () => {
      if (scrollContainer) {
        if (isScrollingRight) {
          if (
            scrollContainer.scrollLeft >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            setIsScrollingRight(false);
          } else {
            scrollContainer.scrollLeft += 1;
          }
        } else {
          if (scrollContainer.scrollLeft <= 0) {
            setIsScrollingRight(true);
          } else {
            scrollContainer.scrollLeft -= 1;
          }
        }
      }
    };

    scrollIntervalRef.current = window.setInterval(scroll, scrollSpeed);
    scrollContainer.addEventListener('wheel', preventDefault, { passive: false });
    scrollContainer.addEventListener('touchmove', preventDefault, { passive: false });

    return () => {
      if (scrollIntervalRef.current) {
        window.clearInterval(scrollIntervalRef.current);
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', preventDefault);
        scrollContainer.removeEventListener('touchmove', preventDefault);
      }
    };
  }, [scrollSpeed, isScrollingRight]);

  return (
    <div className={$.sample} ref={scrollRef}>
      <ResultCard score={20} variant='animate' isHas={true} />
      <ResultCard score={40} variant='animate' isHas={false} />
      <ResultCard score={60} variant='animate' isHas={false} />
      <ResultCard score={80} variant='animate' isHas={false} />
      <ResultCard score={100} variant='animate' isHas={false} />
    </div>
  );
}
