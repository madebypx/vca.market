# DEPLOYMENT_GUIDE.md — Guia Oficial de Lançamento em Produção (`vca-market.vercel.app`)

Este documento instrui o desenvolvedor na publicação e operacionalização pública do **Conquista Market** no domínio gratuito **`vca-market.vercel.app`**.

---

## 📋 Checklist de Pré-Requisitos

- [x] Repositório GitHub oficial sincronizado: `madebypx/vca.market`
- [x] Schema PostgreSQL completo com RLS: [`supabase/migrations/20260726_initial_schema.sql`](file:///c:/Users/digo_/Documents/Programa%C3%A7%C3%A3o/GitHub/vca.market/supabase/migrations/20260726_initial_schema.sql)
- [x] 21 Rotas Web Shell compilando com 0 erros no Next.js 16 (`npm run build`)
- [ ] Conta na **Vercel** (Hospedagem & CDN Edge Gratuita)
- [ ] Projeto criado no **Supabase Cloud** (Plano Gratuito)

---

## 🚀 Passo a Passo de Implantação

### Passo 1: Configurar Banco de Dados no Supabase Cloud (100% Grátis)

1. Acesse [supabase.com](https://supabase.com) e crie um novo projeto gratuito chamado `vca-market-prod`.
2. Escolha a região `South America (São Paulo) - sa-east-1` para menor latência em Vitória da Conquista.
3. No painel **SQL Editor**, abra e execute o conteúdo do arquivo [`supabase/migrations/20260726_initial_schema.sql`](file:///c:/Users/digo_/Documents/Programa%C3%A7%C3%A3o/GitHub/vca.market/supabase/migrations/20260726_initial_schema.sql).
4. No painel **Storage**, crie os buckets públicos:
   - `listings-images` (Público, suporte a WebP)
   - `avatars` (Público)
   - `verification-docs` (Privado, restrito por RLS)

---

### Passo 2: Configurar Autenticação sem Custos (Email / Magic Link / Demo OTP)

Como não utilizaremos Z-API no momento, o projeto suporta 2 opções **100% gratuitas**:

1. **Email / Magic Link NATIVO (Sem Custos)**:
   - O próprio Supabase envia e-mails com links mágicos e códigos OTP gratuitos (até 50.000 usuários por mês).
2. **Modo Demo OTP Gracioso**:
   - Em testes no `vca-market.vercel.app`, a aplicação possui um fallback interno que aceita o código de teste `123456` para que qualquer visitante possa experimentar a plataforma instantaneamente sem precisar pagar APIs de SMS/WhatsApp.

---

### Passo 3: Deploy no Vercel (`vca-market.vercel.app`)

1. Acesse [vercel.com](https://vercel.com) e importe o repositório `madebypx/vca.market`.
2. O nome do projeto será **`vca-market`**, gerando a URL oficial: **`https://vca-market.vercel.app`**.
3. Em **Environment Variables**, adicione:

| Variável | Valor | Descrição |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://SEU_PROJETO.supabase.co` | URL do projeto no Supabase Cloud |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbG...` | Chave pública anônima do Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbG...` | Chave privada de serviço (sigilosa) |
| `NEXT_PUBLIC_SITE_URL` | `https://vca-market.vercel.app` | URL de produção na Vercel |

4. Clique em **Deploy**.

---

## 📈 Estratégia de Tração Inicial (Bairros de VCA)

1. **População Inicial de Anúncios**: Cadastrar 50 imóveis reais de imobiliárias parceiras do Candeias/Recreio e 30 veículos de lojas de carros de Conquista.
2. **Divulgação Hiperlocal**: Compartilhar o link `https://vca-market.vercel.app` em grupos de WhatsApp dos bairros Candeias, Recreio, Centro e Bairro Brasil.
