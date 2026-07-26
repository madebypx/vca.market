# CURRENT_SPEC.md — Sprint P2: Inovação Hiperlocal & Escala Regional

## Active task
Inovação Hiperlocal & Escala Regional (P2.1 a P2.3)

## Goal
Implementar funcionalidades exclusivas de diferenciação regional que garantem dominância sobre marketplaces genéricos nacionais: o Mural de Pedidos Abertos ("Procuro em VCA" em `/demandas`), o Gerador de Mini-Currículo Direto via WhatsApp para a vertical `/vagas` e o Painel de Inteligência de Mercado por Bairro (`/inteligencia-vca`).

## Scope

### 1. P2.1 — Mural de Pedidos Abertos ("Procuro em VCA" - `/demandas`)
- Rota pública `/demandas` onde compradores/moradores publicam solicitações de busca (ex: *"Procuro casa para alugar no Candeias até R$ 2.000"*, *"Preciso de técnico de geladeira no Bairro Brasil para hoje"*).
- Interface de cartões compactos com tags por bairro de Conquista, orçamento estimado e data de expiração.
- Ação *"Atender Pedido via WhatsApp"* para anunciantes e prestadores qualificados.
- Modal de criação rápida de demanda com 3 campos simples.

### 2. P2.2 — Gerador de Currículo Rápido (`/vagas`)
- Modal interativo na listagem e detalhe de vagas para candidatos criarem um mini-currículo padronizado.
- Geração automática de texto formatado e estruturado para envio direto no WhatsApp do recrutador/empresa.

### 3. P2.3 — Inteligência de Mercado / Valorização por Bairro (`/inteligencia-vca`)
- Página pública de analytics regional exibindo valores médios do m² imobiliário, variação FIPE de veículos por bairro e categorias de maior demanda em Vitória da Conquista.

## Acceptance criteria
- Rota `/demandas` permitindo a criação e visualização de pedidos de compra/contratação por bairro em VCA.
- Envio de candidatura formatada com currículo via WhatsApp na vertical de `/vagas`.
- Painel `/inteligencia-vca` renderizando gráficos e dados comparativos de bairros.
- `npm run build` compilando sem erros de TypeScript ou lints.

## Out of scope nesta Sprint
- Pagamento automático de comissão por lead gerado no mural de demandas (gerenciamento direto via contato profissional).

## Deliverables
- Rota `/app/demandas/page.tsx` e componentes em `src/components/demandas/`.
- Componente `CurriculoQuickGeneratorModal.tsx` em `src/components/vagas/`.
- Rota `/app/inteligencia-vca/page.tsx` e estatísticas em `src/components/inteligencia/`.
