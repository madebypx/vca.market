# ROADMAP.md — Conquista Market (`vca.market`) Technical & Product Roadmap

> **PXOS Normative Document**: Define o plano de evolução do **Conquista Market** priorizado por infraestrutura crítica (P0), ferramentas de conversão (P1) e diferenciais hiperlocais de escala (P2).

---

## Evolution Pipeline Overview

```
[ Frontend Micro-UX & Views (Concluído) ]
                   │
                   ▼
[ P0: Infraestrutura Crítica & Operacionalização ] (CONCLUÍDO)
   ├── P0.1 Persistência de Dados (Supabase PostgreSQL)
   ├── P0.2 Upload de Mídia & Pipeline WebP (Supabase Storage)
   ├── P0.3 Buscador Vetorial & Híbrido (< 50ms com Typesense)
   └── P0.4 Autenticação & Validação por WhatsApp/SMS OTP
                   │
                   ▼
[ P1: Ferramentas de Conversão & Operação de Anúncios ] (CONCLUÍDO)
   ├── P1.1 Formulário Dinâmico de Publicação & Gestão (`/anunciar`)
   ├── P1.2 Simulador de Financiamento Habitacional (Caixa / SFH VCA)
   ├── P1.3 Comparador Avançado Tabela FIPE para Veículos
   └── P1.4 Dashboard Analítico de Leads Conquista Pro
                   │
                   ▼
[ P2: Inovação Hiperlocal & Escala Regional ] (EM ANDAMENTO)
   ├── P2.1 "Procuro em VCA" (Mural de Demandas & Pedidos Abertos `/demandas`)
   ├── P2.2 Gerador de Currículo Rápido via WhatsApp (`/vagas`)
   └── P2.3 Inteligência de Mercado / Valorização por Bairro (`/inteligencia-vca`)
```

---

## 🟢 Etapa Concluída: Frontend Micro-UX & Shell Universal
- [x] **Universal Shell**: Header com filtro por bairros de VCA, busca global e Mobile Dock.
- [x] **5 Verticais de Mercado**: `/imoveis`, `/veiculos`, `/servicos`, `/comercio`, `/vagas`.
- [x] **Página de Detalhes do Imóvel (`/imoveis/[id]`)**: Galeria de fotos, modal Lightbox, specs técnicas e sidebar de agendamento via WhatsApp.
- [x] **Sistema de Contas (`/perfil`)**: Perfil do Usuário com alternância de papéis (*Comum*, *Particular CPF*, *Pro CRECI*).
- [x] **Hotsite do Anunciante (`/anunciante/[id]`)**: Header centralizado, bio, links sociais e vitrine de anúncios.

---

## 🟢 P0 — Infraestrutura Crítica & Operacionalização (CONCLUÍDO)
- [x] **P0.1 Persistência de Dados (Supabase PostgreSQL)**: Modelagem relacional (`DATA_MODEL.md`) com CRUD real de anúncios e perfis.
- [x] **P0.2 Pipeline de Mídia & Upload**: Integração com Supabase Storage para upload de fotos com conversão automática WebP.
- [x] **P0.3 Motor de Busca Acelerado (Typesense)**: Indexação vetorial acelerada para buscas híbridas por palavra-chave, bairro e categoria em < 50ms.
- [x] **P0.4 Autenticação & Validação (WhatsApp/SMS OTP)**: Login sem senha e validação do selo de verificação de CPF (Particular) e CRECI (Pro).

---

## 🟢 P1 — Ferramentas de Conversão & Operação de Anúncios (CONCLUÍDO)
- [x] **P1.1 Formulário Dinâmico de Publicação (`/anunciar`)**: Fluxo em 5 passos com seleção sóbria de categorias conforme `DESIGN.md`.
- [x] **P1.2 Simulador de Financiamento Habitacional (Caixa / VCA)**: Widget interativo para calcular parcela estimada de imóveis com disparo via WhatsApp.
- [x] **P1.3 Comparador Tabela FIPE Aprofundado**: Ficha de veículos com desvalorização e destaque visual abaixo da FIPE.
- [x] **P1.4 Dashboard Analítico Conquista Pro**: Relatório de visualizações e origem de leads no WhatsApp por bairro em `/perfil`.

---

## 🟡 P2 — Inovação Hiperlocal & Escala Regional (EM ANDAMENTO)
> **Foco**: Diferenciais competitivos exclusivos que garantem dominância sobre marketplaces nacionais.

- [ ] **P2.1 Mural de Pedidos ("Procuro em VCA" - `/demandas`)**: Mural público onde moradores solicitam produtos/serviços/imóveis e anunciantes Pro respondem no WhatsApp.
- [ ] **P2.2 Gerador de Currículo Rápido (`/vagas`)**: Formatação de mini-currículo qualificado enviado diretamente ao contratante.
- [ ] **P2.3 Inteligência de Mercado / Valorização por Bairro (`/inteligencia-vca`)**: Painel público de tendência de preço por m² e mídias nos bairros de Vitória da Conquista.
