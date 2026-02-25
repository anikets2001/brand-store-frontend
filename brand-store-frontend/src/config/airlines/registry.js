/**
 * Airline registry for the brand-store.
 * Add new airline slugs here and in getAirlineConfig() when supporting another carrier.
 */

import airIndiaConfig from './airindia';

/** Valid URL slugs for airline brand-store pages */
export const AIRLINE_SLUGS = ['airindia'];

/**
 * Returns the config object for the given airline slug, or null if not found.
 * @param {string} slug - URL segment (e.g. 'air-india')
 * @returns {object | null} Airline config or null
 */
export function getAirlineConfig(slug) {
  if (!slug || typeof slug !== 'string') return null;
  switch (slug.toLowerCase()) {
    case 'airindia':
      return airIndiaConfig;
    default:
      return null;
  }
}
