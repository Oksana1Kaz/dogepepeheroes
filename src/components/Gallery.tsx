import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Lightbox } from './Lightbox';

interface GalleryProps {
  images: Array<{
    src: string;
    alt: string;
    date?: string;
    caption?: string;
  }>;
}

export function Gallery({ images }: GalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const navigateGallery = (direction: 'prev' | 'next') => {
    setCurrentImage(prev => {
      if (direction === 'prev') {
        return prev === 0 ? images.length - 1 : prev - 1;
      } else {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <>
      <div className="relative col-span-1 row-span-2 flex flex-col gap-4">
        <div 
          className="comic-panel aspect-square group overflow-hidden cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
        >
          <div className="relative w-full h-full">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-between p-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery('prev');
                }}
                className="p-2 rounded-full bg-white/80 hover:bg-white transition-all transform hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery('next');
                }}
                className="p-2 rounded-full bg-white/80 hover:bg-white transition-all transform hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentImage(index);
                setIsLightboxOpen(true);
              }}
              className={`comic-panel aspect-square overflow-hidden transform transition-all ${
                currentImage === index ? 'ring-4 ring-green-400' : 'hover:scale-105'
              }`}
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentImage}
          onClose={() => setIsLightboxOpen(false)}
          onNavigate={setCurrentImage}
        />
      )}
    </>
  );
}