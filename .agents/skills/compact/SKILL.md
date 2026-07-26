---
name: compact
description: Resume o contexto e salva as decisões para facilitar sessões futuras, prevenindo poluição da memória.
---
# PXOS /compact Workflow

Quando o usuário invocar este skill (ex: `/compact`):
1. **Summarize**: Gere um resumo conciso sobre o que foi alterado, as decisões tomadas, os problemas em aberto e os próximos passos.
2. **Log Decisions**: Se novas decisões de arquitetura ou produto foram estabelecidas, atualize o arquivo `.ai/DECISION_LOG.md` imediatamente.
3. **Clean Handover**: Entregue uma mensagem clara para orientar a próxima sessão (ou o próximo agente) sobre de onde recomeçar.
