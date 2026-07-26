import { HeroSearch } from '@/components/home/HeroSearch';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { TrustBanner } from '@/components/home/TrustBanner';
import { RecentListings } from '@/components/home/RecentListings';

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* 1. Hero Section with Unified Search & Neighborhood Selector */}
      <HeroSearch />

      {/* 2. Featured Verticals Section (5 Categories) */}
      <CategoryGrid />

      {/* 3. Local Trust & Verification Section */}
      <TrustBanner />

      {/* 4. Recent & Featured Listings Showcase */}
      <RecentListings />
    </div>
  );
}
