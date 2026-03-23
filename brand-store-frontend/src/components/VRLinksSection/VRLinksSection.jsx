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

  const getCabinColorTokens = (id) => {
    switch (id) {
      case 'all-cabins':
        return {
          accent: '#33230a',
          glow: 'rgba(235, 190, 105, 0.25)',
          bg: 'linear-gradient(135deg, #f8d58f 0%, #ebbe69 55%, #c89648 100%)',
          text: '#33230a',
        };
      case 'business':
        return {
          accent: '#f6ecfb',
          glow: 'rgba(83, 18, 81, 0.3)',
          bg: 'linear-gradient(135deg, #6b2a73 0%, #531251 60%, #3e0c3c 100%)',
          text: '#f8edff',
        };
      case 'premium-economy':
        return {
          accent: '#fff0f3',
          glow: 'rgba(182, 16, 50, 0.32)',
          bg: 'linear-gradient(135deg, #ce3156 0%, #b61032 58%, #8d0d2a 100%)',
          text: '#fff0f3',
        };
      case 'economy':
        return {
          accent: '#fff1f3',
          glow: 'rgba(218, 14, 41, 0.32)',
          bg: 'linear-gradient(135deg, #ed425e 0%, #da0e29 58%, #a80b23 100%)',
          text: '#fff1f3',
        };
      default:
        return {
          accent: '#33230a',
          glow: 'rgba(235, 190, 105, 0.25)',
          bg: 'linear-gradient(135deg, #f8d58f 0%, #ebbe69 55%, #c89648 100%)',
          text: '#33230a',
        };
    }
  };

  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(145deg,#4c0f4a_0%,#7b123f_45%,#b61032_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(235,190,105,0.22),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(249,246,238,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--primary)/50 to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <div className="mb-8 md:mb-10">
          <h2 className="font-bold text-(--primary) text-3xl block mb-2 md:mb-3">
            Step inside the New Air India Experience
          </h2>
          <p className="mt-2 md:mt-3 subtext-premium text-sm md:text-base max-w-xl">
            A fully interactive 360 virtual walkthrough of every cabin class
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {experiences.map((item) => {
            const url = getVrExperienceUrl(vrBasePath, item.path);
            const colors = getCabinColorTokens(item.id);
            return (
              <a
                key={item.id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-[46px] px-4 py-2.5 rounded-lg transition-all duration-300 text-sm font-semibold touch-manipulation shadow-[0_8px_20px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.26)]"
                style={{
                  background: colors.bg,
                  color: colors.text,
                  boxShadow: `0 8px 22px ${colors.glow}`,
                }}
              >
                <span className="material-icons text-lg" aria-hidden style={{ color: colors.accent }}>
                  open_in_new
                </span>
                {item.label}
              </a>
            );
          })}
        </div>
        <p className="mt-4 text-xs md:text-sm subtext-premium">
          Explore our cabins in your browser. Each experience opens in a new tab.
        </p>
      </div>
    </section>
  );
};

export default VRLinksSection;
