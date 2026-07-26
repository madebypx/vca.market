'use client';

import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { createClient } from '@/lib/supabase/client';

interface ImageUploaderProps {
  bucketName?: string;
  maxImages?: number;
  onImagesUploaded: (urls: string[]) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  bucketName = 'listing-media',
  maxImages = 5,
  onImagesUploaded,
}) => {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (uploadedUrls.length + files.length > maxImages) {
      setErrorMsg(`Você pode enviar no máximo ${maxImages} imagens.`);
      return;
    }

    setUploading(true);
    setErrorMsg(null);
    const newUrls: string[] = [];

    try {
      const supabase = createClient();

      for (let i = 0; i < files.length; i++) {
        const originalFile = files[i];

        // Opções de compressão e conversão para WebP no cliente
        const options = {
          maxSizeMB: 0.8,
          maxWidthOrHeight: 1280,
          useWebWorker: true,
          fileType: 'image/webp',
        };

        const compressedBlob = await imageCompression(originalFile, options);

        // Gera nome único para o arquivo WebP
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.webp`;
        const filePath = `uploads/${fileName}`;

        // Envia para o bucket do Supabase Storage se configurado
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        if (supabaseUrl && !supabaseUrl.includes('placeholder')) {
          const { error: uploadError } = await supabase.storage
            .from(bucketName)
            .upload(filePath, compressedBlob, {
              contentType: 'image/webp',
              upsert: true,
            });

          if (uploadError) {
            throw uploadError;
          }

          const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
          newUrls.push(data.publicUrl);
        } else {
          // Em ambiente sem Supabase configurado, simula a geração de URL via Blob local
          const localUrl = URL.createObjectURL(compressedBlob);
          newUrls.push(localUrl);
        }
      }

      const updated = [...uploadedUrls, ...newUrls];
      setUploadedUrls(updated);
      onImagesUploaded(updated);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Falha ao processar imagens.';
      setErrorMsg(message);
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updated = uploadedUrls.filter((_, i) => i !== index);
    setUploadedUrls(updated);
    onImagesUploaded(updated);
  };

  return (
    <div className="w-full space-y-4">
      <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200">
        Fotos do Anúncio (Otimização WebP Automática)
      </label>

      <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500 transition-colors">
        <input
          type="file"
          accept="image/*"
          multiple
          disabled={uploading || uploadedUrls.length >= maxImages}
          onChange={handleFileChange}
          className="hidden"
          id="image-upload-input"
        />

        <label
          htmlFor="image-upload-input"
          className="cursor-pointer flex flex-col items-center gap-2 text-center"
        >
          <svg
            className="w-10 h-10 text-emerald-600 dark:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {uploading
              ? 'Comprimindo & Convertendo para WebP...'
              : `Arraste fotos ou clique aqui (Max: ${maxImages})`}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            PNG, JPG, WEBP até 10MB (Convertido para WebP leve)
          </span>
        </label>
      </div>

      {errorMsg && (
        <p className="text-xs text-red-600 dark:text-red-400">{errorMsg}</p>
      )}

      {uploadedUrls.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
          {uploadedUrls.map((url, idx) => (
            <div key={idx} className="relative group aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt={`Upload ${idx + 1}`} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => handleRemoveImage(idx)}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                title="Remover imagem"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
