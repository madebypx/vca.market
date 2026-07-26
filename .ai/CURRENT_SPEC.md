# CURRENT_SPEC.md

## Active task
Vertical de Veículos (`/veiculos`) — Phase 2

## Goal
Implementar a rota da vertical de Veículos (`/veiculos`) em Vitória da Conquista com visualização em Grid de Cards com alta densidade de informação técnica, comparador em relação à Tabela FIPE (ex: *"R$ 3.000 abaixo da FIPE"*), filtros avançados por Marca, Ano, Km, Câmbio e Combustível, além de destacar o selo de "Laudo Cautelar Aprovado".

## Scope
1. **Grid de Veículos Responsivo**:
   - Layout em Grid de Cards otimizado para comparação rápida de carros, motos e utilitários.
   - Filtros laterais (Desktop) ou gaveta de filtros slide-over (Mobile).

2. **Barra de Filtros Técnicos de Veículos**:
   - Filtro por Tipo (Carro, Moto, Utilitário/Caminhão).
   - Filtro por Marca / Modelo (Toyota, Volkswagen, Chevrolet, Fiat, Honda, etc.).
   - Filtro por Faixa de Ano (ex: 2018 - 2024).
   - Filtro por Câmbio (Automático / Manual) e Combustível (Flex, Gasolina, Diesel, Elétrico).
   - Checkbox: Apenas com *Laudo Cautelar Aprovado* e Apenas *Abaixo da Tabela FIPE*.

3. **Card Automotivo (Micro-UX de Veículos conforme `.ai/DESIGN.md`)**:
   - Badge proeminente de Comparativo FIPE (ex: `R$ 2.500 abaixo da FIPE`).
   - Spec Pill com Ano/Modelo, Quilometragem (Km), Câmbio e Combustível.
   - Tag de Bairro de VCA e Selo de "Laudo Cautelar Aprovado" / Loja Física no Centro.
   - CTA direto: *"Falar com Vendedor / Simular no WhatsApp"*.

4. **Dados Demonstrativos Contextualizados (Mock)**:
   - Coleção de veículos reais de seminovos e particulares em Vitória da Conquista com valores FIPE simulados.

## Acceptance criteria
- Respeitar estritamente as regras de Micro-UX de Veículos do `.ai/DESIGN.md`.
- Cálculo/badge visual de diferença para a Tabela FIPE em destaque no card.
- Filtros dinâmicos em tempo real sem recarregamento da página.
- Responsividade completa em celulares, tablets e desktops.

## Out of scope
- Integração em tempo real via API remota da Tabela FIPE (usaremos valores FIPE de referência mockados no objeto de dados conforme `DATA_MODEL.md`).
- Simulação bancária real de financiamento (o CTA direciona para negociação/simulação via WhatsApp).

## Deliverables
- Rota `/veiculos` com Grid Responsivo.
- Componentes de filtros automotivos, card de veículo com badge FIPE e gaveta mobile.
- Documento `.ai/CURRENT_SPEC.md` atualizado.
