# ROADMAP.md — Conquista Market (`vca.market`) Master Roadmap

> **PXOS Normative Document**: Mapeamento completo de desenvolvimento do **Conquista Market**, desde a fundação inicial da interface até o lançamento de um MVP 100% funcional, seguro e hiperlocal para Vitória da Conquista.

---

## 🗺️ Visão Geral do Pipeline de Evolução

```
[ FASE 1: Fundação & Frontend Micro-UX ] ── (100% CONCLUÍDO)
   ├── Universal Shell (Header, Mobile Dock, Footer, Filtro de Bairros de VCA)
   └── 5 Verticais de Mercado (`/imoveis`, `/veiculos`, `/servicos`, `/comercio`, `/vagas`)
                   │
                   ▼
[ FASE 2 / P0: Infraestrutura Crítica & Persistência ] ── (100% CONCLUÍDO)
   ├── Supabase PostgreSQL + RLS + Tipagem TypeScript
   ├── Pipeline de Upload de Imagens com Compressão WebP
   ├── Buscador Vetorial & Híbrido (< 50ms com Typesense)
   └── Autenticação OTP WhatsApp/SMS & Proteção por Middleware
                   │
                   ▼
[ FASE 3 / P1: Ferramentas de Conversão & Operação ] ── (100% CONCLUÍDO)
   ├── Esteira /anunciar (Wizard Multi-Step 5 Passos conforme DESIGN.md)
   ├── Simulador de Financiamento Habitacional Caixa / SFH VCA
   ├── Comparador Avançado Tabela FIPE para Veículos
   └── Dashboard Analítico de Leads Conquista Pro (`/perfil`)
                   │
                   ▼
[ FASE 4 / P2: Inovação Hiperlocal & Escala Regional ] ── (100% CONCLUÍDO)
   ├── Mural "Procuro em VCA" (Mural de Pedidos Abertos `/demandas`)
   ├── Gerador de Mini-Currículo Rápido via WhatsApp (`/vagas`)
   ├── Inteligência Regional de Mercado por Bairro (`/inteligencia-vca`)
   └── Sistema Global Dark & Light Mode (`next-themes`)
                   │
                   ▼
[ FASE 5 / P3: Operação Completa de Contas & Anúncios ] ── (100% CONCLUÍDO)
   ├── P3.1 Telas de Login & Cadastro (`/login`, `/cadastro`)
   ├── P3.2 Edição & Gestão Completa de Anúncios (`/anuncios/[id]/editar`)
   └── P3.3 Central de Configurações da Conta & Selos de Verificação (CPF/CRECI)
                   │
                   ▼
[ FASE 6 / P4: Gamificação, Reputação & Segurança Anti-Fraude ] ── (EM ANDAMENTO)
   ├── P4.1 Sistema de Avaliações Auditadas de Vendedores (1 a 5 Estrelas)
   ├── P4.2 Gamificação & Badges de Confiança VCA (Reputação Bronze/Prata/Ouro)
   ├── P4.3 Camada de Segurança, Moderação & Denúncias de Anúncios ("Denunciar")
   └── P4.4 Readiness Checklist & Deploy de Produção (Vercel + Supabase + Typesense)
```

---

## 🟢 FASE 1 — Fundação & Frontend Micro-UX (CONCLUÍDO)
- [x] **Universal Shell**: Header com seletor de bairros de VCA, busca global e Mobile Dock.
- [x] **5 Verticais**: Páginas dedicadas em `/imoveis`, `/veiculos`, `/servicos`, `/comercio`, `/vagas`.
- [x] **Página de Detalhes (`/imoveis/[id]`)**: Galeria de fotos, modal Lightbox, ficha técnica e agendamento via WhatsApp.
- [x] **Sistema de Contas (`/perfil`)**: Perfil do usuário com alternância de papéis (*Comum*, *Particular CPF*, *Pro CRECI*).
- [x] **Hotsite do Anunciante (`/anunciante/[id]`)**: Vitrine pública do anunciante com bio, redes sociais e catálogo.

---

## 🟢 FASE 2 / P0 — Infraestrutura Crítica & Persistência (CONCLUÍDO)
- [x] **P0.1 Supabase PostgreSQL**: Schema relacional (`20260726_initial_schema.sql`) com RLS, índices e atributos JSONB.
- [x] **P0.2 Pipeline de Mídia**: Storage com compressão client-side em WebP (`browser-image-compression`).
- [x] **P0.3 Motor de Busca Typesense**: Busca vetorial/híbrida ultra-rápida por palavra-chave, bairro e categoria em `/api/search`.
- [x] **P0.4 Autenticação OTP & Middleware**: Proteção de rotas com Supabase Server Client e suporte a OTP via WhatsApp/SMS.

---

## 🟢 FASE 3 / P1 — Ferramentas de Conversão & Operação (CONCLUÍDO)
- [x] **P1.1 Formulário Dinâmico `/anunciar`**: Wizard de 5 passos refatorado com estética sóbria orientada a conteúdo conforme `DESIGN.md`.
- [x] **P1.2 Simulador Habitacional Caixa**: Calculadora SAC/Price em `/imoveis/[id]` com envio de proposta via WhatsApp.
- [x] **P1.3 Comparador Tabela FIPE**: Badge e modal comparativo destacando desvalorização local em `/veiculos`.
- [x] **P1.4 Dashboard Analítico Pro**: Relatório de cliques de WhatsApp e origem de leads por bairro em `/perfil`.

---

## 🟢 FASE 4 / P2 — Inovação Hiperlocal & Escala Regional (CONCLUÍDO)
- [x] **P2.1 Mural de Pedidos Abertos (`/demandas`)**: Moradores publicam o que procuram em VCA e lojistas/profissionais respondem no WhatsApp.
- [x] **P2.2 Gerador de Mini-Currículo (`/vagas`)**: Formatação rápida de currículo em texto qualificado para recrutadores.
- [x] **P2.3 Inteligência por Bairro (`/inteligencia-vca`)**: Analytics de valorização do m² e categorias mais demandadas nos bairros de Conquista.
- [x] **P2.4 Sistema Global de Temas**: Alternador ☀️ Claro / 🌙 Escuro / 💻 Sistema no Header.

---

## 🟢 FASE 5 / P3 — Operação Completa de Contas & Anúncios (CONCLUÍDO)
- [x] **P3.1 Telas de Login & Cadastro (`/login`, `/cadastro`)**: Login OTP/senha e cadastro com escolha de perfil (Particular vs Pro).
- [x] **P3.2 Edição & Gestão de Anúncios (`/anuncios/[id]/editar`)**: Formulário de edição com atualização de dados e status (*Ativo*, *Pausado*, *Vendido*).
- [x] **P3.3 Central de Configurações da Conta (`/perfil/configuracoes`)**: Gestão de dados pessoais e envio de documentos para selos de verificação.

---

## 🔴 FASE 6 / P4 — Gamificação, Reputação & Segurança Anti-Fraude (ETAPA FINAL MVP)
> **Foco**: Blindar a comunidade de Vitória da Conquista contra golpes, fraudes e anúncios falsos, premiando os melhores anunciantes.

- [ ] **P4.1 Sistema de Avaliações Auditadas (`/anunciante/[id]/avaliar`)**: Avaliação por estrelas (1 a 5) e depoimentos vinculados a negociações iniciadas pelo WhatsApp.
- [ ] **P4.2 Gamificação & Badges de Confiança VCA**: Sistema de pontuação de reputação (*Bronze*, *Prata*, *Ouro*, *Vendedor Recomendado em VCA*, *Resposta em < 15 min*).
- [ ] **P4.3 Camada de Moderação & Segurança Anti-Fraude**: Botão *"Denunciar Anúncio"* com modal de denúncia e moderação de conteúdo.
- [ ] **P4.4 Readiness Checklist & Deploy de Produção**: Auditoria final de performance e deploy oficial no Vercel.
