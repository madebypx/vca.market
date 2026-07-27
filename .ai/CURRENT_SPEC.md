# CURRENT_SPEC.md — Experiências Temáticas Dedicadas de Serviços, Comércio e Vagas

## Active task
Implementação das Páginas de Detalhes Temáticas Restantes (`/servicos/[id]`, `/comercio/[id]`, `/vagas/[id]`)

## Goal
Construir experiências de detalhamento altamente especializadas e customizadas para as verticais de Serviços, Comércio e Vagas de Emprego em Vitória da Conquista, garantindo que cada página ofereça a micro-UX perfeita para seu modelo de negócio.

## Scope

### 1. 🛠️ Detalhe Temático de Serviços (`/servicos/[id]`)
- Perfil do Prestador / Profissional de Vitória da Conquista.
- Badges de atendimento: *Atendimento em Domicílio em VCA*, *Orçamento Grátis sem Compromisso*, *Garantia do Serviço*.
- Galeria de Portfólio de Trabalhos Realizados (com fotos Antes & Depois).
- Tabela de Preços Estimados / Hora de Trabalho.
- Avaliações em Estrelas e Sidebar de Agendamento no WhatsApp.

### 2. 🛍️ Detalhe Temático de Comércio & Produtos (`/comercio/[id]`)
- Vitrine de E-Commerce & Loja Física de Conquista.
- Badges de compra: *Condição (Novo / Seminovo / Usado)*, *Pronta Entrega*, *Garantia do Produto*.
- Informações de Logística Local: *Polo de Retirada Física (Centro / Bairro Brasil / Candeias)* e *Entrega Expressa via Motoboy em VCA*.
- Galeria de Fotos em Alta Resolução do Produto.
- Sidebar de Compra & Reserva Direta no WhatsApp.

### 3. 💼 Detalhe Temático de Vagas de Emprego (`/vagas/[id]`)
- Ficha de Recrutamento & Oportunidades em Vitória da Conquista.
- Destaques do Cargo: Empresa Contratante, Bairro da Vaga, Faixa Salarial em Destaque, Modelo (*Presencial*, *Híbrido*, *Remoto*), Contrato (*CLT*, *PJ*, *Estágio*).
- Descrição Detalhada da Vaga, Requisitos Obrigatórios e Benefícios (Vale Transporte, VR, Plano de Saúde).
- Botão *"Candidatar-se com Mini-Currículo Rápido"* com acionamento do `CurriculoQuickGeneratorModal`.

## Acceptance criteria
- Rotas `/servicos/[id]`, `/comercio/[id]` e `/vagas/[id]` operacionais e vinculadas aos cards das respectivas listagens.
- Design responsivo alinhado ao `.ai/DESIGN.md` com suporte a Dark/Light Mode.
- `npm run build` compilando 100% limpo com 0 erros de TypeScript.

## Out of scope nesta Sprint
- Sistema de checkout e pagamento por cartão dentro da plataforma (negociação e vendas tratadas via WhatsApp Lead Dispatcher).

## Deliverables
- `src/app/servicos/[id]/page.tsx`
- `src/app/comercio/[id]/page.tsx`
- `src/app/vagas/[id]/page.tsx`
- `src/components/servicos/ServicoCard.tsx` (atualizado com Link)
- `src/components/comercio/ComercioCard.tsx` (atualizado com Link)
- `src/components/vagas/VagaCard.tsx` (atualizado com Link)
