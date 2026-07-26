# CURRENT_SPEC.md

## Active task
Home Page UI (`/`) — Phase 1

## Goal
Implement the first production-grade homepage for VCA Market, aligned with `.ai/DESIGN.md`, `.ai/ROADMAP.md`, and the product foundation. The page must establish the marketplace identity, reinforce local trust, and create strong entry points into category discovery.

## Scope
1. Hero section
- Prominent unified search input.
- Quick neighborhood selector focused on Vitória da Conquista (e.g. Candeias, Centro, Recreio, Bairro Brasil, Boa Vista).
- Clear value proposition oriented around local commerce and opportunity discovery.

2. Featured verticals section
- Interactive cards for the 5 main business verticals:
  - Imóveis
  - Veículos
  - Serviços
  - Comércio
  - Vagas
- Each card must feel category-specific, not generic.

3. Local trust section
- Dedicated trust block reinforcing verification logic such as “Empresa Conquistense” and “Morador Verificado”.
- Must visually communicate safety, local legitimacy, and professionalization.

4. Featured listings showcase
- Marketplace-style listing grid using the listing card rules defined in `.ai/DESIGN.md`.
- Must include verification badges and category-specific spec pills.
- Can use mock/fallback data if backend integration is not ready yet.

## Acceptance criteria
- The homepage renders inside the universal shell and respects the global layout rules from `.ai/DESIGN.md`.
- The hero is the primary focus above the fold.
- The 5 verticals are clearly discoverable and visually differentiated.
- Trust signals are visible without requiring extra clicks.
- Listing cards do not flatten categories into one generic pattern.
- The page is responsive across desktop, tablet, and mobile.
- Empty/loading states are handled gracefully where needed.

## Out of scope
- Real search backend integration.
- Full autocomplete implementation.
- Final listing ranking logic.
- Seller dashboard.
- Vertical pages implementation.
- Listing detail page.
- Full monetization UI.

## Implementation notes
- Use `.ai/DESIGN.md` as the normative UI/UX source of truth.
- Use `.ai/ROADMAP.md` to stay aligned with the current phase.
- Preserve the hyper-local, trust-first, WhatsApp-aware product positioning from the foundation.
- Prefer a strong static/dummy-data implementation over shallow partial integrations for this phase.

## Deliverables
- Homepage route implementation for `/`
- Reusable homepage sections/components as appropriate
- Responsive UI
- Brief completion report with files changed and any TODOs
