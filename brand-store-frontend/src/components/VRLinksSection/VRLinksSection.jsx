'use client';

import { useAirline } from '@/context/AirlineContext';

/**
 * VR experiences are linked only (target="_blank"). WebGL/Unity builds are not
 * loaded on this page—they load only when the user clicks a link. This keeps
 * initial page load light.
 */

/** Build full URL to a VR WebGL index.html (path relative to vrBasePath) */
function getVrExperienceUrl(vrBasePath, path) {
  if (!vrBasePath || !path) return '#';
  const encoded = path.split('/').map((segment) => encodeURIComponent(segment)).join('/');
  return `${vrBasePath}/${encoded}/index.html`;
}

const VRLinksSection = () => {
  const airline = useAirline();
  const vrBasePath = airline?.config?.assets?.vrBasePath;
  const experiences = airline?.config?.vrExperiences;

  if (!experiences?.length || !vrBasePath) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-(--background-charcoal) border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 md:mb-10">
          <span className="text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-(--primary) uppercase block mb-2 md:mb-3">
            Experience
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white">
            Explore our cabins in VR
          </h2>
          <p className="mt-2 md:mt-3 text-white/70 text-sm md:text-base max-w-xl">
            Step inside our cabins in your browser. Each experience opens in a new tab.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {experiences.map((item) => {
            const url = getVrExperienceUrl(vrBasePath, item.path);
            return (
              <a
                key={item.id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-[48px] px-4 py-3 rounded-md border border-(--primary)/50 bg-white/5 text-white hover:bg-(--primary)/15 hover:border-(--primary) transition-colors text-sm font-medium touch-manipulation"
              >
                <span className="material-icons text-lg text-(--primary)" aria-hidden>
                  open_in_new
                </span>
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VRLinksSection;
