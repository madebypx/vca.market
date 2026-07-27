# CURRENT_SPEC.md — Busca Preditiva Instantânea & Central Admin de Moderação Anti-Fraude

## Active task
Implementação da Busca Preditiva Instantânea (`/api/search` + `HeaderSearchModal.tsx`) e da Central Admin de Moderação Anti-Fraude (`/admin/moderacao`)

## Goal
Elevar a capacidade de busca da plataforma com autocompletar inteligente que responde em tempo real (< 50ms) entre todas as 5 verticais de Vitória da Conquista, além de disponibilizar o painel administrativo de moderação para tratamento de denúncias de anúncios suspeitos e auditoria de selos (CPF/CRECI).

## Scope

### 1. Busca Preditiva Instantânea (`HeaderSearchModal.tsx` & `/api/search`)
- Modal de pesquisa acionado pela barra global no Header.
- Autocompletar com sugestões agrupadas por vertical (Imóveis, Veículos, Serviços, Comércio, Vagas) e por bairros (Candeias, Recreio, Centro, Bairro Brasil, etc.).
- Filtro imediato por tipo de transação (Venda vs Aluguel).

### 2. Central Admin de Moderação Anti-Fraude (`/admin/moderacao`)
- Painel administrativo reservado para moderadores do Conquista Market.
- Lista de anúncios denunciados por moradores com detalhes de motivo (*Preço Golpe*, *Telefone Inexistente*, *Dados Falsos*).
- Ações rápidas: *"Manter Anúncio"*, *"Suspender Anúncio"* e *"Bloquear Anunciante"*.
- Fila de aprovação de selos de verificação de documentos (CPF e CRECI-BA).

## Acceptance criteria
- Modal de busca operacional no Header respondendo a pesquisas em tempo real.
- Rota `/admin/moderacao` permitindo gerenciar denúncias e alterar status de listagens.
- `npm run build` compilando 100% limpo com 0 erros de TypeScript.

## Out of scope nesta Sprint
- Cobrança automatizada de planos pagos via gateway de cartão de crédito.

## Deliverables
- `src/components/layout/HeaderSearchModal.tsx`
- `src/app/api/search/route.ts`
- `src/app/admin/moderacao/page.tsx`
