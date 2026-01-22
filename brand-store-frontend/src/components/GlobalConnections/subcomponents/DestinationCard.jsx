const DestinationCard = ({ country, city, img }) => {
    return (
      <div className="relative w-80 h-125 shrink-0 group cursor-pointer border border-white/5 hover:border-(--primary)/50 transition-colors duration-500">
        <img
          alt={city}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
          src={img}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-8 left-8 right-8 border-t border-white/20 pt-6 transition-all duration-500 group-hover:border-(--primary)/50">
          <span className="text-xs text-(--primary) uppercase tracking-widest block mb-1">{country}</span>
          <h3 className="font-display text-3xl text-white mb-4">{city}</h3>
          <p className="text-(--primary) text-xs font-bold uppercase tracking-[0.2em] flex items-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            Discover Now <span className="material-icons text-[10px] ml-2">arrow_forward</span>
          </p>
        </div>
      </div>
    );
  }

  export default DestinationCard;