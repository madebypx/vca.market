---
name: review
description: Revisa as modificações realizadas garantindo qualidade e conformidade com as regras de design e arquitetura do projeto.
---
# PXOS /review Workflow

Quando o usuário invocar este skill (ex: `/review`):
1. **Validate**: Verifique se os critérios de aceitação foram cumpridos e os casos de borda cobertos.
2. **Audit**: Confirme se o código ou design gerado respeita o `.ai/DESIGN.md` e não introduz complexidade desnecessária ou overengineering.
3. **Report**: Relate quaisquer desvios encontrados ou confirme que a tarefa está 100% aderente ao PXOS e concluída.
