import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 5000,
}) {
  const [curr, setCurr] = useState(0);
  const slideList = Array.isArray(slides) ? slides : [slides];

  const prev = useCallback(
    () => setCurr((value) => (value === 0 ? slideList.length - 1 : value - 1)),
    [slideList.length]
  );

  const next = useCallback(
    () => setCurr((value) => (value === slideList.length - 1 ? 0 : value + 1)),
    [slideList.length]
  );

  useEffect(() => {
    if (!autoSlide) return undefined;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slideList.map((slide, index) => (
          <div key={index} className="min-w-full">
            {slide}
          </div>
        ))}
      </div>

      {slideList.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between p-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="rounded-full bg-cream-soft/90 p-2 text-cocoa shadow-card transition hover:bg-white"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="rounded-full bg-cream-soft/90 p-2 text-cocoa shadow-card transition hover:bg-white"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex items-center justify-center gap-2">
              {slideList.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setCurr(i)}
                  className={`h-2 rounded-full transition-all ${
                    curr === i
                      ? 'w-6 bg-cream-soft'
                      : 'w-2 bg-cream-soft/50 hover:bg-cream-soft/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
