# Strategic Blueprint: VCA Market / Conquista Market
*Plataforma de Ecossistema de Comércio e Serviços Locais de Vitória da Conquista, BA*

---

## 1. Product Vision & Brand Positioning
- **Nome Comercial Sugerido:** **Conquista Market** (Powered by `vca.market`)
- **Declaração de Visão:** *"O Centro de Gravidade Econômico Digital de Vitória da Conquista."*
- **Posicionamento Estratégico:** 
  Diferente de um "classificado genérico", o Conquista Market nasce para ser a **infraestrutura de negócios da cidade**. Vitória da Conquista é a 3ª maior cidade da Bahia e o polo econômico de mais de 80 municípios do Sudoeste Baiano e Norte de Minas Gerais. O Conquista Market não é apenas um site de anúncios usados; é o ponto de encontro profissional entre consumidores locais, comerciantes do Centro e dos Bairros, corretores, prestadores de serviço e prestadores de oportunidade.

---

## 2. Personas & User Goals

| Persona | Perfil | Objetivo Principal | Frustração Atual em Outras Plataformas |
| :--- | :--- | :--- | :--- |
| **Consumidor Conquistense** | Morador local buscando produtos, imóveis, carros ou serviços | Encontrar ofertas reais com segurança, verificação local e contato rápido via WhatsApp | Golpes em plataformas abertas, falta de resposta, anúncios fora da cidade |
| **Comerciante / PME Local** | Lojista do Centro, Bairro Brasil, Candeias, Shopping | Ter uma vitrine digital profissional com selo de loja física e canal direto de vendas | Taxas abusivas de e-commerce e perda de identidade local |
| **Prestador de Serviços** | Eletricista, técnico, designer, autônomo | Construir reputação local baseada em avaliações reais e portfólio | Dependência exclusiva de indicação "boca a boca" informal |
| **Agente Imobiliário / Veículos** | Corretor, concessionária, loja de seminovos | Captar leads qualificados da região com filtros específicos da categoria | Falta de campos específicos e excesso de anúncios desatualizados |

---

## 3. High-Level Platform Structure & Architecture

A arquitetura deve seguir o padrão **Core Platform Engine + Verticalized UX Modules**:

```mermaid
graph TD
    User Shell["UX Shell & Design System (Header, Busca Global, Auth, Selos)"] --> DynamicRouter

    DynamicRouter --> CoreModule["Core Platform Engine"]
    DynamicRouter --> Verticals["Verticalized Micro-UX Modules"]

    subgraph CoreModule ["Core Engine"]
        Identity["Perfil & Verificação de Selos"]
        Geofence["Engine de Bairros de VCA"]
        SearchEngine["Busca Híbrida & Filtros"]
        LeadDispatcher["Gerenciador de Leads & WhatsApp"]
        MonetizationEngine["Planos & Ad Boosts"]
    end

    subgraph Verticals ["Módulos Específicos por Categoria"]
        RealEstate["Imóveis (Mapa, m², Bairro, Vagas)"]
        Vehicles["Veículos (Tabela FIPE, Km, Laudo)"]
        Services["Serviços (Portfólio, Avaliações, Orçamento)"]
        LocalRetail["Comércio & Produtos (Catálogo, Retirada)"]
        Jobs["Empregos & Oportunidades (Currículo, Vagas)"]
    end
```

---

## 4. Category-Specific Experiences (Vertical Micro-UX)

Para manter **coerência global** sem engessar as categorias:

1. **Imóveis:**
   - **Visão Prioritária:** Mapa interativo filtrado por Bairro (Candeias, Recreio, Boa Vista, Alto Maron, etc.).
   - **Atributos Chave:** Tipo, área útil ($m^2$), dormitórios, vagas, taxa de condomínio, opção de aluguel ou venda.
   - **CTA de Conversão:** *"Agendar Visita"* ou *"Solicitar Proposta no WhatsApp"*.

2. **Veículos:**
   - **Visão Prioritária:** Cards com comparação em relação à Tabela FIPE e laudo cautelar.
   - **Atributos Chave:** Ano/Modelo, Quilometragem, Câmbio, Combustível, Único Dono, Aceita Troca.
   - **CTA de Conversão:** *"Simular Financiamento"* ou *"Falar com Vendedor"*.

3. **Serviços & Profissionais:**
   - **Visão Prioritária:** Grid estilo portfólio com badge de verificação e nota média de clientes de Conquista.
   - **Atributos Chave:** Região de atendimento (atende em domicílio?), orçamento estimado, fotos de trabalhos anteriores.
   - **CTA de Conversão:** *"Solicitar Orçamento Grátis"* ou *"Ver Galeria de Projetos"*.

4. **Comércio Local & Produtos (Novos e Usados):**
   - **Visão Prioritária:** Vitrine com disponibilidade imediata para retirada no bairro ou entrega rápida via motoboy.
   - **Atributos Chave:** Condição (Novo / Usado), Loja Física vs Vendedor Particular, Garantia.
   - **CTA de Conversão:** *"Chamar no WhatsApp da Loja"*.

---

## 5. Trust, Credibility & Professionalization Mechanisms

- **Selo "Empresa Conquistense Verificada"**: Confirmação de CNPJ, endereço físico auditado (Centro, Bairro Brasil, etc.) e telefone comercial.
- **Selo "Morador Verificado"**: Autenticação via CPF / chave Pix para vendedores particulares.
- **Geolocalização Transparente por Bairro**: Anúncios etiquetados com bairros reais de Vitória da Conquista.
- **Avaliações Autênticas pós-Interação**: Apenas usuários que iniciaram conversa ou transação podem avaliar o vendedor/prestador.
- **Canal Anti-Golpe Local**: Sistema automático que alerta contra transferências antecipadas sem verificação física prévia.

---

## 6. Monetization Engine

```
                       ┌──────────────────────────────────────┐
                       │      MODELO DE MONETIZAÇÃO           │
                       └──────────────────┬───────────────────┘
                                          │
            ┌─────────────────────────────┴─────────────────────────────┐
            ▼                                                           ▼
┌─────────────────────────┐                                 ┌─────────────────────────┐
│     PLANOS PREMIUM      │                                 │     PROMOÇÃO & ADS      │
│     (CONQUISTA PRO)     │                                 │      PATROCINADOS       │
└───────────┬─────────────┘                                 └───────────┬─────────────┘
            │                                                           │
 ├── Loja Local Pro (R$ 49-99/mês)                               ├── Destaque Bairro / Categoria
 ├── Imobiliária / Autos (R$ 149-399/mês)                        ├── Topo da Busca ("Impulsionado")
 └── Profissional VIP (R$ 29-59/mês)                             └── Banners de Empresas Nativas
```

1. **Destaques Avulsos (Pay-per-boost):**
   - R$ 9,90 a R$ 29,90 para impulsionar anúncio particular no topo por 7 a 15 dias.
2. **Assinatura "Conquista Pro" (Recorrência SaaS):**
   - **Lojas Locais:** Página exclusiva (`vca.market/nome-da-loja`), catálogo ilimitado, link direto para WhatsApp de vendas, relatórios de cliques.
   - **Imobiliárias e Concessionárias:** Integração via feed/XML, gestão de múltiplos corretores, selo de credibilidade máxima.
3. **Publicidade Nativa de Impacto Local:**
   - Espaços patrocinados para faculdades locais, construtoras, concessionárias e eventos de VCA.

---

## 7. Phased Product Evolution Strategy

- **Fase 1 (Lançamento Web / SEO Local / PWA):**
  - Foco em indexação forte no Google para buscas como *"imóveis candeias conquista"*, *"técnico de geladeira vca"*.
  - Navegação ultrarrápida, design moderno e compartilhamento instantâneo no WhatsApp.
- **Fase 2 (PWA Instalável & Notificações de Leads):**
  - Notificações push para vendedores quando receberem interesse.
  - Painel de métricas para assinantes Conquista Pro.
- **Fase 3 (Aplicativo Mobile Nativo iOS & Android):**
  - Lançamento do app nativo com experiência de câmera simplificada para cadastro de anúncios em segundos e chat interno com status de entrega.

---

## 8. Core Experience Principles

1. **Orgulho & Identidade Local:** A plataforma deve respirar Vitória da Conquista em termos visuais, nomenclaturas e navegação por bairros.
2. **Zero Atrito na Conversão:** O WhatsApp é o canal preferido do baiano. A plataforma facilita o primeiro contato instantâneo.
3. **Profissionalização do Comércio Informação:** Capacitar pequenos empreendedores de VCA a parecerem marcas consolidadas.
4. **Excelência Estética & Fluidez:** Interface moderna, com animações sutis, cores curadas e tipografia limpa.
