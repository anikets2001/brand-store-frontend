"use client";

import Image from "next/image";
import React from "react";
import { useAirline } from "@/context/AirlineContext";
import Link from "next/link";

const Header = () => {
  const airline = useAirline();
  if (!airline?.config) return null;
  const { brand } = airline.config;
  return (
    <nav className="font-airindia-sans fixed w-full top-0 z-50 bg-transparent border-b border-[#f9f6ee]/10 shadow-[0_1px_0_rgba(235,190,105,0.1),0_1px_0_rgba(249,246,238,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 gap-3">
          <div className="flex items-center shrink-0 min-w-0">
            <div className="relative h-9 w-36 sm:h-10 sm:w-44 md:h-12 md:w-52 shrink-0 overflow-visible">
              <Link href="https://www.airindia.com/" target="_blank">
                <Image
                  src={brand.logoUrl}
                  alt={`${brand.displayName || brand.name} Logo`}
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                />
              </Link>
            </div>
          </div>
          {brand.partnerLogoUrl && (
            <div className="relative h-8 w-20 sm:h-9 sm:w-24 md:h-10 md:w-28 shrink-0">
              <Link href="https://www.yatra.com/" target="_blank">
                <Image
                  src={brand.partnerLogoUrl}
                  alt={brand.partnerLogoAlt || "Yatra logo"}
                  fill
                  className="object-contain object-right"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
