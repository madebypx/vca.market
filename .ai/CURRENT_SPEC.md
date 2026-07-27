# CURRENT_SPEC.md — Ecossistema Completo de Conta, Dropdown do Header & Central de Ajuda

## Active task
Implementação do Dropdown de Perfil do Header (`HeaderProfileDropdown.tsx`), Modal de Troca de Conta (`SwitchAccountModal.tsx`) e Central de Ajuda & Suporte VCA (`/ajuda`)

## Goal
Proporcionar uma experiência de gerenciamento de conta fluida e de alto nível, permitindo que os moradores e anunciantes de Vitória da Conquista acessem rapidamente seu painel, configurações, troca de perfil, suporte e encerramento de sessão direto do cabeçalho.

## Scope

### 1. Menu Dropdown de Perfil no Header (`HeaderProfileDropdown.tsx`)
- Substituição do ícone simples no `Header.tsx` por um dropdown interativo de avatar.
- Exibição de foto, nome do usuário e badge de status (*Morador Verificado* vs *Conquista Pro*).
- Opções do menu:
  - `📊 Meu Painel & Anúncios` (`/perfil`)
  - `⚙️ Configurações da Conta` (`/perfil/configuracoes`)
  - `👥 Trocar de Conta` (Abre o `SwitchAccountModal`)
  - `❓ Central de Ajuda & FAQ VCA` (`/ajuda`)
  - `🛡️ Painel Admin` (`/admin/moderacao` - visível para gestores)
  - `🚪 Sair da Conta` (Aciona o encerramento de sessão)

### 2. Modal de Troca Rápida de Conta (`SwitchAccountModal.tsx`)
- Modal permitindo alternar entre perfis salvos na sessão local (ex: *Perfil Particular* vs *Perfil Imobiliário Pro*) ou entrar com outra conta.

### 3. Central de Ajuda & FAQ VCA (`/ajuda`)
- Página com perguntas frequentes sobre publicação de anúncios em Conquista, selos de verificação de documentos (CPF e CRECI), segurança anti-fraude e suporte direto via WhatsApp.

## Acceptance criteria
- Dropdown de perfil responsivo no Header com fecho ao clicar fora (`outside click`).
- Modal de troca de conta funcional permitindo simulação e login com novos perfis.
- Rota `/ajuda` operacional com FAQ expansível.
- `npm run build` compilando 100% limpo com 0 erros de TypeScript.

## Out of scope nesta Sprint
- Integração com provedor de Single Sign-On terceirizado (Google/Facebook SDK).

## Deliverables
- `src/components/layout/HeaderProfileDropdown.tsx`
- `src/components/perfil/SwitchAccountModal.tsx`
- `src/app/ajuda/page.tsx`
- `src/components/layout/Header.tsx` (atualizado)
