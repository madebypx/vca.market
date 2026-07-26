# DESIGN.md — VCA Market Design & UX Governance

> **PXOS Normative Document**: This file is the single source of truth for UX/UI architecture, behavioral patterns, component rules, and design principles for **Conquista Market (`vca.market`)**. 
> **Agent Enforcement**: All AI agents and human developers MUST adhere to these rules. Do not override this logic without explicit user authorization. Prioritize reuse and consistency over inventing new patterns.

---

## 1. Core UX & Design Principles

* **Local First, Always**: Every view must reinforce Vitória da Conquista's geography. Neighborhoods and local commercial hubs are first-class citizens in the UI.
* **Trust Above All (Auditability)**: Trust signals (verified badges, physical store locations, real reviews) take visual precedence over decorative elements. 
* **Zero-Friction Conversion**: WhatsApp is the primary negotiation channel. The UI must aggressively reduce steps to reach the WhatsApp lead dispatch. Do not force traditional e-commerce cart checkouts unless explicitly required by a specific flow.
* **Verticalized Depth**: Categories are not generic text fields. Each category has its own schema, specific filters, and tailored listing cards.
* **Clarity & Performance**: UI must be dense enough for discovery but clean enough for fast scanning. Target interaction speed: < 200ms.

---

## 2. Global Shell Architecture (Immutable)

The **Universal Shell** surrounds all pages and must remain structurally identical across the platform.

### 2.1 Fixed Elements
* **Header Bar (Sticky)**:
  * Brand Logo (`vca.market`).
  * Neighborhood Selector (Default: "Todo Vitória da Conquista").
  * Global Search Bar (with category autocomplete).
  * Main Navigation: `Imóveis` | `Veículos` | `Serviços` | `Comércio` | `Vagas`.
  * CTA: `+ Anunciar`.
  * User/Pro Panel Access.
* **Mobile Bottom Dock (Fixed)**:
  * Anchors: `Home`, `Buscar`, `+ Anunciar` (Prominent center), `Leads`, `Perfil`.
* **Footer**: Trust seals, local directory, anti-fraud guidelines.

### 2.2 Responsive Layout Governance
* **Desktop**: 12-column grid. Max-width constraints apply to ensure readability. Sidebars handle complex category filters.
* **Tablet**: 8-column grid. Filters collapse into slide-over drawers.
* **Mobile**: 4-column grid. Full-width cards. Navigation shifts entirely to the bottom dock.

---

## 3. Category Variation Rules (Mutable)

The inner content of the Universal Shell adapts based on the active category. Agents must respect these distinct layouts:

* **Imóveis (Real Estate)**: Split View (Map + List). High density. Must show $m^2$, beds, baths, parking, and CRECI badges above the fold. CTA: *"Agendar Visita"*.
* **Veículos (Auto)**: Grid View. Must show FIPE comparison badge, Year, Km, and Cautelar approval above the fold. CTA: *"Falar com Vendedor / Simular"*.
* **Serviços (Services)**: Portfolio Gallery View. Must highlight average rating (stars), "Atende em Domicílio" tag, and verified customer reviews. CTA: *"Solicitar Orçamento"*.
* **Comércio (Retail)**: E-commerce Product Grid. Must highlight condition (Novo/Usado) and physical store pickup availability. CTA: *"Chamar na Loja"*.
* **Vagas (Jobs)**: Compact Vertical List. Must highlight Work Model (Presencial/Híbrido) and Salary Range. CTA: *"Candidatar-se"*.

---

## 4. Typography, Spacing, & State Management

### 4.1 Typography Philosophy
* Use a highly legible, neutral sans-serif (e.g., Inter, system-ui).
* Maintain strict hierarchy: Display headings for marketing, H1s for category titles, H3s for listing cards (max 2 lines, clamped).

### 4.2 State Rules
* **Loading**: Use structural skeleton screens that match the exact shape of the incoming content (e.g., a map skeleton for real estate, a grid skeleton for retail). Avoid generic spinners for main content.
* **Empty States**: Never show a blank screen. Empty states must be actionable (e.g., "Nenhum imóvel encontrado no Bairro Candeias. [Limpar Filtros] ou [Criar Alerta]").
* **Error States**: Keep errors local to the component when possible. Use clear, non-technical language with a recovery action.

---

## 5. Color & Theming Rules (Semantic Roles)

Do not hardcode arbitrary hex values. Rely on semantic tokens:

* **Brand Primary (Navy/Slate)**: For authoritative headers, primary text, and structural borders.
* **Conversion Green**: STRICTLY RESERVED for WhatsApp CTAs, active statuses, and successful lead generation.
* **Trust Blue**: STRICTLY RESERVED for official verification badges (CRECI, Verified Partner).
* **Store Gold/Amber**: STRICTLY RESERVED for local physical store badges ("Empresa Conquistense").
* **Backgrounds**: Use high-contrast neutral backgrounds (off-white for light mode, deep slate for dark mode) to let listing images and trust badges stand out.

---

## 6. Component & Pattern Governance

### 6.1 Listing Cards
* **Mandatory Anatomy**: Thumbnail (with neighborhood overlay) + Category Spec Pill + Title + Price + Seller Identity (with badge).
* **Interaction**: Entire card is clickable. Hover states should provide subtle lift or border emphasis, not dramatic color shifts.

### 6.2 Seller & Store Profiles (`/loja/[slug]`)
* Must act as a verified mini-site.
* Required elements: Cover photo, verified address map, business hours, aggregated review score, and a searchable grid of all active listings from that seller.

### 6.3 Advertiser Dashboard (Painel Pro)
* Focus on utility: Lead counting, active listing management, and boost/ad purchasing.
* Data visualization should be simple (e.g., "Visualizações", "Cliques no WhatsApp").

### 6.4 Search & Filters
* Filters must update the result set dynamically (no "Submit" button required for basic facets).
* Filter facets must adapt instantly when switching root categories.

---

## 7. Trust & Reputation Display

* **Badge Placement**: Always inline with the seller's name. On listing cards, badge icons can overlay the top-right of the image thumbnail for quick scanning.
* **Verification Tiers**: 
  1. *Registrado* (Hidden/Neutral)
  2. *Morador Verificado* (Silver/Check)
  3. *Empresa Conquistense* (Gold/Storefront)
  4. *Parceiro Oficial Pro* (Blue/Shield).
* **Reviews**: Ratings are only valid if tied to a confirmed platform interaction.
* **Anti-Fraud**: High-risk categories (Auto, Real Estate) must display a standard security warning inline before the contact CTA.

---

## 8. Marketplace Conversion Flow

1. **Discovery**: Fast, hybrid search (text + neighborhood tag).
2. **Evaluation**: Detail page prioritizes high-quality images and structured category specs over long text blocks.
3. **Action**: "Falar no WhatsApp" button (sticky on mobile).
4. **Lead Dispatch**: System intercepts the click, logs the lead for the seller's dashboard, and opens WhatsApp with a pre-filled, contextual message (e.g., *"Olá! Vi seu anúncio [ID] no Conquista Market..."*).

---

## 9. Explicit Anti-Patterns ("NEVER DO THIS")

* ❌ **Flattening Categories**: Never use a one-size-fits-all card for all verticals. Real estate needs different specs than a used phone.
* ❌ **Misusing Conversion Colors**: Never use the WhatsApp/Conversion green for decorative backgrounds or secondary buttons.
* ❌ **Obscuring Trust**: Never hide seller verification status behind a click or a tooltip. It must be visible on the top-level card.
* ❌ **Friction in Contact**: Never force a user to create an account simply to send a WhatsApp message to a seller.
* ❌ **Generic Aesthetics**: Never use generic SaaS gradient blobs or "tech startup" illustrations. The UI must feel grounded, local, and commerce-focused.
* ❌ **Premature App Paradigms on Web**: Do not break standard web navigation (e.g., hiding back buttons, breaking URL routing) just to simulate a native app. Build a good web app first.
