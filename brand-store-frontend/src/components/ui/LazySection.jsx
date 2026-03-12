'use client';

import { useRef, useEffect, useState } from 'react';

/**
 * Renders children only when the section is in or near the viewport.
 * Use for heavy sections (many images/videos) so they don't load until the user scrolls.
 * Reduces initial DOM size, network requests, and main-thread work.
 */
export default function LazySection({ children, className = '', minHeight = '120px', rootMargin = '200px' }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsInView(true);
        });
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} style={!isInView ? { minHeight } : undefined}>
      {isInView ? children : null}
    </div>
  );
}
