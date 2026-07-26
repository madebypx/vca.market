export interface DemandaItem {
  id: string;
  title: string;
  category: 'imoveis' | 'veiculos' | 'servicos' | 'comercio' | 'vagas';
  neighborhood: string;
  maxBudget?: number;
  budgetText?: string;
  requesterName: string;
  requesterPhone: string;
  verificationBadge: 'Morador Verificado' | 'Empresa Conquistense';
  createdAt: string;
  expiresInDays: number;
  description: string;
}

export const MOCK_DEMANDAS: DemandaItem[] = [
  {
    id: 'dmd-001',
    title: 'Procuro apartamento de 2 quartos para alugar no Candeias',
    category: 'imoveis',
    neighborhood: 'Candeias',
    maxBudget: 2000,
    budgetText: 'Até R$ 2.000 / mês (com condomínio)',
    requesterName: 'Matheus Oliveira',
    requesterPhone: '5577999887766',
    verificationBadge: 'Morador Verificado',
    createdAt: '2026-07-26',
    expiresInDays: 5,
    description: 'Preciso de um apartamento de 2 quartos com garagem no Candeias ou Recreio para mudança imediata. Preferência com varanda.',
  },
  {
    id: 'dmd-002',
    title: 'Preciso de Eletricista Residencial para troca de fiação',
    category: 'servicos',
    neighborhood: 'Bairro Brasil',
    maxBudget: 500,
    budgetText: 'Orçamento até R$ 500',
    requesterName: 'Juliana Costa',
    requesterPhone: '5577999112233',
    verificationBadge: 'Morador Verificado',
    createdAt: '2026-07-26',
    expiresInDays: 3,
    description: 'Procuro técnico eletricista credenciado em Conquista para revisão no quadro de distribuição e troca de disjuntores.',
  },
  {
    id: 'dmd-003',
    title: 'Procuro Toyota Hilux ou Corolla Seminovo (2020 a 2023)',
    category: 'veiculos',
    neighborhood: 'Recreio',
    maxBudget: 140000,
    budgetText: 'Até R$ 140.000 à vista',
    requesterName: 'Empresa Conquista Agro',
    requesterPhone: '5577999334455',
    verificationBadge: 'Empresa Conquistense',
    createdAt: '2026-07-25',
    expiresInDays: 7,
    description: 'Comprador particular procurando veículo seminovo com revisão em dia e laudo cautelar aprovado em Vitória da Conquista.',
  },
  {
    id: 'dmd-004',
    title: 'Procuro geladeira frost free usada em bom estado',
    category: 'comercio',
    neighborhood: 'Alto Maron',
    maxBudget: 1200,
    budgetText: 'Até R$ 1.200',
    requesterName: 'Lucas Andrade',
    requesterPhone: '5577999556677',
    verificationBadge: 'Morador Verificado',
    createdAt: '2026-07-26',
    expiresInDays: 4,
    description: 'Procuro refrigerador em funcionamento perfeito para entrega no Alto Maron ou retirada no Centro.',
  },
];
