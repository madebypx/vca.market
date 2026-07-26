# CURRENT_SPEC.md — FASE 6 / Sprint P4: Gamificação, Reputação & Segurança Anti-Fraude

## Active task
Gamificação, Reputação & Segurança Anti-Fraude (P4.1 a P4.4) — Etapa Final do MVP

## Goal
Implementar o sistema de avaliações auditadas dos vendedores de Vitória da Conquista, badges gamificados de reputação e confiança (*Morador Bronze/Prata/Ouro*, *Vendedor Recomendado*), botão *"Denunciar Anúncio"* com modal de moderação anti-fraude e checklist final para deploy do MVP de produção.

## Scope

### 1. P4.1 — Sistema de Avaliações Auditadas (`/anunciante/[id]/avaliar`)
- Modal de avaliação por estrelas (1 a 5) com depoimento escrito e tag de negociação confirmada via WhatsApp.
- Exibição de média calculada de estrelas no Hotsite do Anunciante (`/anunciante/[id]`) e nos cards das listagens.

### 2. P4.2 — Gamificação & Badges de Confiança VCA
- Pontuação dinâmica de reputação baseada em: tempo de conta, verificação de documento (CPF/CRECI), média de avaliações e anúncios ativos.
- Badges visuais: *★ Vendedor Ouro*, *Morador Verificado*, *Resposta em < 15 min*.

### 3. P4.3 — Camada de Segurança & Denúncia Anti-Fraude
- Botão *"Denunciar Anúncio"* presente em todos os anúncios e páginas de detalhe.
- Modal de denúncia com categorias de motivo (ex: *Preço Irrealista/Golpe*, *Anúncio Duplicado*, *Telefone Falso*, *Produto Vendido*).

### 4. P4.4 — Readiness Checklist & Produção
- Auditoria final de build e tipos.

## Acceptance criteria
- Modal de avaliação enviando depoimento e atualizando média no perfil do anunciante.
- Exibição de badges de reputação em todas as 5 verticais de mercado.
- Modal de denúncia operacional disparando alerta de segurança.
- `npm run build` compilando sem erros de TypeScript.

## Out of scope nesta Sprint
- Moderação por inteligência artificial em tempo real (utilização de moderação baseada em denúncias de usuários e regras de validação).

## Deliverables
- `src/components/anunciante/ReviewModal.tsx`
- `src/components/common/TrustBadge.tsx`
- `src/components/common/ReportListingModal.tsx`
- Atualização em `src/app/anunciante/[id]/page.tsx` e cards das verticais.
