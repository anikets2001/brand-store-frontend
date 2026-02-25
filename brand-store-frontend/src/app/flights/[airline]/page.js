import { notFound } from 'next/navigation';
import { getAirlineConfig } from '@/config/airlines/registry';
import AirlinePageWrapper from '@/components/AirlinePage/AirlinePageWrapper';

export default async function Page({ params }) {
  const { airline: slug } = await params;
  const config = getAirlineConfig(slug);
  if (!config) notFound();
  return <AirlinePageWrapper slug={slug} config={config} />;
}