---
name: plan
description: Planeja as modificações detalhadamente antes de implementar qualquer código complexo, conforme PXOS.
---
# PXOS /plan Workflow

Quando o usuário invocar este skill (ex: `/plan`):
1. **Analyze**: Verifique os requisitos ativos no arquivo `.ai/CURRENT_SPEC.md`.
2. **Structure**: Defina o que vai mudar, quais arquivos serão afetados, os principais riscos e como o sucesso será validado.
3. **Propose**: Apresente o plano de forma estruturada.
4. **Halt**: Pare e aguarde a aprovação explícita do usuário antes de iniciar a fase de execução.
