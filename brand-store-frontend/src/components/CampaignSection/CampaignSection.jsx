"use client";

import { useAirline } from "@/context/AirlineContext";
import LazyVideo from "@/components/ui/LazyVideo";

const CampaignSection = () => {
  const airline = useAirline();
  const campaign = airline?.config?.campaign;

  if (!campaign?.headline || !campaign?.videoSrc) return null;

  return (
    <section className="border-b-2 border-[color:var(--primary)]/55 border-t border-[rgba(61,54,48,0.14)] bg-jaali px-4 py-16 pb-20 pt-14 sm:px-6 md:py-20 md:pb-24 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black premium-card">
            <LazyVideo
              src={campaign.videoSrc}
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
              controls
              preloadWhenVisible="metadata"
              aria-label={campaign.headline}
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl heading-brand-main mb-4 md:mb-6 leading-tight">
              {campaign.headline}
            </h2>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed">
              {campaign.bodyCopy}
              {campaign.tagline && (
                <span className="block whitespace-nowrap">{campaign.tagline}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
