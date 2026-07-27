'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { VeiculoItem } from '@/data/mockVeiculos';

interface VeiculoGalleryProps {
  veiculo: VeiculoItem;
}

export const VeiculoGallery: React.FC<VeiculoGalleryProps> = ({ veiculo }) => {
  const images = veiculo.galleryImages && veiculo.galleryImages.length > 0
    ? veiculo.galleryImages
    : [veiculo.imageUrl];

  const [activeImage, setActiveImage] = useState(images[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="space-y-3">
      {/* Main Image Banner */}
      <div
        onClick={() => setIsLightboxOpen(true)}
        className="relative w-full h-[280px] sm:h-[380px] md:h-[440px] rounded-3xl overflow-hidden bg-slate-900 cursor-pointer group shadow-md"
      >
        <Image
          src={activeImage}
          alt={veiculo.title}
          fill
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5">
          <span>🔍</span>
          <span>Clique para Ampliar ({images.length} fotos)</span>
        </div>

        {veiculo.hasCautelarApproved && (
          <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1">
            <span>✓</span> Laudo Cautelar Aprovado
          </div>
        )}
      </div>

      {/* Thumbnails list */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-none pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImage(img)}
              className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                activeImage === img
                  ? 'border-emerald-500 scale-105 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100'
              }`}
            >
              <Image src={img} alt={`Foto ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full h-[80vh] flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-2 right-2 z-10 text-white hover:text-slate-300 text-2xl font-bold p-2"
            >
              ✕
            </button>

            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image src={activeImage} alt={veiculo.title} fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
