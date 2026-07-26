# Conquista Market (`vca.market`)

> **O Centro de Gravidade Econômico Digital de Vitória da Conquista — BA**

O **Conquista Market** (`vca.market`) é um ecossistema digital de comércio, serviços, imóveis, veículos e vagas de emprego projetado especificamente para Vitória da Conquista e o Sudoeste Baiano. A plataforma combina uma experiência visual customizada por categoria (*Verticalized Micro-UX*) com um motor de conversão zero-fricção via **WhatsApp Lead Dispatcher** e um **Sistema de Níveis de Confiança (Tiered Trust System)**.

---

## 🏛️ Governança & Arquitetura PXOS

Este projeto é estritamente desenvolvido e operado sob as diretrizes do **PXOS Framework** (sistema minimalista de governança para desenvolvimento assistido por IA).

Todos os documentos normativos de produto, arquitetura, design e especificação estão centralizados no diretório [`.ai/`](file://./.ai/):

* [`.ai/AI_BASE.md`](file://./.ai/AI_BASE.md) — Regras de operação do agente IA.
* [`.ai/PROJECT_CONTEXT.md`](file://./.ai/PROJECT_CONTEXT.md) — Visão do produto, stack tecnológica e pilares da plataforma.
* [`.ai/DESIGN.md`](file://./.ai/DESIGN.md) — Governança visual, tokens CSS, paleta semântica e regras de Micro-UX.
* [`.ai/CURRENT_SPEC.md`](file://./.ai/CURRENT_SPEC.md) — Especificação ativa do sprint atual.
* [`.ai/ROADMAP.md`](file://./.ai/ROADMAP.md) — Roadmap de evolução técnica priorizado (P0, P1, P2).
* [`.ai/USER_ROLES_PERMISSIONS.md`](file://./.ai/USER_ROLES_PERMISSIONS.md) — Sistema de níveis de contas (Usuário Comum, Particular CPF, Conquista Pro CRECI/CNPJ).
* [`.ai/DATA_MODEL.md`](file://./.ai/DATA_MODEL.md) — Schemas relacionais e modelagem de entidades.
* [`.ai/ARCHITECTURE.md`](file://./.ai/ARCHITECTURE.md) — Diagrama de camadas e WhatsApp Lead Dispatcher.
* [`.ai/DECISION_LOG.md`](file://./.ai/DECISION_LOG.md) — Histórico de decisões duráveis de produto e engenharia.

---

## 🚀 Tech Stack

* **Framework Web**: Next.js 16 (App Router / React Server Components).
* **Linguagem**: TypeScript.
* **Estilização**: TailwindCSS v4 com tokens semânticos (`--color-primary`, `--color-accent-green`, `--color-trust-blue`, `--color-badge-gold`).
* **Backend & DB (Planejado P0)**: Supabase PostgreSQL + Typesense (Busca Vetorial & Híbrida).

---

## 🛠️ Execução Local

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Compilar para produção / checagem de tipos
npm run build
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a plataforma.

