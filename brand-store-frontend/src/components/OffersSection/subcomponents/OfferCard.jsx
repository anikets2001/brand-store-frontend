const OfferCard = ({ tag, headline, desc, code, img }) => {
  return (
    <div className="relative rounded-lg overflow-hidden group cursor-pointer shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/5 hover:border-[color:var(--primary)]/30 transition-all duration-300">
      <img alt={tag} className="w-full h-72 object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src={img} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent p-10 flex flex-col justify-center">
        <span className="backdrop-blur-md bg-white/10 border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded w-max mb-4 uppercase tracking-widest">
          {tag}
        </span>
        <h3 className="text-white font-display text-4xl mb-2">{headline}</h3>
        <p className="text-white/70 text-sm mb-6 font-light">{desc}</p>
        <div className="text-[color:var(--primary)] text-xs font-mono border border-[color:var(--primary)]/30 bg-black/40 backdrop-blur px-4 py-2 w-max rounded">
          CODE: {code}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;