---
name: start
description: Inicializa uma nova sessão conforme as regras do PXOS, lendo o contexto antes de qualquer execução.
---
# PXOS /start Workflow

Quando o usuário invocar este skill (ex: `/start`):
1. **Discover**: Leia imediatamente os arquivos principais da fundação do PXOS presentes na raiz do projeto (como `.ai/AI_BASE.md`, `.ai/PROJECT_CONTEXT.md`, `.ai/CURRENT_SPEC.md` e `.ai/DESIGN.md`).
2. **Halt**: Não sugira nem implemente nenhum código ainda.
3. **Report**: Responda com um breve sumário do contexto carregado e pergunte qual é a meta da sessão atual.
