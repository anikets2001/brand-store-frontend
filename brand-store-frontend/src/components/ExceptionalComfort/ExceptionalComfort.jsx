import React from 'react';
import { businessStudioImage } from '@/utils/constants';

const ExceptionalComfort = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-(--background-charcoal)">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-white mb-2">Exceptional Comfort</h2>
          <div className="w-12 h-px bg-(--primary) mx-auto my-6" />
        </div>

        <div className="relative rounded-sm overflow-hidden border border-(--primary)/30 group shadow-2xl">
          <div className="relative h-125">
            <img
              alt="Business Studio"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
              src={businessStudioImage}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-(--primary)/40 flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300">
                <span className="material-icons text-(--primary) text-4xl pl-1">play_arrow</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto p-8 glass-panel rounded-xl">
          <p className="text-white/80 text-lg font-light leading-loose">
            The Business Studio aboard the Etihad A350 offers enhanced privacy with fully sliding doors, lie-flat
            beds for complete comfort, and a bespoke selection of curated dining and drinks designed to suit every
            journey.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ExceptionalComfort