'use client';

import { createContext, useContext } from 'react';

const AirlineContext = createContext(null);

/**
 * Provider for the current airline's config. Wrap the brand-store page with this.
 * @param {{ slug: string, config: object, children: React.ReactNode }} props
 */
export function AirlineProvider({ slug, config, children }) {
  return (
    <AirlineContext.Provider value={{ slug, config }}>
      {children}
    </AirlineContext.Provider>
  );
}

/**
 * Hook to access the current airline slug and config.
 * Must be used inside AirlineProvider.
 * @returns {{ slug: string, config: object } | null}
 */
export function useAirline() {
  const value = useContext(AirlineContext);
  return value;
}

export default AirlineContext;
