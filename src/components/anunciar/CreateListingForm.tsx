'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CategoryId, CategoryAttributes } from '@/types/database';
import { ImageUploader } from '@/components/common/ImageUploader';
import { createListing } from '@/app/actions/listings';
import { CategorySelectionCard } from './CategorySelectionCard';

const NEIGHBORHOODS = [
  'Candeias',
  'Recreio',
  'Centro',
  'Bairro Brasil',
  'Zabelê',
  'Alto Maron',
  'Boa Vista',
  'Felícia',
  'Universidade',
  'Ibirapuera',
  'Jardim Guanabara',
];

const CATEGORIES_DATA: Array<{
  id: CategoryId;
  title: string;
  subtitle: string;
  icon: string;
  badges: string[];
}> = [
  {
    id: 'imoveis',
    title: 'Imóveis',
    subtitle: 'Apartamentos, casas, terrenos e salas comerciais em Vitória da Conquista.',
    icon: '🏡',
    badges: ['CRECI-BA', 'Venda/Aluguel', 'Planta/Pronto'],
  },
  {
    id: 'veiculos',
    title: 'Veículos',
    subtitle: 'Carros, motos e utilitários com dados comparativos da Tabela FIPE.',
    icon: '🚗',
    badges: ['Tabela FIPE', 'Laudo Cautelar', 'Loja/Particular'],
  },
  {
    id: 'servicos',
    title: 'Serviços Profissionais',
    subtitle: 'Autônomos, técnicos e empresas prestadoras de serviço em VCA.',
    icon: '🛠️',
    badges: ['★ Avaliações', 'Atende em Domicílio', 'Orçamento Grátis'],
  },
  {
    id: 'comercio',
    title: 'Comércio & Produtos',
    subtitle: 'Produtos novos ou seminovos de lojas e vendedores locais.',
    icon: '🛍️',
    badges: ['Loja Física auditada', 'Novo/Usado', 'Retirada no Centro'],
  },
  {
    id: 'vagas',
    title: 'Vagas de Emprego',
    subtitle: 'Oportunidades de trabalho e contratação para moradores de Conquista.',
    icon: '💼',
    badges: ['CLT / PJ', 'Presencial / Remoto', 'Contato Direto RH'],
  },
];

export const CreateListingForm: React.FC = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [category, setCategory] = useState<CategoryId>('imoveis');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Campos principais
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [neighborhood, setNeighborhood] = useState(NEIGHBORHOODS[0]);
  const [images, setImages] = useState<string[]>([]);

  // Campos específicos de Imóveis
  const [propertyType, setPropertyType] = useState('apartamento');
  const [transactionType, setTransactionType] = useState('venda');
  const [usableArea, setUsableArea] = useState('85');
  const [bedrooms, setBedrooms] = useState('3');
  const [bathrooms, setBathrooms] = useState('2');
  const [parkingSpots, setParkingSpots] = useState('1');
  const [creciNumber, setCreciNumber] = useState('');

  // Campos específicos de Veículos
  const [brand, setBrand] = useState('Toyota');
  const [model, setModel] = useState('Corolla');
  const [year, setYear] = useState('2022');
  const [mileageKm, setMileageKm] = useState('45000');
  const [transmission, setTransmission] = useState('automatico');
  const [fuel, setFuel] = useState('flex');
  const [fipePrice, setFipePrice] = useState('115000');

  // Campos específicos de Serviços
  const [specialty, setSpecialty] = useState('Técnico Especializado');
  const [homeService, setHomeService] = useState(true);

  // Campos específicos de Comércio
  const [condition, setCondition] = useState('novo');
  const [hasWarranty, setHasWarranty] = useState(true);
  const [deliveryAvailable, setDeliveryAvailable] = useState(true);

  // Campos específicos de Vagas
  const [workModel, setWorkModel] = useState('presencial');
  const [contractType, setContractType] = useState('clt');
  const [salaryRange, setSalaryRange] = useState('R$ 2.500 - R$ 3.500');

  const handleNextStep = () => {
    setErrorMsg(null);
    if (currentStep === 1 && !category) {
      setErrorMsg('Selecione uma categoria para continuar.');
      return;
    }
    if (currentStep === 2 && images.length === 0) {
      setErrorMsg('Adicione pelo menos 1 foto para o anúncio.');
      return;
    }
    if (currentStep === 3 && !title.trim()) {
      setErrorMsg('Informe o título do anúncio para continuar.');
      return;
    }

    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setErrorMsg(null);
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      let categoryAttributes: Record<string, unknown> = {};

      if (category === 'imoveis') {
        categoryAttributes = {
          property_type: propertyType,
          transaction_type: transactionType,
          usable_area_m2: parseFloat(usableArea) || 0,
          bedrooms: parseInt(bedrooms, 10) || 0,
          bathrooms: parseInt(bathrooms, 10) || 0,
          parking_spots: parseInt(parkingSpots, 10) || 0,
          creci_number: creciNumber || undefined,
        };
      } else if (category === 'veiculos') {
        categoryAttributes = {
          brand: brand || 'Toyota',
          model: model || title,
          year: parseInt(year, 10) || 2022,
          mileage_km: parseInt(mileageKm, 10) || 0,
          transmission,
          fuel,
          fipe_price_reference: parseFloat(fipePrice) || undefined,
          has_cautelar_approved: true,
        };
      } else if (category === 'servicos') {
        categoryAttributes = {
          specialty: specialty || title,
          home_service_available: homeService,
          pricing_model: 'orcamento_gratis',
        };
      } else if (category === 'comercio') {
        categoryAttributes = {
          condition,
          has_warranty: hasWarranty,
          delivery_available: deliveryAvailable,
        };
      } else if (category === 'vagas') {
        categoryAttributes = {
          job_title: title,
          work_model: workModel,
          contract_type: contractType,
          salary_range: salaryRange || 'A combinar',
        };
      }

      await createListing({
        user_id: 'usr-current-user',
        category_id: category,
        title,
        description,
        price: parseFloat(price) || 0,
        neighborhood,
        images,
        status: 'active',
        is_featured: false,
        category_attributes: categoryAttributes as unknown as CategoryAttributes,
      });

      router.push(`/${category}`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Falha ao publicar anúncio.';
      setErrorMsg(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const stepsLabels = [
    '1. Categoria',
    '2. Mídia',
    '3. Informações Básicas',
    '4. Ficha Técnica',
    '5. Revisão & Publicação',
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Wizard Header Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Publicar Anúncio no Conquista Market
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Passo {currentStep} de 5 — {stepsLabels[currentStep - 1]}
            </p>
          </div>

          <span className="self-start text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">
            Anúncio Hiperlocal VCA
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-slate-900 dark:bg-white h-full transition-all duration-300 rounded-full"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          />
        </div>

        {/* Steps Breadcrumbs */}
        <div className="hidden sm:grid grid-cols-5 gap-2 mt-3 text-[11px] font-medium text-center text-slate-400">
          {stepsLabels.map((label, idx) => (
            <span
              key={idx}
              className={
                idx + 1 === currentStep
                  ? 'text-slate-900 dark:text-white font-bold'
                  : idx + 1 < currentStep
                  ? 'text-slate-600 dark:text-slate-300'
                  : ''
              }
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Main Wizard Form Container */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs min-h-[420px] flex flex-col justify-between"
      >
        {/* STEP 1: Category Selection */}
        {currentStep === 1 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Selecione a categoria do seu anúncio
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Escolha o segmento adequado para exibir seu anúncio aos compradores de Vitória da Conquista.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {CATEGORIES_DATA.map((cat) => (
                <CategorySelectionCard
                  key={cat.id}
                  id={cat.id}
                  title={cat.title}
                  subtitle={cat.subtitle}
                  icon={cat.icon}
                  badges={cat.badges}
                  isSelected={category === cat.id}
                  onSelect={(selectedId) => setCategory(selectedId)}
                />
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Media Upload */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Fotos do Anúncio
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Envie até 6 fotos com compressão otimizada automática em WebP.
              </p>
            </div>

            <ImageUploader maxImages={6} onImagesUploaded={setImages} />
          </div>
        )}

        {/* STEP 3: Basic Info & Location */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Informações Principais & Localização
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Defina o título, valor e o bairro de Vitória da Conquista.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Título do Anúncio *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Casa com 3 quartos e garagem no Candeias"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Preço (R$) {category === 'vagas' ? '(Opcional)' : '*'}
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="480000"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Bairro em Vitória da Conquista *
                </label>
                <select
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-slate-900"
                >
                  {NEIGHBORHOODS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Descrição do Anúncio
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descreva detalhes sobre o imóvel, veículo, produto ou serviço..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Technical Specs */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Ficha Técnica ({category.toUpperCase()})
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Atributos específicos da categoria para qualificação do anúncio.
              </p>
            </div>

            {category === 'imoveis' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Tipo</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  >
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="terreno">Terreno</option>
                    <option value="comercial">Comercial</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Área Útil (m²)</label>
                  <input
                    type="number"
                    value={usableArea}
                    onChange={(e) => setUsableArea(e.target.value)}
                    className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Quartos</label>
                  <input
                    type="number"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Registro CRECI</label>
                  <input
                    type="text"
                    value={creciNumber}
                    onChange={(e) => setCreciNumber(e.target.value)}
                    placeholder="CRECI-BA 12345"
                    className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>
              </div>
            )}

            {category === 'veiculos' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Marca</label>
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Modelo</label>
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Ano</label>
                  <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Ref. Tabela FIPE (R$)</label>
                  <input
                    type="number"
                    value={fipePrice}
                    onChange={(e) => setFipePrice(e.target.value)}
                    className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>
              </div>
            )}

            {category === 'vagas' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Modelo</label>
                  <select
                    value={workModel}
                    onChange={(e) => setWorkModel(e.target.value)}
                    className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  >
                    <option value="presencial">Presencial</option>
                    <option value="hibrido">Híbrido</option>
                    <option value="remoto">Remoto</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Contrato</label>
                  <select
                    value={contractType}
                    onChange={(e) => setContractType(e.target.value)}
                    className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  >
                    <option value="clt">CLT</option>
                    <option value="pj">PJ</option>
                    <option value="estagio">Estágio</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Faixa Salarial</label>
                  <input
                    type="text"
                    value={salaryRange}
                    onChange={(e) => setSalaryRange(e.target.value)}
                    className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 5: Review & Confirm */}
        {currentStep === 5 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Revisão do Anúncio
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Verifique os dados antes da publicação no Conquista Market.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-4 items-start text-xs">
              {images.length > 0 ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={images[0]}
                  alt="Preview Anúncio"
                  className="w-full sm:w-36 h-36 object-cover rounded-lg border border-slate-200 dark:border-slate-700"
                />
              ) : (
                <div className="w-full sm:w-36 h-36 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400">
                  Sem Foto
                </div>
              )}

              <div className="space-y-2 flex-1">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  {category.toUpperCase()} — {neighborhood}
                </span>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">{title || 'Título do Anúncio'}</h3>
                <div className="text-lg font-extrabold text-slate-900 dark:text-white">
                  R$ {price ? parseFloat(price).toLocaleString('pt-BR') : '0,00'}
                </div>

                <p className="text-slate-600 dark:text-slate-400 line-clamp-2">{description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Notification */}
        {errorMsg && <p className="text-xs font-semibold text-red-600 dark:text-red-400">{errorMsg}</p>}

        {/* Wizard Footer Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={handlePrevStep}
            disabled={currentStep === 1 || submitting}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-30"
          >
            ← Voltar
          </button>

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 rounded-lg transition-all shadow-xs"
            >
              Avançar →
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-sm disabled:opacity-50"
            >
              {submitting ? 'Publicando...' : 'Publicar Anúncio Agora'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
