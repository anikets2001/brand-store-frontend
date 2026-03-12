'use client';

import { useRef, useEffect, useState } from 'react';

/**
 * Lazy-loads video src when the element enters the viewport.
 * Use preload="none" until in view, then load metadata/auto.
 * Reduces initial payload and prevents multiple autoPlay videos from blocking the main thread.
 */
export default function LazyVideo({
  src,
  className = '',
  muted = true,
  loop = false,
  autoPlay = false,
  controls = true,
  preloadWhenVisible = 'metadata',
  poster,
  'aria-label': ariaLabel,
  onCanPlay,
  ...rest
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { rootMargin: '150px', threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && videoRef.current && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);

  // Pause video when scrolled out of view to free main thread and reduce decoding
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasLoaded) return;
    if (isInView) {
      if (autoPlay) video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, hasLoaded, autoPlay]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <video
        ref={videoRef}
        src={isInView || hasLoaded ? src : undefined}
        className={className}
        muted={muted}
        loop={loop}
        autoPlay={autoPlay && isInView}
        controls={controls}
        preload={isInView ? preloadWhenVisible : 'none'}
        poster={poster}
        aria-label={ariaLabel}
        playsInline
        onCanPlay={onCanPlay}
        {...rest}
      />
    </div>
  );
}
