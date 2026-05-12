'use client';

import Image from 'next/image';
import { useAirline } from '@/context/AirlineContext';

const CodesharePartnershipsSection = () => {
  const airline = useAirline();
  const block = airline?.config?.codesharePartnerships;

  if (!block?.headline || !block?.imageSrc) return null;

  const { headline, lines = [], imageSrc, imageAlt } = block;

  return (
    <section className="relative overflow-hidden border-t-2 border-[color:var(--primary)]/35 bg-beige-jaali px-4 py-16 pt-14 shadow-[inset_0_8px_24px_-12px_rgba(83,18,81,0.06)] sm:px-6 md:py-20 md:pt-16 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--primary)]/25 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black/10 premium-card">
            <Image
              src={imageSrc}
              alt={imageAlt || headline}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl leading-tight heading-brand-main sm:text-4xl md:text-5xl">
              {headline}
            </h2>
            <ul className="mt-6 space-y-4 md:mt-8">
              {lines.map((line, index) => (
                <li
                  key={index}
                  className="border-l-2 border-[color:var(--primary)] pl-4 text-sm leading-relaxed text-stone-700 md:text-base"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodesharePartnershipsSection;
