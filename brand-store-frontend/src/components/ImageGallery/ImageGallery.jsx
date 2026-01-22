import Image from "next/image";
import { images } from "./config";

 const ImageGallery = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-gold-gradient mb-4 drop-shadow-md">
            Discover the Extraordinary
          </h2>
          <div className="w-32 h-px bg-linear-to-r from-transparent via-primary to-transparent mx-auto mt-8" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-primary/20 overflow-hidden rounded-sm">
          {images.map((item, index) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden group border-primary/20
                ${index % 3 !== 2 ? "border-r" : ""}
                ${index < 6 ? "border-b" : ""}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;