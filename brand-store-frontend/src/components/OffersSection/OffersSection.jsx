import { offers } from './config';
import OfferCard from './subcomponents/OfferCard';

const OffersSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 bg-[color:var(--background-charcoal)]">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-xs font-bold tracking-[0.3em] text-[color:var(--primary)] uppercase">
            Exclusive Privileges
          </span>
          <h2 className="font-display text-4xl text-white mt-2">Unmissable Offers</h2>
        </div>
        <a
          className="hidden md:inline-block text-xs uppercase tracking-widest text-white/60 hover:text-[color:var(--primary)] transition-colors border-b border-transparent hover:border-[color:var(--primary)] pb-1"
          href="#"
        >
          View All Offers
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            tag={offer.tag}
            headline={offer.headline}
            desc={offer.desc}
            code={offer.code}
            img={offer.img}
          />
        ))}
      </div>
    </section>
  );
};

export default OffersSection;