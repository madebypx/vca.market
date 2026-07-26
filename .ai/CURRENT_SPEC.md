# CURRENT_SPEC.md

## Active task
Vertical de Vagas de Emprego (`/vagas`) — Phase 2

## Goal
Implementar a rota da vertical de Vagas de Emprego (`/vagas`) em Vitória da Conquista com visualização em Lista Qualificada de Oportunidades, destaque para modelo de trabalho (Presencial/Híbrido), faixa salarial, tipo de contrato (CLT/PJ/Estágio), selo de Empresa Comprovada em VCA e envio direto de currículo / candidatura via WhatsApp.

## Scope
1. **Lista Qualificada de Oportunidades Locais**:
   - Layout em Lista Limpa e Compacta otimizado para rápida leitura de vagas de emprego na cidade.
   - Filtros por modelo de trabalho, regime de contratação e área de atuação.

2. **Barra de Filtros de Empregos**:
   - Filtro por Área de Atuação (Comercial/Vendas, Atendimento/Caixa, TI/Tecnologia, Administrativo, Saúde, Logística/Entrega).
   - Filtro por Modelo de Trabalho (Presencial, Híbrido, Remoto).
   - Filtro por Tipo de Contrato (CLT, PJ, Estágio, Meio Período).
   - Checkbox: Apenas *Empresas Verificadas em VCA*.

3. **Card da Vaga (Micro-UX de Empregos conforme `.ai/DESIGN.md`)**:
   - Badge de Modelo de Trabalho (*Presencial - Centro*, *Híbrido*).
   - Spec Pill com faixa salarial (ex: `R$ 2.000 - R$ 3.000`), contrato (`CLT`) e carga horária.
   - Tag de Bairro de VCA + Selo Ouro "Empresa Verificada".
   - CTA direto: *"Enviar Currículo / Candidatar-se no WhatsApp"*.

4. **Dados Demonstrativos Contextualizados (Mock)**:
   - Oportunidades reais oferecidas por empresas, lojas e escritórios de Vitória da Conquista.

## Acceptance criteria
- Respeitar estritamente as regras de Micro-UX de Empregos do `.ai/DESIGN.md`.
- Leitura rápida de faixa salarial e requisitos básicos.
- Filtros de vagas dinâmicos em tempo real sem recarregamento da página.
- Responsividade completa em celulares, tablets e desktops.

## Out of scope
- Sistema completo de ATS/triagem interna de currículos (o envio de CV/candidatura ocorre diretamente no WhatsApp do RH/empresa no MVP).
- Conexão de formulários complexos de histórico profissional (usaremos dados mockados estruturados conforme `DATA_MODEL.md`).

## Deliverables
- Rota `/vagas` com Lista Qualificada de Oportunidades.
- Componentes de filtro de empregos, card de vaga com especificações salariais e CTA de envio de CV.
- Documento `.ai/CURRENT_SPEC.md` atualizado.
