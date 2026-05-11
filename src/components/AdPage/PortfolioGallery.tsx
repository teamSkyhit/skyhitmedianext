"use client";

import Image from 'next/image';
import { X } from 'lucide-react';

interface PortfolioImage {
  src: string;
  alt: string;
}

interface PortfolioGalleryProps {
  portfolioImages: PortfolioImage[];
  openLightbox: (imageSrc: string) => void;
  lightboxImage: string | null;
  closeLightbox: () => void;
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  portfolioImages,
  openLightbox,
  lightboxImage,
  closeLightbox
}) => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Trusted by 500+ Brands That Mean Business
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                onClick={() => openLightbox(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={320}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute inset-0 bg-slate-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2"></div>
                    <span className="text-lg font-semibold">View Project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-champagne-400 transition-colors"
              onClick={closeLightbox}
            >
              <X size={40} />
            </button>
            <Image
              src={lightboxImage}
              alt="Portfolio Image"
              width={900}
              height={600}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioGallery;
