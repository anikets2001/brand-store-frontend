'use client';

import Image from 'next/image';

function FlightCard({ img, fromTime, fromCode, toTime, toCode, duration, price, fare }) {
    return (
        <div className="w-full rounded-xl flex flex-col md:flex-row md:h-[300px] md:items-center overflow-hidden border border-white/10 bg-black/40">
            <div className="relative w-full h-40 md:h-full md:w-2/5 shrink-0">
                <Image
                    alt={'Flight Card Image'}
                    src={img}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter brightness-90 contrast-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                
            </div>
            <div className="w-full flex flex-col md:flex-row md:flex-1 items-center justify-between gap-4 p-4 md:py-6 md:px-6 md:bg-black/70 md:backdrop-blur-sm">
                <div className="flex items-center w-full md:w-auto justify-center md:justify-start">
                    <div className="h-12 w-px bg-linear-to-b from-transparent via-(--primary)/30 to-transparent mr-6 hidden md:block shrink-0" />
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 md:gap-x-6 gap-y-1">
                        <div className="flex items-center gap-2 md:gap-4">
                            <div className="text-center">
                                <span className="block text-xl md:text-2xl text-white font-display">{fromTime}</span>
                                <span className="text-[10px] text-white/40 tracking-widest uppercase">{fromCode}</span>
                            </div>
                            <span className="material-symbols-outlined text-(--primary) text-lg md:text-xl opacity-80 shrink-0">
                                flight
                            </span>
                            <div className="text-center">
                                <span className="block text-xl md:text-2xl text-white font-display">{toTime}</span>
                                <span className="text-[10px] text-white/40 tracking-widest uppercase">{toCode}</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-2 md:space-x-3 opacity-60 w-full md:w-auto">
                            <span className="text-[10px] text-(--primary) uppercase tracking-widest">{duration}</span>
                            <span className="w-1 h-1 rounded-full bg-(--primary)" />
                            <span className="text-[10px] text-white uppercase tracking-widest">Non-stop</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full md:w-auto border-t border-white/10 pt-4 md:border-0 md:pt-0 gap-4">
                    <div className="flex flex-col items-end">
                        <span className="font-display text-2xl md:text-2xl text-(--primary) font-medium">{`₹${price}`}</span>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest">{fare}</span>
                    </div>
                    <button className="cursor-pointer min-h-[44px] px-6 py-2.5 md:px-8 md:py-3 bg-transparent hover:bg-(--primary) text-(--primary) hover:text-(--navy-deep) border border-(--primary)/50 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 touch-manipulation">
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FlightCard;