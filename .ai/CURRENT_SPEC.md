# CURRENT_SPEC.md

## Active task
Vertical de Serviços & Profissionais (`/servicos`) — Phase 2

## Goal
Implementar a rota da vertical de Serviços (`/servicos`) em Vitória da Conquista com foco no portfólio visual do prestador, média de avaliações com estrelas de clientes locais, tag de "Atende em Domicílio", filtros por especialidade e solicitação de orçamento via WhatsApp.

## Scope
1. **Grid de Portfólio de Serviços**:
   - Galeria no estilo portfólio destacando fotos de trabalhos concluídos anteriormente em Vitória da Conquista.
   - Apresentação da nota média (estrelas) e quantidade de avaliações validadas.

2. **Barra de Filtros por Especialidade**:
   - Filtro por Especialidade (Eletricista, Refrigeração/Ar Condicionado, Pintor, Técnico de Informática, Design/Marketing, Diarista/Limpeza, etc.).
   - Checkbox: Apenas quem *Atende em Domicílio* em VCA.
   - Checkbox: Apenas com *Orçamento Grátis*.
   - Filtro por Bairro base do prestador.

3. **Card do Prestador (Micro-UX de Serviços conforme `.ai/DESIGN.md`)**:
   - Estrelas de avaliação com quantidade de clientes (ex: `★ 4.9 (42 avaliações)`).
   - Spec Pill com especialidade, modelo de orçamento e indicação de atendimento residencial.
   - Tag de Bairro de VCA + Selo "Morador Verificado" ou "Empresa de Serviços".
   - CTA direto: *"Solicitar Orçamento Grátis no WhatsApp"*.

4. **Dados Demonstrativos Contextualizados (Mock)**:
   - Coleção de autônomos e empresas de serviços de Vitória da Conquista com fotos reais de serviços prestados.

## Acceptance criteria
- Respeitar estritamente as regras de Micro-UX de Serviços do `.ai/DESIGN.md`.
- Destaque para avaliações e selo de verificação local.
- Filtros por especialidade dinâmicos sem recarregamento da página.
- Responsividade completa em celulares, tablets e desktops.

## Out of scope
- Sistema completo de agendamento por calendário interativo (o agendamento/orçamento ocorre via WhatsApp no MVP).
- Cadastro/avaliação pós-serviço em tempo real (usaremos dados mockados estruturados conforme `DATA_MODEL.md`).

## Deliverables
- Rota `/servicos` com Grid de Portfólio.
- Componentes de filtro por especialidade, card de prestador com avaliações e CTA de orçamento.
- Documento `.ai/CURRENT_SPEC.md` atualizado.
