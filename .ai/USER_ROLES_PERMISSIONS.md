# USER_ROLES_PERMISSIONS.md — Sistema de Níveis & Permissões no VCA Market

> **PXOS Governance Document**: Este documento define a hierarquia de contas, matriz de permissões, limites de publicação e selos de verificação para o ecossistema Conquista Market (`vca.market`).

---

## 1. Visão Geral dos Níveis de Conta

Para equilibrar **liquidez de anúncios** (alta oferta) e **confiança hiperlocal** em Vitória da Conquista, o VCA Market adota uma arquitetura em 3 níveis progressivos de conta:

```
[ Nível 1: Usuário Comum ] ➔ [ Nível 2: Anunciante Particular ] ➔ [ Nível 3: Conquista Pro (CRECI / CNPJ) ]
 (Buscador / Cliente)           (Pessoa Física CPF Auditado)         (Imobiliárias, Lojas & Profissionais)
```

---

## 2. Matriz de Níveis, Permissões e Funcionalidades

### 2.1 Nível 1: Usuário Comum (Consumidor / Buscador)
Destinado a cidadãos conquistenses que utilizam a plataforma para buscar imóveis, veículos, serviços e vagas de emprego.

* **Requisitos de Cadastro**: Nome completo + E-mail ou WhatsApp.
* **Badge / Identificação Visual**: Sem selo público (perfil leitor).
* **Funcionalidades & Permissões**:
  * ✅ Navegação completa em todas as verticais (`/imoveis`, `/veiculos`, `/servicos`, `/comercio`, `/vagas`).
  * ✅ Salvar anúncios e pesquisas na lista de **Favoritos**.
  * ✅ Envio direto de leads e agendamentos via **WhatsApp Lead Dispatcher**.
  * ✅ Alertas personalizados por bairro de Vitória da Conquista.
  * ❌ **Não pode publicar anúncios públicos**.

---

### 2.2 Nível 2: Anunciante Particular (Pessoa Física Auditada)
Destinado a proprietários diretos que desejam vender seu próprio imóvel, carro usado, item de comércio ou oferecer serviços ocasionais.

* **Requisitos de Cadastro**: Validação de CPF + Confirmação de número de WhatsApp (SMS/OTP) + Endereço residencial em VCA.
* **Badge / Identificação Visual**:
  * `👤 Particular Verificado (CPF Auditado)` em tom azul neutro.
* **Funcionalidades & Permissões**:
  * ✅ Todas as funcionalidades do Nível 1.
  * ✅ **Publicação Gratuita de Anúncios** com limite operacional:
    * *Imóveis*: Máximo de **1 anúncio ativo** por vez (evita especulação de corretores informais sem CRECI).
    * *Veículos*: Máximo de **1 anúncio ativo** por vez.
    * *Comércio / Serviços*: Até **3 anúncios ativos** por vez.
  * ✅ Painel básico de controle (*Meus Anúncios*: Editar, Pausar, Marcar como Vendido).
  * ❌ Sem estatísticas avançadas de cliques/conversão.
  * ❌ Anúncios com posicionamento padrão (abaixo dos destaques Pro).

---

### 2.3 Nível 3: Conquista Pro (Profissional Credenciado)
Destinado a Imobiliárias, Corretores autônomos credenciados (CRECI-BA), Lojas Físicas de veículos/comércio, Clínicas e Empresas contratantes de Vitória da Conquista.

* **Requisitos de Cadastro**: Validação de CNPJ ou Registro Profissional (ex: **CRECI-BA** para imóveis, **COREN-BA** para saúde, Loja Física Auditada no Centro/Candeias/Brasil).
* **Badge / Identificação Visual**:
  * `✓ Imobiliária Credenciada (CRECI-BA)` em badge dourado/platina com brilho.
  * `★ Loja Oficial Auditada` ou `🏢 Empresa Verificada em VCA`.
* **Funcionalidades & Permissões**:
  * ✅ Todas as funcionalidades dos Níveis 1 e 2.
  * ✅ **Anúncios Ilimitados ou Pacotes Pro** por vertical.
  * ✅ **Painel de Desempenho de Leads**: Métricas de visualizações, chamadas no WhatsApp, horários de maior pico e origem por bairro.
  * ✅ **Destaque Algorítmico**: Anúncios priorizados no topo das listas e no mapa interativo.
  * ✅ **Página Institucional da Empresa/Corretor**: Sub-hub dedicado (ex: `vca.market/pro/vca-imoveis`).
  * ✅ Suporte prioritário via WhatsApp direto da equipe Conquista Market.

---

## 3. Matriz Comparativa de Funcionalidades

| Funcionalidade / Permissão | Usuário Comum | Anunciante Particular | Conquista Pro (CRECI/CNPJ) |
| :--- | :---: | :---: | :---: |
| **Buscar e Filtrar por Bairro** | ✅ | ✅ | ✅ |
| **Salvar Favoritos & Alertas** | ✅ | ✅ | ✅ |
| **Iniciar Contato no WhatsApp** | ✅ | ✅ | ✅ |
| **Selo de Verificação Visual** | — | `👤 Particular (CPF)` | `✓ Pro Credenciado (CRECI)` |
| **Limite de Imóveis Ativos** | 0 | 1 | Ilimitado (Pacote Pro) |
| **Limite de Veículos/Produtos** | 0 | 1 a 3 | Ilimitado (Pacote Pro) |
| **Estatísticas de Leads/WhatsApp** | ❌ | Básico | Avançado (Dashboard) |
| **Prioridade nas Buscas** | — | Padrão | 🚀 Alta (Topo da Lista) |
| **Página Própria de Loja/Corretor**| ❌ | ❌ | ✅ (`vca.market/pro/...`) |

---

## 4. Governança Anti-Fraude & Qualidade de Dados

1. **Tentativa de Corretagem sem CRECI**: Se uma conta *Particular* tentar publicar múltiplos imóveis utilizando números de telefone diferentes ou dados duplicados, o sistema bloqueia os anúncios e solicita upgrade para conta *Conquista Pro CRECI*.
2. **Denúncias de Anúncios**: Qualquer usuário pode denunciar um anúncio por "Preço Falso", "Imóvel Inexistente" ou "Fraude". 3 denúncias auditadas suspendem temporariamente a conta do anunciante.
3. **Auditoria de Endereço em VCA**: Anúncios de empresas exigem confirmação de localização física no mapa de Vitória da Conquista.
