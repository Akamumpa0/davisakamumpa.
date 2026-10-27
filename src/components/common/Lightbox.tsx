import React, { useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    },
    [isOpen, currentIndex, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Auto focus close button for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-opacity animate-in fade-in duration-200"
    >
      {/* Close button */}
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        type="button"
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
      >
        <ChevronRight size={28} />
      </button>

      {/* Main Image and Caption Container */}
      <div className="max-w-5xl w-full flex flex-col items-center">
        <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-lg shadow-2xl">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[75vh] w-auto object-contain mx-auto select-none"
          />
        </div>

        {/* Caption & Counter */}
        <div className="mt-4 text-center max-w-2xl px-4 text-white">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary-sky">
              {currentItem.category} • {currentItem.year}
            </span>
            <span className="text-white/40">•</span>
            <span className="text-xs text-white/60">
              {currentIndex + 1} of {items.length}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{currentItem.title}</h3>
          <p className="text-sm text-slate-300">{currentItem.caption}</p>
        </div>
      </div>
    </div>
  );
};
