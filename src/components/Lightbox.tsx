import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: Array<{
    src: string;
    alt: string;
    date?: string;
    caption?: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
        break;
      case 'ArrowRight':
        onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
        break;
    }
  }, [currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const diff = startX - touch.clientX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
        } else {
          onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
        }
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };

    document.addEventListener('touchmove', handleTouchMove, { once: true });
  }, [currentIndex, images.length, onNavigate]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors z-50"
          aria-label="Close lightbox"
        >
          <X className="w-8 h-8" />
        </button>

        <button
          onClick={() => onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)}
          className="absolute left-4 text-white hover:text-green-400 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={() => onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)}
          className="absolute right-4 text-white hover:text-green-400 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div 
          className="relative max-w-7xl mx-auto px-4 h-full flex items-center"
          onTouchStart={handleTouchStart}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-h-[90vh] max-w-full object-contain opacity-0 transition-opacity duration-300"
              onLoad={(e) => {
                (e.target as HTMLImageElement).classList.remove('opacity-0');
              }}
            />
            {(images[currentIndex].caption || images[currentIndex].date) && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white p-4 rounded-lg">
                <p className="font-comic text-lg">{images[currentIndex].caption}</p>
                {images[currentIndex].date && (
                  <p className="font-comic text-sm text-gray-300 mt-1">{images[currentIndex].date}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}