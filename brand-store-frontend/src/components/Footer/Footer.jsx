import Image from 'next/image';
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-4 border-t border-white/10 fixed bottom-0 w-full z-99">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center pb-4 border-b border-white/10">
                    <div className="mb-8 md:mb-0">
                        <Image src={'/brand-store/images/air-india-logo.svg'} alt="Air India Logo" width={100} height={100} />

                        {/* <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 mt-2 pl-1">Airways Abu Dhabi</div> */}
                    </div>
                    <button className="bg-white text-black px-10 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-(--primary) hover:text-white transition-colors duration-300">
                        Book Now With Air-India
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;