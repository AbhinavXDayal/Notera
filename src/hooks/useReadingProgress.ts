import { useState, useEffect } from 'react';

export function useReadingProgress(tocItemIds: string[]) {
  const [activeId, setActiveId] = useState<string>(tocItemIds[0] || '');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;

      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((scrollPosition / docHeight) * 100)));
        setScrollProgress(progress);
      }

      // Check which section is in view
      const headingElements = tocItemIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160) {
          setActiveId(tocItemIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tocItemIds]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  return {
    activeId,
    scrollProgress,
    scrollToSection
  };
}

