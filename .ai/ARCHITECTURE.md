# ARCHITECTURE.md — VCA Market Systems & Technical Architecture

> **PXOS Normative Document**: Defines the technical architecture, layer boundaries, system integrations, and data flow standards for **Conquista Market (`vca.market`)**.

---

## 1. System Overview & Technology Stack

```
[ Client Layer ]              Next.js 16 (App Router) + React 19 + Tailwind v4 (PWA Ready)
                                                │
[ API / Server Layer ]        Next.js Server Actions / Route Handlers (Edge / Node Runtime)
                                       ┌────────┴────────┐
                                       ▼                 ▼
[ Data & Auth Layer ]         Supabase (PostgreSQL 16) + Row Level Security (RLS)
[ Search & Index Engine ]     Typesense / Algolia (Fast Hyperlocal Search & Vector Indexing)
[ External Integrations ]     WhatsApp Business API / Direct Lead Dispatcher + S3 Storage
```

* **Frontend Framework**: Next.js 16 (App Router) with React 19, TypeScript, and Tailwind CSS v4.
* **Database & Auth**: PostgreSQL managed via Supabase (Auth, DB, RLS, Storage).
* **Search Engine**: Typesense (or Algolia) for sub-50ms hybrid full-text & vector search by neighborhood and category attributes.
* **Storage**: Supabase Storage / AWS S3 for listing media (optimized via Next.js `Image`).

---

## 2. Layer Boundaries & Responsibilities

### 2.1 Presentation Layer (Universal Shell + Vertical Adapters)
* **Universal Shell (`src/components/layout/`)**: Header, MobileDock, and Footer. Identical across all routes.
* **Vertical Adapters (`src/components/verticals/`)**: Dynamically loaded UI adapters that render category-specific listing cards, specs grids, and search facets based on `category_id`.

### 2.2 Server & API Layer (`src/app/api/` & Server Actions)
* **Lead Dispatcher Service**: Intercepts contact requests, validates anti-spam rules, logs lead events in PostgreSQL, and generates pre-formatted WhatsApp URLs.
* **Listing Management Service**: CRUD operations for listings, enforcing category JSONB validation before database persistence.

### 2.3 Search & Indexing Strategy
* PostgreSQL acts as the source of truth.
* Database triggers sync active listings to Typesense/Algolia in real-time.
* Search queries route directly to the search engine index for ultra-low latency filtering.

---

## 3. Lead Generation & WhatsApp Dispatch Flow

```
[ User Clicks "Falar no WhatsApp" ]
                │
                ▼
[ Lead Dispatcher (Client Component) ] ──(POST /api/leads)──► [ Supabase DB: Log Lead Event ]
                │                                                         │
                ▼                                                         ▼
[ Open WhatsApp Web / App ] ◄──[ Pre-formatted URL with Spec & ID ]───────┘
```

* **Message Structure Requirement**:
  `"Olá! Vi seu anúncio '{listing.title}' (Código #{listing.id}) no Conquista Market (vca.market) e gostaria de informações."`

---

## 4. Security & Anti-Fraud Architecture

1. **Row Level Security (RLS)**: Users can only edit or delete their own listings or store profiles.
2. **Anti-Spam Rate Limiting**: Max 5 lead dispatches per IP per minute. Max 10 active free listings per unverified user.
3. **Verification Integrity**: Badges are server-side computed based on verified CPF/CNPJ or manual CRECI/Physical Store audit records.
