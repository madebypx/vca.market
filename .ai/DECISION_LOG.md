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
* **[2026-07-26] Arquitetura de Contas & Níveis de Confiança (Tiered Trust System):** Adotado modelo em 3 níveis (Usuário Comum / Anunciante Particular com CPF Auditado / Conquista Pro com CRECI-BA e CNPJ). Documentado formalmente no arquivo `.ai/USER_ROLES_PERMISSIONS.md`.
* **[2026-07-26] Pivotagem Estratégica de Foco — De "UI-first MVP Buildout" para "Infra-first Operationalization":** Com todas as 5 verticais de frontend, páginas de detalhes e perfis públicos/privados totalmente implementadas no MVP, a prioridade máxima do projeto passa a ser a operacionalização de infraestrutura (P0.1 a P0.4). Pausado o investimento em novas superfícies visuais em favor da integração do Supabase PostgreSQL, pipeline de upload de mídia, motor Typesense e autenticação OTP.
* **[2026-07-26] Infraestrutura Crítica & Operacionalização (Sprint P0 Concluída):** Implementada a persistência relacional no Supabase PostgreSQL (com tabelas, RLS e suporte a atributos JSONB por categoria), pipeline de upload de imagens WebP no Supabase Storage, motor de busca vetorial/híbrido Typesense com fallback e autenticação sem senha (OTP WhatsApp/SMS) com Next.js middleware.
* **[2026-07-26] Ferramentas de Conversão & Publicação Multi-Step (Sprint P1 Concluída):** Implementados o formulário de anúncio em 5 passos (`/anunciar`) com seleção de categoria sóbria orientada a conteúdo, o Simulador de Financiamento Imobiliário Caixa/SFH em `/imoveis/[id]`, os badges comparadores de Tabela FIPE e o Dashboard Analítico de Leads Conquista Pro em `/perfil`, em total conformidade com a governança do `.ai/DESIGN.md`.
* **[2026-07-26] Inovação Hiperlocal & Escala Regional (Sprint P2 Concluída):** Implementados o Mural de Pedidos Abertos ("Procuro em VCA" em `/demandas`), o Gerador de Mini-Currículo Rápido via WhatsApp na vertical `/vagas`, a Inteligência Regional de Mercado por Bairro (`/inteligencia-vca`) e o Sistema Global de Dark e Light Mode com `next-themes` e TailwindCSS v4.
* **[2026-07-26] Operação de Contas, Anúncios & Moderação Anti-Fraude (Sprints P3 & P4 — Conclusão do MVP):** Implementados o fluxo de login/cadastro (`/login`, `/cadastro`), a página de edição de anúncios (`/anuncios/[id]/editar`), a central de configurações e verificação de perfil (`/perfil/configuracoes`), o sistema de avaliações auditadas por estrelas (`ReviewModal`), os selos de reputação comunitária (`TrustBadge`) e o modal de denúncia anti-fraude (`ReportListingModal`), finalizando 100% o MVP de produção.




