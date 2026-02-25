'use client';

import { AirlineProvider } from '@/context/AirlineContext';
import AirlinePage from './AirlinePage';

/**
 * Wraps AirlinePage with AirlineProvider so the page has access to airline config.
 * Used by the server-rendered flights/[airline] page.
 */
export default function AirlinePageWrapper({ slug, config }) {
  return (
    <AirlineProvider slug={slug} config={config}>
      <AirlinePage />
    </AirlineProvider>
  );
}
