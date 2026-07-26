export interface VagaItem {
  id: string;
  title: string;
  area: 'vendas' | 'atendimento' | 'ti' | 'admin' | 'saude' | 'logistica';
  companyName: string;
  workModel: 'presencial' | 'hibrido' | 'remoto';
  contractType: 'clt' | 'pj' | 'estagio';
  salaryRange: string;
  neighborhood: string;
  requirements: string[];
  verificationTier: 'gold' | 'silver' | 'platinum';
  verificationLabel: string;
  postedDate: string;
  description: string;
}

export const MOCK_VAGAS: VagaItem[] = [
  {
    id: 'vga-001',
    title: 'Consultor de Vendas Internas & Atendimento Comercial',
    area: 'vendas',
    companyName: 'Lojas Conquista Tech',
    workModel: 'presencial',
    contractType: 'clt',
    salaryRange: 'R$ 2.200 + Comissões',
    neighborhood: 'Centro',
    requirements: ['Experiência em vendas', 'Boa comunicação', 'Ensino Médio completo'],
    verificationTier: 'gold',
    verificationLabel: '✓ Empresa Verificada em VCA',
    postedDate: 'Há 2 dias',
    description: 'Atendimento ao cliente presencial e via WhatsApp na loja do Centro, prospecção e fechamento de vendas de eletrônicos.',
  },
  {
    id: 'vga-002',
    title: 'Desenvolvedor Front-end React / Next.js Pleno',
    area: 'ti',
    companyName: 'Agência Digital VCA',
    workModel: 'hibrido',
    contractType: 'pj',
    salaryRange: 'R$ 5.500 - R$ 7.000',
    neighborhood: 'Candeias',
    requirements: ['Next.js / TypeScript', 'Tailwind CSS', 'Git & GitHub'],
    verificationTier: 'platinum',
    verificationLabel: '✓ Parceiro Oficial Pro',
    postedDate: 'Há 1 dia',
    description: 'Desenvolvimento de ecossistemas web e plataformas locais com horário flexível e modelo híbrido no Candeias.',
  },
  {
    id: 'vga-003',
    title: 'Auxiliar Administrativo & Financeiro',
    area: 'admin',
    companyName: 'Distribuidora Sudoeste',
    workModel: 'presencial',
    contractType: 'clt',
    salaryRange: 'R$ 2.400 - R$ 2.800',
    neighborhood: 'Bairro Brasil',
    requirements: ['Domínio de Excel', 'Contas a pagar/receber', 'Residir em VCA'],
    verificationTier: 'gold',
    verificationLabel: '✓ Empresa Conquistense',
    postedDate: 'Há 3 dias',
    description: 'Emissão de notas fiscais, controle de fluxo de caixa e suporte ao setor contábil da distribuidora.',
  },
  {
    id: 'vga-004',
    title: 'Técnico de Enfermagem para Atendimento Residencial',
    area: 'saude',
    companyName: 'Home Care Conquista Saúde',
    workModel: 'presencial',
    contractType: 'clt',
    salaryRange: 'R$ 3.100 + Insalubridade',
    neighborhood: 'Recreio',
    requirements: ['COREN-BA ativo', 'Experiência em Home Care', 'Disponibilidade de escala'],
    verificationTier: 'gold',
    verificationLabel: '✓ Clínica Verificada',
    postedDate: 'Hoje',
    description: 'Acompanhamento e procedimentos de enfermagem residencial em pacientes atendidos no Recreio e Candeias.',
  },
  {
    id: 'vga-005',
    title: 'Motorista Entregador / Operador de Logística',
    area: 'logistica',
    companyName: 'Express Cargas Vitória',
    workModel: 'presencial',
    contractType: 'clt',
    salaryRange: 'R$ 2.100 + VR + VT',
    neighborhood: 'Boa Vista',
    requirements: ['CNH B ou D definitiva', 'Conhecimento dos bairros de VCA', 'Pontualidade'],
    verificationTier: 'silver',
    verificationLabel: '✓ Empresa Local Auditada',
    postedDate: 'Há 4 dias',
    description: 'Entrega de encomendas e mercadorias comerciais nos bairros de Vitória da Conquista com veículo da empresa.',
  },
  {
    id: 'vga-006',
    title: 'Operador de Caixa & Atendimento ao Cliente',
    area: 'atendimento',
    companyName: 'Supermercado Olívia Flores',
    workModel: 'presencial',
    contractType: 'clt',
    salaryRange: 'R$ 1.850 + Quebra de Caixa',
    neighborhood: 'Candeias',
    requirements: ['Ensino Médio completo', 'Agilidade', 'Boa dicção'],
    verificationTier: 'gold',
    verificationLabel: '✓ Empresa Verificada em VCA',
    postedDate: 'Hoje',
    description: 'Abertura e fechamento de caixa, registro de mercadorias e atendimento cortês aos clientes no bairro Candeias.',
  },
];
