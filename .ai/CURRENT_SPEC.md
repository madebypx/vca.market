# CURRENT_SPEC.md — Sprint P0: Infraestrutura Crítica & Operacionalização

## Active task
Infraestrutura Fundamental & Operacionalização de Dados (P0.1 a P0.4)

## Goal
Migrar o Conquista Market (`vca.market`) de um protótipo com dados estáticos mockados para uma plataforma funcional pronta para produção, implementando persistência relacional de dados (Supabase PostgreSQL), pipeline de upload e conversão de mídia em WebP (Supabase Storage), motor de busca vetorial/híbrida em tempo real (Typesense) e autenticação de contas com validação por WhatsApp/SMS OTP (P0.1 a P0.4).

## Scope

### 1. P0.1 — Persistência de Dados (Supabase PostgreSQL & ORM/Query Builder)
- Conexão e configuração do cliente Supabase no Next.js App Router (Server Actions / Route Handlers).
- Modelagem de tabelas relacionais conforme [`.ai/DATA_MODEL.md`](file://./.ai/DATA_MODEL.md): `users`, `profiles`, `listings` (com coluna `jsonb` flexível por vertical), `leads` e `favorites`.
- Substituição dos arquivos `mock*.ts` por consultas assíncronas ao banco de dados com tratamento de cache e revalidação do Next.js (`revalidatePath` / `revalidateTag`).

### 2. P0.2 — Pipeline de Upload & Processamento de Imagens (Supabase Storage)
- Criação dos buckets de storage: `listing-media` (público) e `user-avatars` (público).
- Componente de Upload de Imagens com suporte a drag-and-drop no navegador/celular.
- Compressão e conversão automática de imagens para WebP no lado do cliente antes do upload para otimização de banda.

### 3. P0.3 — Motor de Busca Vetorial & Híbrida em Tempo Real (Typesense)
- Configuração do schema de indexação no Typesense para imóveis, veículos, serviços, produtos e vagas.
- Sincronização automática de dados do PostgreSQL para o Typesense via Webhooks / Server Actions no evento de inserção/edição.
- Endpoint `/api/search` retornando auto-complete e resultados filtrados por bairro de Vitória da Conquista em < 50ms.

### 4. P0.4 — Autenticação de Contas & SMS/WhatsApp OTP
- Autenticação sem senha via Supabase Auth (magic link / OTP por WhatsApp/SMS).
- Fluxo de validação de CPF para contas de *Anunciantes Particulares* e validação de registro profissional (CRECI-BA) para contas *Conquista Pro*.
- Proteção de rotas privadas (`/perfil`, `/anunciar`) através de Middleware do Next.js.

## Acceptance criteria
- Inserção, edição e exclusão real de anúncios persistida no banco Supabase.
- Upload funcional de imagens via celular/desktop com geração de URLs públicas otimizadas.
- Busca em tempo real por palavra-chave e filtro por bairro respondendo em menos de 50ms via Typesense.
- Login persistente por sessão de usuário com proteção de middleware.
- Zero erros de TypeScript (`npm run build` deve compilar sem avisos de tipagem).

## Out of scope nesta Sprint
- Criação de novas rotas ou componentes puramente visuais no frontend (todas as views já foram entregues no MVP).
- Gateway de pagamento por cartão de crédito (a cobrança de assinaturas Pro será gerenciada manualmente no MVP inicial).

## Deliverables
- Clientes Supabase & Typesense configurados em `src/lib/supabase/` e `src/lib/typesense/`.
- Server Actions e APIs de backend em `src/app/actions/` e `src/app/api/`.
- Componente de upload reutilizável `src/components/common/ImageUploader.tsx`.
- Middleware de rotas protegidas em `src/middleware.ts`.
