# CURRENT_SPEC.md

## Active task
Vertical de Comércio & Lojas Locais (`/comercio`) — Phase 2

## Goal
Implementar a rota da vertical de Comércio Local (`/comercio`) em Vitória da Conquista com visualização em Vitrine de Produtos e ofertas, indicação de disponibilidade para "Retirada no Centro/Bairro Brasil", filtro por condição (Novo vs Usado/Seminovo), loja física auditada e canal direto de vendas via WhatsApp da loja.

## Scope
1. **Vitrine e-Commerce de Produtos Locais**:
   - Layout em Grid de Ofertas otimizado para navegação rápida de eletrônicos, moda, casa e itens diversos.
   - Filtros por categoria de produto, estado do item (Novo/Usado) e polo comercial de VCA.

2. **Barra de Filtros de Comércio**:
   - Filtro por Categoria de Produto (Eletrônicos/Tech, Moda & Acessórios, Casa & Decoração, Esportes, Outros).
   - Filtro por Condição (Novo com Garantia vs Usado/Seminovo).
   - Checkbox: Apenas com *Retirada no Centro / Bairro Brasil*.
   - Checkbox: Apenas *Lojas Físicas Verificadas (CNPJ)*.

3. **Card de Produto Local (Micro-UX de Comércio conforme `.ai/DESIGN.md`)**:
   - Tag de Condição (Novo com Garantia / Usado).
   - Spec Pill com polo de retirada (*Retirada no Centro* / *Bairro Brasil* / *Entrega por Motoboy*).
   - Tag de Bairro de VCA + Selo Ouro "Empresa Conquistense" (Loja Física) ou Selo Prata (Vendedor Morador).
   - CTA direto: *"Comprar / Chamar no WhatsApp da Loja"*.

4. **Dados Demonstrativos Contextualizados (Mock)**:
   - Produtos e ofertas reais de lojistas do Centro, Bairro Brasil, Candeias e particulares em Conquista.

## Acceptance criteria
- Respeitar estritamente as regras de Micro-UX de Comércio do `.ai/DESIGN.md`.
- Destaque para retirada imediata e selo de loja física no Centro/Bairros.
- Filtros de produtos dinâmicos em tempo real.
- Responsividade completa em celulares, tablets e desktops.

## Out of scope
- Carrinho de compras tradicional com checkout por cartão (o fluxo de compra/negociação ocorre via WhatsApp e retirada local).
- Conexão de pagamento em tempo real (usaremos dados mockados estruturados conforme `DATA_MODEL.md`).

## Deliverables
- Rota `/comercio` com Vitrine de Produtos.
- Componentes de filtro de comércio, card de produto local com tags de retirada e CTA de vendas.
- Documento `.ai/CURRENT_SPEC.md` atualizado.
