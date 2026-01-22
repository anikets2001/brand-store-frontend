import { destinations } from './config';
import DestinationCard from './subcomponents/DestinationCard';

const GlobalConnections = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[color:var(--primary)]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col md:flex-row justify-between items-end">
        <div>
          <span className="text-xs font-bold tracking-[0.3em] text-[color:var(--primary)] uppercase block mb-3">
            Global Connections
          </span>
          <h2 className="font-display text-4xl text-white">100+ Destinations</h2>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] text-white transition-all duration-300 group">
            <span className="material-icons text-sm group-hover:-translate-x-1 transition-transform">west</span>
          </button>
          <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] text-white transition-all duration-300 group">
            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">east</span>
          </button>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-8 px-4 md:px-[calc((100vw-80rem)/2)] pb-12 hide-scroll scroll-smooth">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            country={destination.country}
            city={destination.city}
            img={destination.img}
          />
        ))}
        <div className="w-12 shrink-0" />
      </div>
    </section>
  );
};

export default GlobalConnections;