const CityBadge = ({ city, sub, img }) => {
    return (
        <div className="flex flex-col items-center group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-5 border border-white/10 group-hover:border-(--primary) transition-all p-1">
                <img
                    alt={city}
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={img}
                />
            </div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">{city}</h4>
            <p className="text-[10px] text-(--primary) mt-1 uppercase tracking-widest">{sub}</p>
        </div>
    );
}

export default CityBadge;