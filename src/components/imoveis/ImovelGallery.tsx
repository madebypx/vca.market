'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ImovelItem } from '@/data/mockImoveis';

interface ImovelGalleryProps {
  imovel: ImovelItem;
}

export function ImovelGallery({ imovel }: ImovelGalleryProps) {
  const images = imovel.galleryImages && imovel.galleryImages.length > 0
    ? imovel.galleryImages
    : [imovel.imageUrl];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Main Image Frame with Overlays */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden bg-slate-900 shadow-md group">
        <Image
          src={images[activeImageIndex]}
          alt={imovel.title}
          fill
          priority
          className="object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
          onClick={() => setIsLightboxOpen(true)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
          <span className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full text-white shadow-sm ${
            imovel.transactionType === 'venda' ? 'bg-emerald-600' : 'bg-blue-600'
          }`}>
            {imovel.transactionType === 'venda' ? 'Venda' : 'Aluguel'}
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/20">
            📍 {imovel.neighborhood}
          </span>
        </div>

        {/* CRECI Verification Badge Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 backdrop-blur-md border border-amber-300 flex items-center gap-1 shadow-sm">
            <span>✓</span> {imovel.creciNumber}
          </span>
        </div>

        {/* Bottom Expand Button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute bottom-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white text-xs font-bold px-3.5 py-2 rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 shadow-md"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          <span>Ver em Tela Cheia ({images.length} fotos)</span>
        </button>
      </div>

      {/* Thumbnails Carousel / Grid */}
      {images.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all ${
                activeImageIndex === idx
                  ? 'border-[var(--color-trust-blue)] ring-2 ring-blue-500/30 scale-105'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <Image src={img} alt={`Foto ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-8 cursor-pointer select-none"
        >
          {/* Header Controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl flex items-center justify-between text-white z-10 cursor-default"
          >
            <span className="text-xs sm:text-sm font-semibold truncate max-w-[70%]">
              Foto {activeImageIndex + 1} de {images.length} — {imovel.title}
            </span>

            <button
              onClick={() => setIsLightboxOpen(false)}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-red-500/80 text-white font-extrabold text-xs flex items-center gap-2 backdrop-blur-md border border-white/20 transition-all shadow-md"
            >
              <span>Sair da Tela Cheia</span>
              <span className="text-base">✕</span>
            </button>
          </div>

          {/* Main Lightbox Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[60vh] md:h-[75vh] my-auto cursor-default"
          >
            <Image
              src={images[activeImageIndex]}
              alt={imovel.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Lightbox Footer Navigation */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-4 text-white z-10 cursor-default"
          >
            <button
              disabled={activeImageIndex === 0}
              onClick={() => setActiveImageIndex((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold disabled:opacity-30 transition-colors"
            >
              ← Anterior
            </button>

            <span className="text-xs text-slate-300 font-bold">
              {activeImageIndex + 1} / {images.length}
            </span>

            <button
              disabled={activeImageIndex === images.length - 1}
              onClick={() => setActiveImageIndex((prev) => Math.min(images.length - 1, prev + 1))}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold disabled:opacity-30 transition-colors"
            >
              Próxima →
            </button>

            <button
              onClick={() => setIsLightboxOpen(false)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs border border-slate-700 transition-colors ml-2"
            >
              Fechar (Esc)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
