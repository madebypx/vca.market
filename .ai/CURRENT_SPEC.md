# CURRENT_SPEC.md

## Active task
Vertical de Imóveis (`/imoveis`) — Phase 2

## Goal
Implementar a página da vertical de Imóveis (`/imoveis`) em Vitória da Conquista com visualização em Split View (Mapa + Lista de Imóveis), barra de filtros técnicos específicos do setor ($m^2$, quartos, vagas, aluguel/venda) e destaque para o selo de verificação CRECI-BA.

## Scope
1. **Layout Split View & Alternador Mobile**:
   - Desktop: Painel esquerdo com a lista de imóveis + Painel direito fixo com mapa simulado de VCA (marcadores por bairro).
   - Mobile: Botão flutuante para alternar entre `Lista` e `Mapa`.

2. **Barra de Filtros Técnicos de Imóveis**:
   - Filtro por Tipo (Apartamento, Casa, Terreno, Comercial).
   - Filtro por Transação (Venda / Aluguel).
   - Filtro por Bairro de VCA (Candeias, Recreio, Boa Vista, Alto Maron, etc.).
   - Slider/Input de Área Útil ($m^2$) e Faixa de Preço.
   - Filtro de Quartos (1+, 2+, 3+, 4+) e Vagas.

3. **Card de Anúncio Imobiliário (Micro-UX)**:
   - Destaque para Área útil ($m^2$), Dormitórios, Banheiros e Vagas.
   - Tag de Bairro e indicador de Aluguel vs Venda.
   - Selo Prata/Platinum para "Imobiliária Credenciada" ou "Corretor com CRECI".
   - CTA direto: *"Agendar Visita no WhatsApp"*.

4. **Dados Demonstrativos Contextualizados (Mock)**:
   - Coleção de imóveis reais em bairros de Vitória da Conquista com coordenadas simuladas no mapa.

## Acceptance criteria
- Respeitar rigorosamente o `.ai/DESIGN.md` (regras específicas da categoria Imóveis).
- O mapa e a lista sincronizam ao passar o mouse sobre o imóvel ou aplicar filtros.
- Responsividade total com alternador Lista/Mapa no celular.
- Filtros técnicos dinâmicos sem recarregamento de página.

## Out of scope
- Integração real com API de Mapas paga (usaremos Mapbox/Leaflet com mapas abertos ou componente mockup interativo de alta qualidade).
- Conexão final com banco Supabase (usaremos mock estruturado conforme o schema de `DATA_MODEL.md`).

## Deliverables
- Rota `/imoveis` com Split View.
- Componentes de filtros técnicos, card de imóvel e container de mapa.
- Documento `.ai/CURRENT_SPEC.md` atualizado.
