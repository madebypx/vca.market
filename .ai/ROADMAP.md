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
[ P1: Ferramentas de Conversão & Operação de Anúncios ] (EM ANDAMENTO)
   ├── P1.1 Formulario Dinâmico de Publicação & Gestão (`/anunciar`)
   ├── P1.2 Simulador de Financiamento Habitacional (Caixa / SFH VCA)
   ├── P1.3 Comparador Avançado Tabela FIPE para Veículos
   └── P1.4 Dashboard Analítico de Leads Conquista Pro

                   │
                   ▼
[ P2: Inovação Hiperlocal & Escala Regional ]
  ├── P2.1 "Pedido Aberto em VCA" (Mural de Demandas Locais)
  ├── P2.2 PWA & Notificações Push de Leads no Celular
  └── P2.3 Mapa de Calor de Valorização por Bairro de VCA
```

---

## 🟢 Etapa Concluída: Frontend Micro-UX & Shell Universal
- [x] **Universal Shell**: Header com filtro por bairros de VCA, busca global e Mobile Dock.
- [x] **5 Verticais de Mercado**: `/imoveis`, `/veiculos`, `/servicos`, `/comercio`, `/vagas`.
- [x] **Página de Detalhes do Imóvel (`/imoveis/[id]`)**: Galeria de fotos, modal Lightbox, specs técnicas e sidebar de agendamento via WhatsApp.
- [x] **Sistema de Contas (`/perfil`)**: Perfil do Usuário com alternância de papéis (*Comum*, *Particular CPF*, *Pro CRECI*).
- [x] **Hotsite do Anunciante (`/anunciante/[id]`)**: Header centralizado, bio, links sociais e vitrine de anúncios.

---

## 🔴 P0 — Infraestrutura Crítica & Operacionalização (EM ANDAMENTO)
> **Foco**: Migração de dados em mock para persistência real em banco de dados, storage de mídia, busca acelerada e autenticação.

- [ ] **P0.1 Persistência de Dados (Supabase PostgreSQL)**: Modelagem relacional (`DATA_MODEL.md`) com Prisma/Kysely para CRUD real de anúncios e perfis.
- [ ] **P0.2 Pipeline de Mídia & Upload**: Integração com Supabase Storage para upload de fotos com conversão automática WebP.
- [ ] **P0.3 Motor de Busca Acelerado (Typesense)**: Indexação vetorial acelerada para buscas híbridas por palavra-chave, bairro e categoria em < 50ms.
- [ ] **P0.4 Autenticação & Validação (WhatsApp/SMS OTP)**: Login sem senha e validação do selo de verificação de CPF (Particular) e CRECI (Pro).

---

## 🟡 P1 — Ferramentas de Conversão & Valor Agregado B2B/C2C
> **Foco**: Aumentar a taxa de conversão em leads no WhatsApp e provar valor para assinantes Conquista Pro.

- [ ] **P1.1 Simulador de Financiamento Habitacional (Caixa / VCA)**: Widget interativo para calcular parcela estimada de imóveis.
- [ ] **P1.2 Comparador Tabela FIPE Aprofundado**: Ficha de veículos com desvalorização histórica e variação frente à FIPE local.
- [ ] **P1.3 Gerador de Currículo Rápido (`/vagas`)**: Formatação de mini-currículo enviado diretamente no WhatsApp do contratante.
- [ ] **P1.4 Dashboard Analítico Conquista Pro**: Relatório mensal de visualizações, horários de pico e cliques de WhatsApp por bairro.

---

## 🟢 P2 — Inovação Hiperlocal & Escala Regional
> **Foco**: Diferenciais competitivos exclusivos que garantem dominância sobre marketplaces nacionais.

- [ ] **P2.1 Mural de Pedidos ("Procuro em VCA")**: Moral de demandas abertas onde moradores solicitam serviços/produtos e profissionais Pro respondem.
- [ ] **P2.2 PWA & Notificações Push**: Instalação na tela inicial do celular e push instantâneo ao receber novos leads.
- [ ] **P2.3 Inteligência de Mercado / Valorização por Bairro**: Painel público de tendência de preço por $m^2$ nos bairros de Vitória da Conquista.

