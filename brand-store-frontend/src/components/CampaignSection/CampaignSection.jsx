"use client";

import { useAirline } from "@/context/AirlineContext";
import LazyVideo from "@/components/ui/LazyVideo";

const CampaignSection = () => {
  const airline = useAirline();
  const campaign = airline?.config?.campaign;

  if (!campaign?.headline || !campaign?.videoSrc) return null;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-beige-jaali">
      <div className="max-w-6xl mx-auto">
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
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl heading-brand mb-4 md:mb-6 leading-tight">
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
