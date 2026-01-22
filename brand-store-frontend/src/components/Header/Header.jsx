import { yatraLogoImage } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <nav className="sticky top-0 z-50 bg-(--background-dark)/80 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-6">
                        <Image src={'/brand-store/images/air-india-logo.svg'} alt="Air India Logo" width={140} height={140} />
                        {/* <span className="hidden lg:block h-6 w-px bg-white/20" /> */}
                    </div>
                    <div className="flex items-center space-x-6">
                        <img
                            src={yatraLogoImage}
                            alt="yatra-logo"
                            className="h-10"
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header