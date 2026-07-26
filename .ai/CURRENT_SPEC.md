# CURRENT_SPEC.md — Sprint P1.1 (Refinement): Formulario Multi-Step & Category Cards 3D

## Active task
Redesign da Página de Criação de Anúncios (`/anunciar`) com Formulário Multi-Step e Cards de Categoria 3D Pop-Out.

## Goal
Elevar a experiência visual e a taxa de conversão da página de anúncio, transformando o formulário em um fluxo guiado em etapas (Multi-Step com "Próximo" / "Voltar") e introduzindo cards 3D interativos para a seleção de categorias com efeito pop-out ao passar o mouse (hover) e em estado ativo no mobile.

## Scope

### 1. Cards 3D de Seleção de Categoria (Passo 1)
- Grid responsivo de 5 cards (Imóveis 🏢, Veículos 🚗, Serviços 🛠️, Comércio 🛍️, Vagas 💼).
- Efeito CSS 3D Pop-Out (*Layered Perspective Lift*): ao passar o mouse (hover), o ícone/ilustração 3D da categoria extrapola a borda superior do card (`overflow-visible`, `translateZ` / `translateY` e `scale`), acompanhado de sombra dinâmica e iluminação sutil.
- Adaptação Mobile: em telas touch, o efeito 3D é ativado ao selecionar/tocar no card, com destaque visual e feedback tátil imediato.

### 2. Fluxo Guiado Multi-Step (5 Passos)
- **Passo 1 — Categoria**: Escolha com os cards 3D interativos.
- **Passo 2 — Mídia**: Upload de fotos com conversão WebP (`ImageUploader.tsx`).
- **Passo 3 — Dados Básicos**: Título do anúncio, preço e escolha do bairro de Vitória da Conquista.
- **Passo 4 — Detalhes Técnicos**: Campos dinâmicos específicos da categoria selecionada.
- **Passo 5 — Revisão & Publicação**: Pré-visualização do card completo antes do salvamento final no Supabase.
- Barra de progresso visual no topo indicando a etapa atual.
- Navegação entre passos com botões "Voltar" e "Avançar".

## Acceptance criteria
- Efeito 3D Pop-Out rodando suavemente a 60fps via aceleração por GPU (CSS puramente otimizado sem bibliotecas pesadas).
- Formulário dividido em 5 passos com navegação "Avançar" / "Voltar" funcional.
- Responsividade total: experiência impecável tanto no Desktop quanto no Mobile.
- Transição fluida entre etapas com salvamento do estado do formulário.
- `npm run build` compilando sem avisos ou erros de TypeScript.

## Deliverables
- Componente `Category3DCard.tsx` em `src/components/anunciar/`.
- Componente `MultiStepWizard.tsx` e atualizações no formulário `CreateListingForm.tsx`.
