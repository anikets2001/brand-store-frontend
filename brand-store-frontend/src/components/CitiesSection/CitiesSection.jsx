import React from 'react';
import { cities } from './config';
import CityBadge from './subcomponents/CityBadge';

const CitiesSection = () => {
  return (
    <section className="py-20 bg-[#0F0F0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-20 bg-white/10" />
          <h2 className="font-display text-2xl md:text-3xl text-white px-8">From 11 Cities to the World</h2>
          <div className="h-px w-20 bg-white/10" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {cities.map((city) => (
            <CityBadge key={city.id} city={city.city} sub={city.sub} img={city.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection