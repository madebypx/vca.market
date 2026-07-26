# DECISION_LOG.md

## Durable architectural and product decisions

* **[2026-07-25] Stack Inicial (Frontend):** Adotado Next.js 16 (App Router) com TypeScript e TailwindCSS v4 como fundação do MVP Web Shell. Motivo: Alta performance, SEO-friendly e aderência à estratégia "Web First com evolução PWA".
* **[2026-07-25] Design System & CSS:** Uso de TailwindCSS v4 puro para os tokens estruturais com base nas cores semânticas (`--color-primary`, `--color-accent-green`, `--color-trust-blue`, `--color-badge-gold`) especificadas no `DESIGN.md`.
* **[2026-07-25] Repositório Git & Organização:** Inicializado e sincronizado no GitHub sob a organização oficial `madebypx` (`github.com/madebypx/vca.market`).
* **[2026-07-25] Governança Técnica (PXOS Specs):** Criados os arquivos `.ai/ARCHITECTURE.md` (Diagrama de camadas e WhatsApp Lead Dispatcher), `.ai/DATA_MODEL.md` (Entidades e Schemas JSONB por categoria) e `.ai/ROADMAP.md` (Evolução em 5 Fases).
* **[2026-07-25] Universal Shell (Navegação Global):** Implementados `Header`, `MobileDock` e `Footer` como casca global imutável envolta no `layout.tsx`.
* **[2026-07-25] Micro-UX Específica por Vertical (Fase 2 Concluída):**
  - **Imóveis (`/imoveis`):** Split View com Lista + Mapa Interativo de VCA + filtro de $m^2$, quartos e registro CRECI.
  - **Veículos (`/veiculos`):** Grid com diferencial de preço frente à Tabela FIPE (ex: `🔥 R$ 3.500 abaixo da FIPE`), Km, Câmbio e Laudo Cautelar Aprovado.
  - **Serviços (`/servicos`):** Galeria visual de portfólio + avaliações em estrelas (`★ 4.9`) + indicação de atendimento em domicílio.
  - **Comércio (`/comercio`):** Vitrine e-Commerce com filtro de condição (*Novo* vs *Usado*), polo de retirada (*Centro / Bairro Brasil*) e selo de Loja Física auditada.
  - **Vagas de Emprego (`/vagas`):** Lista qualificada com faixa salarial em destaque, modelo de trabalho (*Presencial*, *Híbrido*, *Remoto*) e envio de currículo direto no WhatsApp do RH.
