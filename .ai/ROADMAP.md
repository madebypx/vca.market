# ROADMAP.md — VCA Market Product & Engineering Roadmap

> **PXOS Normative Document**: Tracks the phased evolution of **Conquista Market (`vca.market`)** from Web MVP to PWA and Mobile Native App.

---

## Roadmap Overview

```
[ Phase 1: Web Shell & Foundation ] ──► [ Phase 2: Verticals & Listings ] ──► [ Phase 3: Trust & Merchant Pro ] ──► [ Phase 4: PWA & Monetization ] ──► [ Phase 5: Native App ]
          (COMPLETED / ACTIVE)                      (UPCOMING)                          (PLANNED)                           (PLANNED)                       (FUTURE SCALE)
```

---

## Phase 1: Web Shell & Core Foundation (Active / In Progress)
- [x] Initial product strategic blueprint & PXOS governance docs (`.ai/DESIGN.md`, `PROJECT_CONTEXT.md`).
- [x] GitHub repository setup (`madebypx/vca.market`).
- [x] Next.js 16 App Router boilerplate with Tailwind v4 semantic tokens.
- [x] Universal Shell components (`Header.tsx`, `MobileDock.tsx`, `Footer.tsx`).
- [x] System Architecture (`.ai/ARCHITECTURE.md`) & Data Model (`.ai/DATA_MODEL.md`) specifications.
- [ ] **Next Task**: Home Page UI (`/`) with Hero Search, Neighborhood Filter Bar, and Featured Verticals.

---

## Phase 2: Category Verticals & Discovery Layer
- [ ] **Imóveis Vertical (`/imoveis`)**: Interactive Map + Split List View, filter by neighborhood, $m^2$, beds, and CRECI badge.
- [ ] **Veículos Vertical (`/veiculos`)**: Grid View with FIPE price comparison badge, Km, transmission, and Cautelar approval.
- [ ] **Serviços Vertical (`/servicos`)**: Portfolio Grid, star rating reviews, "Atende em Domicílio" tag.
- [ ] **Comércio Local Vertical (`/comercio`)**: Retail Product Grid with physical store pickup tags.
- [ ] **Vagas Vertical (`/vagas`)**: Compact List View with salary range and work model badges.
- [ ] **Listing Detail View (`/anuncio/[id]`)**: Dynamic technical spec box per category + Sticky WhatsApp CTA.

---

## Phase 3: Trust Engine & Store Profiles
- [ ] **Verification System**: Implementation of verification badges (Resident, Physical Store, CRECI / Pro Partner).
- [ ] **Store Pages (`/loja/[slug]`)**: Customized storefronts for local merchants in VCA (Centro, Bairro Brasil, Candeias, etc.).
- [ ] **Seller Dashboard (Painel Pro)**: Lead click counter, listing manager, and performance metrics.
- [ ] **Verified Reviews System**: Two-way rating system tied to confirmed platform leads.

---

## Phase 4: PWA & Monetization Engine
- [ ] **PWA Capabilities**: Web manifest, offline caching, and add-to-home-screen prompts.
- [ ] **Pay-per-Boost**: Ad placement engine for top-of-neighborhood and top-of-category listing boosts.
- [ ] **Subscription Engine (Conquista Pro)**: B2B recurring billing for local stores and real estate agencies.
- [ ] **Push Notifications**: Real-time push alerts for sellers when receiving new leads.

---

## Phase 5: Native Mobile App Evolution
- [ ] **React Native / Flutter App**: iOS and Android native apps sharing API endpoints and database logic.
- [ ] **Camera-First Listing Builder**: Instant photo upload and automatic spec fill.
- [ ] **Native Geolocation**: Real-time "Near Me" search by current GPS coordinates in Vitória da Conquista.
