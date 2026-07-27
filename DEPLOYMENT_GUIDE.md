# DEPLOYMENT_GUIDE.md — Guia Oficial de Lançamento de Produção (`vca.market`)

Este documento instrui o desenvolvedor/equipe técnica na publicação e operacionalização oficial do **Conquista Market (`vca.market`)** para a população de Vitória da Conquista.

---

## 📋 Checklist de Pré-Requisitos

- [x] Repositório GitHub oficial sincronizado: `madebypx/vca.market`
- [x] Schema PostgreSQL completo com RLS: [`supabase/migrations/20260726_initial_schema.sql`](file:///c:/Users/digo_/Documents/Programa%C3%A7%C3%A3o/GitHub/vca.market/supabase/migrations/20260726_initial_schema.sql)
- [x] 21 Rotas Web Shell compilando com 0 erros no Next.js 16 (`npm run build`)
- [ ] Conta na **Vercel** (Hospedagem & CDN Edge)
- [ ] Projeto criado no **Supabase Cloud**
- [ ] Provedor de Disparo de WhatsApp registrado (Z-API ou Evolution API)

---

## 🚀 Passo a Passo de Implantação

### Passo 1: Configurar Banco de Dados no Supabase Cloud

1. Acesse [supabase.com](https://supabase.com) e crie um novo projeto chamado `vca-market-prod`.
2. Escolha a região `South America (São Paulo) - sa-east-1` para menor latência.
3. No painel **SQL Editor**, abra e execute o conteúdo do arquivo [`supabase/migrations/20260726_initial_schema.sql`](file:///c:/Users/digo_/Documents/Programa%C3%A7%C3%A3o/GitHub/vca.market/supabase/migrations/20260726_initial_schema.sql).
4. No painel **Storage**, crie os buckets públicos:
   - `listings-images` (Público, suporte a WebP)
   - `avatars` (Público)
   - `verification-docs` (Privado, restrito por RLS)

---

### Passo 2: Configurar Envio de OTP no WhatsApp (Z-API)

1. Registre uma instância da [Z-API](https://z-api.io) para a linha de atendimento do Conquista Market.
2. Na Server Action `src/app/actions/auth.ts`, configure o disparo HTTP no método `sendOtpToPhone`:
   ```ts
   await fetch(`https://api.z-api.io/instances/SUA_INSTANCIA/token/SEU_TOKEN/send-text`, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       phone: phone,
       message: `🔑 Seu código de acesso ao Conquista Market (vca.market) é: ${code}`,
     }),
   });
   ```

---

### Passo 3: Deploy do Frontend na Vercel

1. Acesse [vercel.com](https://vercel.com) e importe o repositório `madebypx/vca.market`.
2. Em **Environment Variables**, adicione:

| Variável | Valor | Descrição |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://SEU_PROJETO.supabase.co` | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbG...` | Chave pública anônima do Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbG...` | Chave privada de serviço (sigilosa) |
| `NEXT_PUBLIC_SITE_URL` | `https://vca.market` | URL pública da plataforma |

3. Clique em **Deploy**.

---

### Passo 4: Apontar o Domínio `vca.market`

1. Na Vercel, acesse **Project Settings → Domains**.
2. Adicione `vca.market` e `www.vca.market`.
3. Altere os servidores DNS no seu registrador de domínios (Registro.br) para os Nameservers da Vercel (`ns1.vercel-dns.com` / `ns2.vercel-dns.com`).

---

## 📈 Estratégia de Tração Inicial (Bairros de VCA)

1. **População Inicial de Anúncios**: Cadastrar 50 imóveis reais de imobiliárias parceiras do Candeias/Recreio e 30 veículos de lojas de carros de Conquista.
2. **Divulgação em Grupos de Bairro**: Disseminar o link em grupos de WhatsApp dos bairros Candeias, Recreio, Centro e Bairro Brasil.
3. **Divulgação do Selo Pro**: Entrar em contato com corretores autônomos credenciados oferecendo o *Selo Conquista Pro CRECI* gratuito durante os primeiros 3 meses.
