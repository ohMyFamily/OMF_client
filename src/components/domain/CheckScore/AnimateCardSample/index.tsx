import { useEffect, useRef, useState } from 'react';
import $ from './animateCardSample.module.scss';
import ResultCard from '@/components/common/Card/ResultCard';
import { scoreImages, scoreTable } from '@/constants/business.constants';

export default function AnimateCardSample() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollIntervalRef = useRef<number>();
  const scrollSpeed = 15;
  const [isScrollingRight, setIsScrollingRight] = useState(true);

  const cardData = scoreTable.map((data) => ({
    score: parseInt(data.imageKey.slice(1)),
    image: scoreImages[data.imageKey as keyof typeof scoreImages],
    title: data.title,
    description: data.description,
  }));

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
      {cardData.map((card) => (
        <ResultCard
          key={card.score}
          score={card.score}
          variant="animate"
          isHas={false}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
