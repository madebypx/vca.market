---
name: spec
description: Define ou atualiza as especificações da tarefa atual antes do início do planejamento ou desenvolvimento.
---
# PXOS /spec Workflow

Quando o usuário invocar este skill (ex: `/spec`):
1. **Clarify**: Pergunte ao usuário pelos detalhes e limites da nova funcionalidade ou tarefa, caso não estejam claros.
2. **Document**: Atualize o arquivo `.ai/CURRENT_SPEC.md` de forma estruturada contendo a tarefa ativa, os requisitos e restrições.
3. **Confirm**: Confirme com o usuário se a especificação está correta antes de proceder para o `/plan` ou para a codificação.
