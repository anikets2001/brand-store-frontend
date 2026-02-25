"use client";

import { useAirline } from "@/context/AirlineContext";

const CampaignSection = () => {
  const airline = useAirline();
  const campaign = airline?.config?.campaign;

  if (!campaign?.headline || !campaign?.videoSrc) return null;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-(--background-charcoal) border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-video rounded-sm overflow-hidden bg-black border border-white/10">
            <video
              src={campaign.videoSrc}
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
              controls
              preload="metadata"
              aria-label={campaign.headline}
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mb-4 md:mb-6 leading-tight">
              {campaign.headline}
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              {campaign.bodyCopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
