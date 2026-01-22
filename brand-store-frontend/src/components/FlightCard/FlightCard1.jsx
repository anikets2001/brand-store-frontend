'use client';

function FlightCard({ badge, img, fromTime, fromCode, toTime, toCode, duration, price, fare }) {
  return (
    <div className="bg-black/60 backdrop-blur-xl border border-(--primary)/30 rounded-xl flex flex-col md:flex-row shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-(--primary)/60 transition-all duration-500 group overflow-hidden h-auto md:h-72 relative">
      <div className="w-full md:w-2/5 h-64 md:h-72 relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r-0">
        <img
          alt={badge}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter brightness-90 contrast-110"
          src={img}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5">
          <span className="text-[10px] text-(--navy-deep) font-bold uppercase tracking-widest bg-(--primary)/90 backdrop-blur-md px-3 py-1.5 rounded-sm shadow-lg">
            {badge}
          </span>
        </div>
      </div>

      <div className="flex-1 p-8 flex flex-col md:flex-row items-center justify-between md:absolute md:right-0 md:top-0 md:bottom-0 md:w-3/5 md:bg-black/70 md:backdrop-blur-sm md:rounded-r-xl">
        <div className="flex items-center w-full md:w-auto mb-6 md:mb-0">
          <div className="h-12 w-px bg-linear-to-b from-transparent via-(--primary)/30 to-transparent mr-10 hidden md:block" />
          <div>
            <div className="flex items-center space-x-6 mb-2">
              <div className="text-center">
                <span className="block text-2xl text-white font-display">{fromTime}</span>
                <span className="text-[10px] text-white/40 tracking-widest uppercase">{fromCode}</span>
              </div>
              <span className="material-symbols-outlined text-(--primary) text-xl mx-2 opacity-80">
                flight
              </span>
              <div className="text-center">
                <span className="block text-2xl text-white font-display">{toTime}</span>
                <span className="text-[10px] text-white/40 tracking-widest uppercase">{toCode}</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 opacity-60">
              <span className="text-[10px] text-(--primary) uppercase tracking-widest">{duration}</span>
              <span className="w-1 h-1 rounded-full bg-(--primary)" />
              <span className="text-[10px] text-white uppercase tracking-widest">Non-stop</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto border-t md:border-t-0 border-white/10 pt-6 md:pt-0">
          <div className="flex flex-col items-end mr-8">
            <span className="font-display text-3xl text-(--primary) font-medium">{price}</span>
            <span className="text-[10px] text-white/40 uppercase tracking-widest">{fare}</span>
          </div>
          <button className="bg-transparent hover:bg-(--primary) text-(--primary) hover:text-(--navy-deep) border border-(--primary)/50 text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-sm transition-all duration-300">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;