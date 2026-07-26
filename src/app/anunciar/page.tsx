import React from 'react';
import { CreateListingForm } from '@/components/anunciar/CreateListingForm';

export default function AnunciarPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6">
      <CreateListingForm />
    </main>
  );
}
